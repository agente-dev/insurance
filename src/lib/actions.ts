'use server';

import { parseMedicalDocuments, type ParseMedicalDocumentsInput, type ParseMedicalDocumentsOutput } from '@/ai/flows/parse-medical-documents';

export async function runParseMedicalDocumentsAction(
  input: ParseMedicalDocumentsInput
): Promise<ParseMedicalDocumentsOutput> {
  try {
    const result = await parseMedicalDocuments(input);
    return result;
  } catch (error) {
    console.error("Error in runParseMedicalDocumentsAction:", error);
    // It's better to throw a custom error or a generic one for the client
    // For now, re-throwing the original error or a generic message
    if (error instanceof Error) {
      throw new Error(`ניתוח המסמך נכשל: ${error.message}`);
    }
    throw new Error('ניתוח המסמך נכשל עקב שגיאה לא ידועה.');
  }
}
