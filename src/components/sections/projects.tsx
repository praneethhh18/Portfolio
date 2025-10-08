"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";
import { GitHubConnectCard } from "@/components/ui/github-connect-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-4">
            My Creations
          </h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-12">
            Here are some of the projects I've worked on, showcasing my skills in AI, web development, and more.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <GitHubConnectCard />
        </motion.div>
      </div>
    </section>
  );
}
