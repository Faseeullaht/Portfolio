import { SkillsGrid } from '../SkillChip';
import { ThemeProvider } from '../ThemeProvider';
import { skills } from '@/data/constants';

export default function SkillsGridExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-6 bg-background">
        <SkillsGrid skills={skills} />
      </div>
    </ThemeProvider>
  );
}
