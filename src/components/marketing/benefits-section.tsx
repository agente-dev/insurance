'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, TrendingUp, Users, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'חיסכון דרמטי בזמן',
    description: 'קיצור משמעותי בזמני הטיפול בתיקים, בקשות ובדיקות פוליסה.',
  },
  {
    icon: ShieldCheck,
    title: 'דיוק משופר',
    description: 'צמצום טעויות אנוש והפחתת החשיפה לסיכונים פיננסיים ותפעוליים.',
  },
  {
    icon: TrendingUp,
    title: 'החלטות מבוססות נתונים',
    description: 'קבל החלטות מהירות ומושכלות יותר המבוססות על ניתוח AI עמוק.',
  },
  {
    icon: Zap,
    title: 'יעילות תפעולית',
    description: 'ייעול תהליכים, שחרור משאבים יקרים והתמקדות במשימות אסטרטגיות.',
  },
  {
    icon: Users,
    title: 'שירות לקוחות מועצם',
    description: 'קיצור זמני תגובה ושיפור שביעות רצון הלקוחות והסוכנים.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            תועלות מרכזיות שישנו את זרימת העבודה שלך
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            גלה כיצד ClearClaim מעניקה לך יתרון תחרותי ומניעה צמיחה.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
