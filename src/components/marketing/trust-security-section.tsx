'use client';

import { ShieldCheck, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TrustSecuritySection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            אבטחה ופרטיות בראש סדר העדיפויות
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            אנו מחויבים לסטנדרטים הגבוהים ביותר של אבטחת מידע והגנה על פרטיות. המערכת שלנו פותחה בהתאם לרגולציות המחמירות ביותר, כולל תקני HIPAA ו-GDPR, כדי להבטיח שנתוני הלקוחות שלך בטוחים ומאובטחים בכל עת. כל המידע מוצפן במנוחה ובמעבר, והגישה אליו מבוקרת בקפדנות.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-foreground py-2 px-4 bg-green-100 text-green-700 rounded-full shadow-sm border border-green-200">
                <Lock className="h-4 w-4" />
                תואם HIPAA
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-foreground py-2 px-4 bg-blue-100 text-blue-700 rounded-full shadow-sm border border-blue-200">
                <Lock className="h-4 w-4" />
                תואם GDPR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
