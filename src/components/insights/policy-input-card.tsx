'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookMarked } from 'lucide-react'; // Changed icon

interface PolicyInputCardProps {
  policyName: string;
  onPolicyNameChange: (name: string) => void;
}

export function PolicyInputCard({ policyName, onPolicyNameChange }: PolicyInputCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookMarked className="h-6 w-6 text-primary" /> {/* Changed icon */}
          פרטי פוליסה
        </CardTitle>
        <CardDescription>הזן את שם הפוליסה או מזהה ייחודי שלה.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="policy-name">שם/מזהה הפוליסה</Label>
          <Input
            id="policy-name"
            type="text"
            placeholder="לדוגמה: 'פוליסת בריאות זהב 2024'"
            value={policyName}
            onChange={(e) => onPolicyNameChange(e.target.value)}
            className="text-base"
          />
        </div>
      </CardContent>
    </Card>
  );
}
