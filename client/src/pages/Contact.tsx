import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';
import { personalInfo } from '@/data/constants';

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Get In Touch
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  data-testid="link-contact-email"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  data-testid="link-contact-github"
                >
                  <Github className="h-6 w-6 text-foreground" />
                  <span className="font-medium text-foreground">GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 flex-1 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-cyan/10 border-primary/20">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond within 24-48 hours. For urgent inquiries, 
                please reach out via LinkedIn for a faster response.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
