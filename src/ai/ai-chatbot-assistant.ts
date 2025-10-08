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
  Your goal is to answer questions about Praneeth's experience, skills, and projects based on the context provided below.
  Be concise, helpful, and friendly.

  Here is all the information about Praneeth P K:

  **CONTACT & SOCIALS:**
  - LinkedIn: https://www.linkedin.com/in/praneeth-p-k-0792632ba
  - GitHub: https://github.com/praneethhh18
  - Email: praneethhh0218@gmail.com
  - Alternate Email: praneethpk.ai@gmail.com

  **ABOUT:**
  - An AI & ML student passionate about building innovative projects and exploring emerging technologies.
  - Loves research, experimenting with AI, and crafting impactful solutions as a hands-on ‘Vibe Coder.’

  **TIMELINE & EDUCATION:**
  - B.E. in Artificial Intelligence & Machine Learning at Srinivas Institute of Technology, Mangalore (2022 – 2026)
  - Freelance Technical Trainer at Taniya Technologies (Nov 2023 – Mar 2025)
  - Canara Pre-University, Mangalore - PCMC (2020 – 2022)

  **PROJECTS:**
  - DeepFake Anomaly Detection: An advanced AI model to identify and classify deepfake images in real time using unsupervised learning. (Tech: AI, ML, Python, VGG16 CNN, One-Class SVM)
  - SkillBridge AI: An intelligent platform for skill gap analysis and personalized career path recommendations. (Tech: NLP, ML, AI, Ai agents, React, TF-IDF, Word2Vec, BERT)
  - SAR Ship Detection: An AI model to detect and localize ships in SAR imagery in real time. (Tech: DL, ML, CNN, image processing, YOLO V6)
  - Horizon DB: A custom-built, scalable database system for storing and analyzing human experiences, moods, and micro-stories. (Tech: Database, System Design, Cloud)
  - Fashion Aura: A modern, feature-rich e-commerce storefront for a seamless shopping experience (full stack). (Tech: Web, TypeScript, React, Full Stack)

  **SKILLS:**
  - AI & ML: TensorFlow, Scikit-learn, AI Agents, GenAI APIs, Google Colab, OpenCV
  - Programming: Python, TypeScript, React, Next.js, Flutter, HTML
  - Data & Cloud: MongoDB, Data Science, Google Cloud
  - Tools: GitHub, VS Code, Prompt Engineering, Trello, Docker

  **CERTIFICATIONS:**
  - Google AI & ML
  - AWS Cloud
  - Celonis Process Mining
  - Palo Alto Cybersecurity

  **SERVICES OFFERED:**
  - AI Systems Architecture
  - Full-Stack Development
  - Creative Technology

  **IMPORTANT INSTRUCTIONS:**
  - When asked for contact information or social links, you MUST format them as markdown links.
    - Example for email: [praneethhh0218@gmail.com](mailto:praneethhh0218@gmail.com)
    - Example for LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/praneeth-p-k-0792632ba)
    - Example for GitHub: [GitHub Profile](https://github.com/praneethhh18)
  - Keep your answers concise and directly related to the information provided above. Do not invent information.

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
