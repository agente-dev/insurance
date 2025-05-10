// use server'
'use server';

/**
 * @fileOverview Analyzes medical documents and policy details to identify potential conflicts and generate a summary report.
 *
 * - analyzeMedicalPolicyConflict - A function that handles the analysis process.
 * - AnalyzeMedicalPolicyConflictInput - The input type for the analyzeMedicalPolicyConflict function.
 * - AnalyzeMedicalPolicyConflictOutput - The return type for the analyzeMedicalPolicyConflict function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMedicalPolicyConflictInputSchema = z.object({
  medicalDocumentDataUri: z
    .string()
    .describe(
      "A medical document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  policyDetails: z.string().describe('The details of the insurance policy.'),
});
export type AnalyzeMedicalPolicyConflictInput = z.infer<typeof AnalyzeMedicalPolicyConflictInputSchema>;

const AnalyzeMedicalPolicyConflictOutputSchema = z.object({
  summaryReport: z.string().describe('A summary report of potential conflicts between the medical document and the policy details.'),
});
export type AnalyzeMedicalPolicyConflictOutput = z.infer<typeof AnalyzeMedicalPolicyConflictOutputSchema>;

export async function analyzeMedicalPolicyConflict(input: AnalyzeMedicalPolicyConflictInput): Promise<AnalyzeMedicalPolicyConflictOutput> {
  return analyzeMedicalPolicyConflictFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeMedicalPolicyConflictPrompt',
  input: {schema: AnalyzeMedicalPolicyConflictInputSchema},
  output: {schema: AnalyzeMedicalPolicyConflictOutputSchema},
  prompt: `You are an expert in analyzing medical documents and insurance policies to identify potential conflicts.

  Analyze the provided medical document and policy details, and generate a summary report highlighting any conflicts or areas of concern.

  Medical Document: {{media url=medicalDocumentDataUri}}
  Policy Details: {{{policyDetails}}}`,
});

const analyzeMedicalPolicyConflictFlow = ai.defineFlow(
  {
    name: 'analyzeMedicalPolicyConflictFlow',
    inputSchema: AnalyzeMedicalPolicyConflictInputSchema,
    outputSchema: AnalyzeMedicalPolicyConflictOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
