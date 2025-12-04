import { Badge } from '@/components/ui/badge';

interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-cyan/10 border border-primary/20"
      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {skill}
    </Badge>
  );
}

interface SkillsGridProps {
  skills: string[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillChip key={skill} skill={skill} />
      ))}
    </div>
  );
}
