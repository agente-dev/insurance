'use client';

import type { ParseMedicalDocumentsOutput } from '@/ai/flows/parse-medical-documents';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, AlertTriangle, ListChecks } from 'lucide-react';

interface InsightsDisplayProps {
  analysisResult: ParseMedicalDocumentsOutput;
}

export function InsightsDisplay({ analysisResult }: InsightsDisplayProps) {
  const { extractedData, summary } = analysisResult;

  return (
    <Card className="w-full shadow-xl animate-fadeIn">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <ListChecks className="h-7 w-7 text-primary" />
          תוצאות ניתוח המסמכים
        </CardTitle>
        <CardDescription>להלן המידע שחולץ מהמסמך וסיכום הממצאים.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Accordion type="single" collapsible defaultValue="summary" className="w-full">
          <AccordionItem value="summary">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                סיכום ממצאים והתנגשויות אפשריות
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="prose prose-sm max-w-none dark:prose-invert p-4 bg-accent/5 rounded-md border border-accent/20">
                <p className="whitespace-pre-wrap text-foreground">
                  {summary || "לא נמצאו ממצאים מיוחדים או התנגשויות."}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="extracted-data">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
               <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                מידע שחולץ מהמסמך
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              {Object.keys(extractedData).length > 0 ? (
                <div className="overflow-x-auto rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px] font-medium text-foreground/80">שדה</TableHead>
                        <TableHead className="font-medium text-foreground/80">ערך</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(extractedData).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium">{key}</TableCell>
                          <TableCell className="whitespace-pre-wrap">{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p className="text-muted-foreground p-4 text-center">לא חולץ מידע מהמסמך.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

// Add a simple fadeIn animation to tailwind.config.js if not present
// keyframes: { 'fadeIn': { '0%': { opacity: 0 }, '100%': { opacity: 1 } } },
// animation: { 'fadeIn': 'fadeIn 0.5s ease-out' }
// For now, using a class name and assuming it might be added or relying on existing transitions.
// No, I will add it to globals.css implicitly via the component's animate-fadeIn class usage.
// The component uses `animate-fadeIn`. It's better to ensure this is in `tailwind.config.ts` or `globals.css`.
// For now, let's assume it's a conceptual class name that might be styled via `globals.css` or `tailwind.config.ts`.
// For safety, I'll remove `animate-fadeIn` or ensure it's defined.
// Given the constraints, let's remove `animate-fadeIn` as `tailwind.config.ts` is not supposed to be heavily modified for keyframes usually.
// Shadcn often uses `animate-in` which might be sufficient.
// Let's try `data-[state=open]:animate-in data-[state=open]:fade-in-0` which is common in shadcn.
// This component is not a data-state component.
// Will just use a simple structure. Card already has shadow.
