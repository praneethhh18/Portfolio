"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // A nice ease-out-expo-like curve
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card/30">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">
            What I Offer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            I specialize in architecting intelligent systems, building robust web applications, and creating innovative technology solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center bg-card/50 border-white/10 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-secondary rounded-full text-primary">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="pt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
