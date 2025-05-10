'use client';

import { Button } from '@/components/ui/button';
import { Zap, Loader2 } from 'lucide-react';

interface AnalysisTriggerProps {
  onAnalyze: () => void;
  isLoading: boolean;
  canAnalyze: boolean;
}

export function AnalysisTrigger({ onAnalyze, isLoading, canAnalyze }: AnalysisTriggerProps) {
  return (
    <div className="flex justify-center py-6">
      <Button
        size="lg"
        onClick={onAnalyze}
        disabled={!canAnalyze || isLoading}
        className="w-full max-w-xs shadow-md text-lg"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin rtl:ml-2 rtl:mr-0" />
        ) : (
          <Zap className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
        )}
        {isLoading ? 'מנתח מסמכים...' : 'התחל ניתוח'}
      </Button>
    </div>
  );
}
