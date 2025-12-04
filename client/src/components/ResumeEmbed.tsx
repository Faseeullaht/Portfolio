import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { personalInfo } from '@/data/constants';

export function ResumeEmbed() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Resume
            </h3>
            <p className="text-sm text-muted-foreground">
              Download my full resume in PDF format
            </p>
          </div>
        </div>
        <a
          href={personalInfo.resumeUrl}
          download
          data-testid="button-download-resume"
        >
          <Button className="gap-2 bg-peach text-peach-foreground border-peach">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </a>
      </div>

      <div className="relative w-full aspect-[8.5/11] bg-muted rounded-lg overflow-hidden border border-border">
        <iframe
          src={`${personalInfo.resumeUrl}#view=FitH`}
          className="absolute inset-0 w-full h-full"
          title="Resume Preview"
          data-testid="iframe-resume"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-sm pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-muted-foreground text-sm">
            PDF preview may not be available in all browsers
          </p>
        </div>
      </div>
    </Card>
  );
}
