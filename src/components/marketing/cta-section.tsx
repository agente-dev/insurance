'use client';

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            מוכנים לראות את Policy Insights Pro בפעולה?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90">
            גלו כיצד הפלטפורמה שלנו יכולה לחולל מהפכה בתהליכי בדיקת הפוליסות והמסמכים הרפואיים שלכם, לחסוך לכם זמן יקר ולהפחית סיכונים.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="text-lg shadow-lg bg-background text-primary hover:bg-background/90" asChild>
               <a href="mailto:contact@policyinsightspro.example.com?subject=בקשה%20להדגמה%20-%20Policy%20Insights%20Pro">
                <Mail className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
                צרו קשר להדגמה
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
