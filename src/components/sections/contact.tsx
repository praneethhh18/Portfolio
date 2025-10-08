"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SOCIAL_LINKS } from "@/lib/data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Error",
        description: "EmailJS credentials are not configured. Please contact the site administrator.",
        variant: "destructive",
      });
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setStatus("success");
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      toast({
        title: "Error",
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
        setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] bg-gradient-radial from-primary/10 via-transparent to-transparent -z-10" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-card/50 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="user_name">Name</Label>
                <Input id="user_name" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_email">Email</Label>
                <Input id="user_email" name="user_email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" size="lg" className="w-full font-bold" disabled={status === 'sending'}>
                {status === 'sending' ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-card/50 border border-white/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{link.name}</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    Connect with me
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}