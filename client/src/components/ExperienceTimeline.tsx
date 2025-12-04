import { Building2, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            data-testid={`timeline-item-${index}`}
          >
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-6" />

            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
              <Card className="p-6 hover:-translate-y-1 transition-transform">
                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {exp.role}
                  </h3>
                  <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.dates}
                    </span>
                  </div>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
