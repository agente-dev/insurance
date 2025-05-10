// src/components/marketing/hero-section.tsx
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary leading-tight">
            מזרזים החלטות ביטוחיות עם ניתוח רפואי אוטומטי
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Policy Insights Pro ממנפת בינה מלאכותית מתקדמת כדי להפוך מסמכים רפואיים מורכבים לתובנות ברורות ופעולה, וחוסכת לך זמן יקר ומפחיתה סיכונים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg shadow-lg hover:bg-primary/90" asChild>
              <a href="mailto:leon@agente.dev?subject=בקשה%20להדגמה%20אישית%20-%20Policy%20Insights%20Pro">
                קבל הדגמה אישית
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg shadow-sm">
              למד עוד
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Image
            src="https://picsum.photos/seed/dashboardUI/1200/600" // Changed seed for variety
            alt="ממשק Policy Insights Pro - דוגמה"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl object-cover"
            data-ai-hint="dashboard analytics"
            priority
          />
        </div>
      </div>
    </section>
  );
}
