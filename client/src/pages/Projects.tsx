import { useState } from "react";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const [filter, setFilter] = useState<string | null>(null);

  const allTechs = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

  const filteredProjects = filter
    ? projects.filter((p) => p.stack.includes(filter))
    : projects;

  const handleLearnMore = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) setSelectedProject(project);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Layers className="h-4 w-4" />
            My Work
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack
            development
          </p>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
            >
              All
            </Button>

            {allTechs.slice(0, 8).map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </section>

        {/* PROJECT GRID (FIXED) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard
                {...project}
                className="h-full flex flex-col"
                github={
                  typeof project.github === "string"
                    ? project.github
                    : project.github.frontend
                }
                onLearnMore={handleLearnMore}
              />
            </div>
          ))}
        </section>

        {/* No Projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No projects found with the selected filter.
            </p>
            <Button
              variant="ghost"
              onClick={() => setFilter(null)}
              className="mt-2"
            >
              Clear filter
            </Button>
          </div>
        )}

        {/* MODAL */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-foreground">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {selectedProject.github && (
                      <a
                        href={
                          typeof selectedProject.github === "string"
                            ? selectedProject.github
                            : selectedProject.github.frontend
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">View on GitHub</Button>
                      </a>
                    )}

                    {selectedProject.previewUrl && (
                      <a
                        href={selectedProject.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-peach text-peach-foreground border-peach">
                          Live Preview
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
