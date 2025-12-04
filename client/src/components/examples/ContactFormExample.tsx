import { ContactForm } from '../ContactForm';
import { ThemeProvider } from '../ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

export default function ContactFormExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-6 bg-background">
        <ContactForm />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
