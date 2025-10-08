'use server';

/**
 * @fileOverview AI Chatbot assistant to interact with visitors.
 *
 * - aiChatbotAssistant - A function that handles the chatbot interactions.
 * - AIChatbotAssistantInput - The input type for the aiChatbotAssistant function.
 * - AIChatbotAssistantOutput - The return type for the aiChatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotAssistantInputSchema = z.object({
  message: z.string().describe('The message from the user.'),
});
export type AIChatbotAssistantInput = z.infer<typeof AIChatbotAssistantInputSchema>;

const AIChatbotAssistantOutputSchema = z.object({
  response: z.string().describe('The response from the AI chatbot.'),
});
export type AIChatbotAssistantOutput = z.infer<typeof AIChatbotAssistantOutputSchema>;

export async function aiChatbotAssistant(input: AIChatbotAssistantInput): Promise<AIChatbotAssistantOutput> {
  return aiChatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAssistantPrompt',
  input: {schema: AIChatbotAssistantInputSchema},
  output: {schema: AIChatbotAssistantOutputSchema},
  prompt: `You are an AI chatbot assistant on Praneeth P K's portfolio website.
  Your goal is to answer questions about Praneeth's experience, skills, and projects.
  Be concise and helpful.

  Here is some key information about Praneeth P K:
  - Email: praneethhh0218@gmail.com
  - Alternate Email: praneethpk.ai@gmail.com
  - He is an AI & ML student with skills in Python, TensorFlow, React, and Next.js.
  - He has worked on projects like DeepFake Detection, SkillBridge AI, and SAR Ship Detection.

  When asked for contact information, provide the email addresses listed above.

  User message: {{{message}}}
  `,
});

const aiChatbotAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatbotAssistantFlow',
    inputSchema: AIChatbotAssistantInputSchema,
    outputSchema: AIChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
