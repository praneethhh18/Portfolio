"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check your input.",
    };
  }

  try {
    // In a real application, you would integrate with an email service like Resend, SendGrid, etc.
    // For demonstration, we'll just log the data and simulate a successful submission.
    console.log("New contact form submission:");
    console.log("Name:", validatedFields.data.name);
    console.log("Email:", validatedFields.data.email);
    console.log("Message:", validatedFields.data.message);

    return { message: "Message sent successfully!", errors: {} };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "Error: Could not send message. Please try again later.",
      errors: {},
    };
  }
}
