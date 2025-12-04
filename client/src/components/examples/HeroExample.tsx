import { Hero } from '../Hero';
import { ThemeProvider } from '../ThemeProvider';

export default function HeroExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Hero />
    </ThemeProvider>
  );
}
