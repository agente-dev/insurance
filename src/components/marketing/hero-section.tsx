// src/components/marketing/hero-section.tsx
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-center text-center overflow-hidden"
      // Attempt to make section roughly viewport height minus header (approx 4rem/64px)
      // This might need adjustment based on actual header height or be set to min-h-screen for full coverage
      style={{ minHeight: 'calc(100vh - 64px)' }} 
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/dashboardUI/1200/800" // Using existing seed, adjusted dimensions for background
          alt="רקע טכנולוגי מופשט"
          layout="fill"
          objectFit="cover"
          className="opacity-30" // Lower opacity for background effect
          data-ai-hint="abstract technology" // Updated hint
          priority
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto space-y-8"> {/* Increased space-y */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
            מזרזים החלטות ביטוחיות עם ניתוח רפואי אוטומטי
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Policy Insights Pro ממנפת בינה מלאכותית מתקדמת כדי להפוך מסמכים רפואיים מורכבים לתובנות ברורות ופעולה, וחוסכת לך זמן יקר ומפחיתה סיכונים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="mailto:leon@agente.dev?subject=בקשה%20להדגמה%20אישית%20-%20Policy%20Insights%20Pro">
                קבל הדגמה אישית
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg shadow-sm text-white border-gray-300 hover:bg-white/10 hover:text-white">
              <a href="#problem-solution-section">
                למד עוד
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
