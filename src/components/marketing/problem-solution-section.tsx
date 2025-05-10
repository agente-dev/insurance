// src/components/marketing/problem-solution-section.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle2, Clock, AlertTriangle, UserX, BrainCircuit, Zap, FileCheck2 as ReportIcon } from 'lucide-react';

const problemPoints = [
  {
    icon: Clock,
    text: "תהליכי חיתום ובדיקת תביעות איטיים ומייגעים, המובילים לעומס עבודה משמעותי.",
  },
  {
    icon: AlertTriangle,
    text: "סיכון גבוה לטעויות אנוש ופספוס פרטים קריטיים במסמכים רפואיים מורכבים.",
  },
  {
    icon: UserX, // Icon representing negative impact on users/clients
    text: "עיכובים במתן שירות ללקוחות הפוגעים בשביעות הרצון ובמוניטין החברה.",
  },
];

const solutionPoints = [
  {
    icon: BrainCircuit,
    text: "ניתוח אוטומטי ומדויק של היסטוריה רפואית מול תנאי פוליסה באמצעות AI.",
  },
  {
    icon: Zap,
    text: "זיהוי מיידי של התנגשויות, חריגות, ומצבים רפואיים קיימים המשפיעים על הכיסוי.",
  },
  {
    icon: ReportIcon,
    text: "יצירת דוחות תמציתיים וקריאים המסייעים בקבלת החלטות מושכלות ומהירות.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution-section" className="py-12 md:py-20 lg:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* items-stretch for equal height */}
          <Card className="shadow-lg animate-fadeIn flex flex-col"> {/* Added flex flex-col */}
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-destructive">
                <div className="flex items-baseline gap-3">
                  <XCircle className="h-8 w-8 shrink-0" />
                  <span>האתגר: הצפת מידע ובדיקות ידניות</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground flex-grow"> {/* Added flex-grow */}
              <ul className="space-y-4">
                {problemPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <point.icon className="h-6 w-6 shrink-0 mt-1 text-destructive/80" aria-hidden="true" />
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg animate-fadeIn [animation-delay:200ms] flex flex-col"> {/* Added flex flex-col */}
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
                 <div className="flex items-baseline gap-3">
                  <CheckCircle2 className="h-8 w-8 shrink-0" />
                  <span>הפתרון: Policy Insights Pro</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground flex-grow"> {/* Added flex-grow */}
              <ul className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <point.icon className="h-6 w-6 shrink-0 mt-1 text-primary/80" aria-hidden="true" />
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
