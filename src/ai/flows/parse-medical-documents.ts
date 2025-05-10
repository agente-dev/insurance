// src/ai/flows/parse-medical-documents.ts
'use server';

/**
 * @fileOverview Parses medical documents to extract relevant data fields.
 *
 * - parseMedicalDocuments - A function that handles the parsing of medical documents.
 * - ParseMedicalDocumentsInput - The input type for the parseMedicalDocuments function.
 * - ParseMedicalDocumentsOutput - The return type for the parseMedicalDocuments function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ParseMedicalDocumentsInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "The medical document (PDF, scan, etc.) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
  policyName: z.string().describe('The name or identifier of the insurance policy.'),
});
export type ParseMedicalDocumentsInput = z.infer<typeof ParseMedicalDocumentsInputSchema>;

const ParseMedicalDocumentsOutputSchema = z.object({
  extractedData: z
    .record(z.string(), z.string())
    .describe('A key-value store of extracted data fields from the medical document.'),
  summary: z.string().describe('A summary of the extracted information and potential policy conflicts.'),
});
export type ParseMedicalDocumentsOutput = z.infer<typeof ParseMedicalDocumentsOutputSchema>;

export async function parseMedicalDocuments(
  input: ParseMedicalDocumentsInput
): Promise<ParseMedicalDocumentsOutput> {
  return parseMedicalDocumentsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseMedicalDocumentsPrompt',
  input: {schema: ParseMedicalDocumentsInputSchema},
  output: {schema: ParseMedicalDocumentsOutputSchema},
  prompt: `You are an expert medical document parser for insurance companies.

You will receive a medical document and an insurance policy name. Your task is to extract all relevant information from the document and provide a summary of the findings, highlighting any potential conflicts with the insurance policy.

Instructions:
1.  Carefully analyze the medical document provided in {{media url=documentDataUri}}.
2.  Use OCR to extract text if the document is an image.
3.  Identify and extract key data fields such as patient information, medical history, diagnoses, treatments, and medications.
4.  Cross-reference the extracted data with the provided insurance policy: {{{policyName}}}.
5.  Generate a summary of the extracted information, including any potential conflicts, pre-existing conditions, or areas of concern for the insurance claim.
6.  Output the extracted data as a key-value store and the summary as a separate field.

Output Format:
{
  "extractedData": {
    "patientName": "",
    "dateOfBirth": "",
    "medicalHistory": "",
    "diagnoses": "",
    "treatments": "",
    "medications": ""
  },
  "summary": ""
}
`,
});

const parseMedicalDocumentsFlow = ai.defineFlow(
  {
    name: 'parseMedicalDocumentsFlow',
    inputSchema: ParseMedicalDocumentsInputSchema,
    outputSchema: ParseMedicalDocumentsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
