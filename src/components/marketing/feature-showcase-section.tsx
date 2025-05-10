'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Layers, ScanText, FileCheck2 } from 'lucide-react';

const features = [
  {
    icon: ScanText,
    title: 'ניתוח מסמכים חכם',
    description: 'המערכת שלנו מפענחת מגוון רחב של מסמכים רפואיים, כולל PDF, סריקות ותמונות, ומפיקה מהם מידע קריטי באופן אוטומטי ומדויק.',
    imageSrc: "https://picsum.photos/seed/feature1/600/400",
    imageHint: "document analysis",
  },
  {
    icon: Layers,
    title: 'זיהוי התנגשויות מתקדם',
    description: 'אלגוריתמי AI מתקדמים מצליבים את המידע הרפואי עם תנאי הפוליסה ומאתרים אי-התאמות, חריגות או סיכונים פוטנציאליים באופן מיידי.',
    imageSrc: "https://picsum.photos/seed/feature2/600/400",
    imageHint: "data comparison",
  },
  {
    icon: FileCheck2,
    title: 'דוחות תובנות מותאמים',
    description: 'קבלו דוחות ברורים, תמציתיים וויזואליים המסכמים את הממצאים העיקריים, מותאמים לצרכים הספציפיים של חברת הביטוח שלכם.',
    imageSrc: "https://picsum.photos/seed/feature3/600/400",
    imageHint: "report generation",
  },
];

export function FeatureShowcaseSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            גלה את העוצמה של Policy Insights Pro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            יכולות מתקדמות המתוכננות לייעל את תהליכי העבודה שלך ולהעניק לך שקט נפשי.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-56 w-full">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={feature.imageHint}
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed h-24 overflow-hidden">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="link" className="p-0 text-primary">
                  קרא עוד <span aria-hidden="true" className="rtl:mr-1 ltr:ml-1">&rarr;</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
