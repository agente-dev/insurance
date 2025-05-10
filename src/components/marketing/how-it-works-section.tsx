'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, BrainCircuit, FileText, ArrowRightCircle } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: 'העלאה מאובטחת',
    description: 'העלו מסמכים רפואיים ופרטי פוליסה למערכת המאובטחת שלנו בקלות ובמהירות.',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: BrainCircuit,
    title: 'ניתוח AI מתקדם',
    description: 'האלגוריתמים החכמים שלנו מנתחים את המידע, מזהים דפוסים ומצליבים נתונים תוך שניות.',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
  },
  {
    icon: FileText,
    title: 'קבלת תובנות',
    description: 'קבלו דוח מקיף עם ממצאים, סיכונים פוטנציאליים והמלצות ברורות, תוך דקות ספורות.',
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-600',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            פשוט, מהיר, חכם: כך זה עובד
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            תהליך יעיל בן שלושה שלבים פשוטים הממנף את כוחה של הבינה המלאכותית.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full ${step.bgColor} mb-4`}>
                  <step.icon className={`h-10 w-10 ${step.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <ArrowRightCircle className="h-12 w-12 text-accent mx-auto animate-pulse" />
            <p className="mt-2 text-muted-foreground">מוביל לתובנות עסקיות חכמות יותר.</p>
        </div>
      </div>
    </section>
  );
}
