// src/components/marketing/problem-solution-section.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle2, AlertTriangle, Zap } from 'lucide-react'; // Example icons

export function ProblemSolutionSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg animate-fadeIn">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-destructive">
                <div className="flex items-baseline gap-3"> {/* Changed to items-baseline and increased gap for visual balance */}
                  <XCircle className="h-8 w-8 shrink-0" /> {/* Matched icon size */}
                  <span>האתגר: הצפת מידע ובדיקות ידניות</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg text-muted-foreground">
              <p>תהליכי חיתום ובדיקת תביעות איטיים ומייגעים, המובילים לעומס עבודה משמעותי.</p>
              <p>סיכון גבוה לטעויות אנוש ופספוס פרטים קריטיים במסמכים רפואיים מורכבים.</p>
              <p>עיכובים במתן שירות ללקוחות הפוגעים בשביעות הרצון ובמוניטין החברה.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg animate-fadeIn [animation-delay:200ms]">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
                 <div className="flex items-baseline gap-3"> {/* Changed to items-baseline and increased gap */}
                  <CheckCircle2 className="h-8 w-8 shrink-0" /> {/* Matched icon size */}
                  <span>הפתרון: Policy Insights Pro</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg text-foreground">
              <p>ניתוח אוטומטי ומדויק של היסטוריה רפואית מול תנאי פוליסה באמצעות AI.</p>
              <p>זיהוי מיידי של התנגשויות, חריגות, ומצבים רפואיים קיימים המשפיעים על הכיסוי.</p>
              <p>יצירת דוחות תמציתיים וקריאים המסייעים בקבלת החלטות מושכלות ומהירות.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
