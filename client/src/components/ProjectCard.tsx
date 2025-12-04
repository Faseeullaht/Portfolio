import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  previewUrl?: string;
  featured?: boolean;
  onLearnMore?: (id: string) => void;
}

export function ProjectCard({
  id,
  title,
  description,
  stack,
  github,
  previewUrl,
  featured = false,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <Card
      className={`group relative overflow-visible p-6 transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      data-testid={`card-project-${id}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                data-testid={`link-github-${id}`}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live preview"
                data-testid={`link-preview-${id}`}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {onLearnMore && (
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 p-0 h-auto text-primary"
            onClick={() => onLearnMore(id)}
            data-testid={`button-learn-more-${id}`}
          >
            Learn more
            <ArrowUpRight className="h-3 w-3" />
          </Button>
        )}
      </div>
    </Card>
  );
}
