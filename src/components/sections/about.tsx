"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TIMELINE, CERTIFICATIONS } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="/me.jpg"
                alt="About Praneeth P K"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3 space-y-8">
            <p className="text-lg text-foreground/80">
              I am an AI & ML student passionate about building innovative projects and exploring emerging technologies. I love research, experimenting with AI, and crafting impactful solutions as a hands-on ‘Vibe Coder.’
            </p>

            <div className="relative">
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-border -z-10" />
              {TIMELINE.map((item, index) => (
                <motion.div key={index} variants={timelineItemVariants} className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full mt-1.5 flex items-center justify-center ring-8 ring-background">
                        <item.icon className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{item.date}</p>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert) => (
                    <Badge key={cert} variant="secondary" className="text-sm py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
