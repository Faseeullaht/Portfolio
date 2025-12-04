import { ProjectCard } from '../ProjectCard';
import { ThemeProvider } from '../ThemeProvider';

export default function ProjectCardExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-6 bg-background">
        <ProjectCard
          id="demo"
          title="E-Commerce Platform"
          description="A full-featured e-commerce platform with real-time inventory, secure payments, and admin dashboard."
          stack={['Next.js', 'Fastify', 'PostgreSQL', 'Stripe']}
          github="https://github.com/user/project"
          previewUrl="https://example.com"
          featured
          onLearnMore={(id) => console.log(`Learn more: ${id}`)}
        />
      </div>
    </ThemeProvider>
  );
}
