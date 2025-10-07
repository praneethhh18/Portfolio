"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SKILLS } from "@/lib/data";
import { TerminalCard } from "@/components/ui/terminal-card";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const skillIconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/30">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-headline font-bold text-center mb-12"
        >
          My Tech Arsenal
        </motion.h2>

        <TooltipProvider>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {Object.entries(SKILLS).map(([category, skills]) => (
              <motion.div key={category} variants={cardVariants}>
                <Card className="h-full bg-card/50 border-white/10 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={cn("grid grid-cols-3 gap-4", category === "Tools" && 'flex flex-col')}>
                      {skills.map((skill) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <motion.div
                              variants={skillIconVariants}
                              initial="rest"
                              whileHover="hover"
                              className="flex flex-col items-center gap-2 cursor-pointer"
                            >
                              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-primary">
                                <skill.icon className="w-8 h-8" />
                              </div>
                              <p className="text-xs text-center text-muted-foreground truncate w-full">
                                {skill.name}
                              </p>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                       {category === "Tools" && (
                        <div className="col-span-3 mt-4">
                           <TerminalCard />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </motion.div>
    </section>
  );
}
