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
  - LinkedIn: https://www.linkedin.com/in/praneeth-p-k-0792632ba
  - GitHub: https://github.com/praneethhh18
  - Email: praneethhh0218@gmail.com
  - Alternate Email: praneethpk.ai@gmail.com
  - He is an AI & ML student.
  - He has worked on projects like DeepFake Detection, SkillBridge AI, and SAR Ship Detection.
  - Skills:
    - AI & ML: TensorFlow, Scikit-learn, AI Agents, GenAI APIs, Google Colab, OpenCV
    - Programming: Python, TypeScript, React, Next.js, Flutter, HTML
    - Data & Cloud: MongoDB, Data Science, Google Cloud
    - Tools: GitHub, VS Code, Prompt Engineering, Trello, Docker

  When asked for contact information or social links, you MUST format them as markdown links.
  For example:
  - For email: [praneethhh0218@gmail.com](mailto:praneethhh0218@gmail.com)
  - For LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/praneeth-p-k-0792632ba)
  - For GitHub: [GitHub Profile](https://github.com/praneethhh18)

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
