'use client';

import { useState } from 'react';
import type { ParseMedicalDocumentsOutput } from '@/ai/flows/parse-medical-documents';
import { runParseMedicalDocumentsAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

import { FileUploadCard } from '@/components/insights/file-upload-card';
import { PolicyInputCard } from '@/components/insights/policy-input-card';
import { AnalysisTrigger } from '@/components/insights/analysis-trigger';
import { InsightsDisplay } from '@/components/insights/insights-display';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function PolicyInsightsPage() {
  const [medicalDocumentFile, setMedicalDocumentFile] = useState<File | null>(null);
  const [medicalDocumentDataUri, setMedicalDocumentDataUri] = useState<string | null>(null);
  const [policyName, setPolicyName] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<ParseMedicalDocumentsOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleMedicalFileSelect = (file: File, dataUri: string) => {
    setMedicalDocumentFile(file);
    setMedicalDocumentDataUri(dataUri);
    setError(null); // Clear previous errors on new file selection
    setAnalysisResult(null); // Clear previous results
  };

  const handlePolicyNameChange = (name: string) => {
    setPolicyName(name);
    setError(null); // Clear previous errors
    setAnalysisResult(null); // Clear previous results
  };

  const handleAnalyze = async () => {
    if (!medicalDocumentDataUri || !policyName) {
      toast({
        title: 'קלט חסר',
        description: 'אנא העלה מסמך רפואי והזן שם פוליסה.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await runParseMedicalDocumentsAction({
        documentDataUri: medicalDocumentDataUri,
        policyName: policyName,
      });
      setAnalysisResult(result);
      toast({
        title: 'הניתוח הושלם בהצלחה!',
        description: 'תוצאות הניתוח מוצגות למטה.',
      });
    } catch (e: any) {
      const errorMessage = e instanceof Error ? e.message : 'אירעה שגיאה לא צפויה.';
      setError(errorMessage);
      toast({
        title: 'שגיאה בניתוח',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          מזרזים החלטות ביטוחיות עם ניתוח רפואי אוטומטי
        </h1>
        <p className="text-lg text-muted-foreground">
          העלו מסמך היסטוריה רפואית, ציינו את שם הפוליסה, וקבלו דוח תובנות מקיף תוך דקות.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUploadCard
          title="העלאת מסמך רפואי"
          description="גרור ושחרר, או בחר קובץ PDF, סריקה, או תמונה של ההיסטוריה הרפואית."
          onFileSelect={handleMedicalFileSelect}
        />
        <PolicyInputCard
          policyName={policyName}
          onPolicyNameChange={handlePolicyNameChange}
        />
      </div>

      <AnalysisTrigger
        onAnalyze={handleAnalyze}
        isLoading={isLoading}
        canAnalyze={!!medicalDocumentDataUri && !!policyName.trim()}
      />

      {error && (
         <Alert variant="destructive" className="shadow-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>שגיאה בעיבוד</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysisResult && (
        <>
          <Separator className="my-8" />
          <InsightsDisplay analysisResult={analysisResult} />
        </>
      )}
      
      <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border shadow-sm text-center">
        <h2 className="text-xl font-semibold text-primary mb-3">תועלות מרכזיות</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-right inline-block mx-auto">
          <li>קיצור משמעותי בזמן הטיפול בתיקים</li>
          <li>צמצום טעויות אנוש וחשיפה לסיכונים</li>
          <li>קבלת החלטות מהירה ומבוססת נתונים</li>
          <li>שיפור חוויית הלקוח על ידי קיצור זמני תגובה</li>
        </ul>
         <p className="mt-4 text-sm text-foreground">
          אנו מחויבים לאבטחת מידע מלאה והתאמה לרגולציות פרטיות רפואיות (כגון HIPAA ו-GDPR).
        </p>
      </div>

    </div>
  );
}
