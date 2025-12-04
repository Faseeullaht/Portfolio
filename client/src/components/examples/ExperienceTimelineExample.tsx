import { ExperienceTimeline } from '../ExperienceTimeline';
import { ThemeProvider } from '../ThemeProvider';
import { experience } from '@/data/constants';

export default function ExperienceTimelineExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-6 bg-background">
        <ExperienceTimeline experiences={experience} />
      </div>
    </ThemeProvider>
  );
}
