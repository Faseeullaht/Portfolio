import { User, MapPin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SkillsGrid } from '@/components/SkillChip';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ResumeEmbed } from '@/components/ResumeEmbed';
import { personalInfo, skills, experience } from '@/data/constants';

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <User className="h-4 w-4" />
                About Me
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Building digital experiences that make a difference
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">{personalInfo.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Skills & Technologies
          </h2>
          <SkillsGrid skills={skills} />
        </section>

        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-12">
            Experience
          </h2>
          <ExperienceTimeline experiences={experience} />
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Resume
          </h2>
          <ResumeEmbed />
        </section>
      </div>
    </main>
  );
}
