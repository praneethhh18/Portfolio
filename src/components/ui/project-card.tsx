"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import MoonLoader from "./moon-loader";

type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrlId: string;
  githubUrl: string;
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

export function ProjectCard({ project }: { project: Project }) {
  const projectImage = PlaceHolderImages.find((img) => img.id === project.imageUrlId);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 100, restDelta: 0.001 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 100, restDelta: 0.001 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12.5deg", "-12.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12.5deg", "12.5deg"]);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPercent = (event.clientX - left) / width - 0.5;
    const yPercent = (event.clientY - top) / height - 0.5;
    x.set(xPercent);
    y.set(yPercent);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="bg-card/50 border border-white/10 rounded-xl overflow-hidden shadow-lg group relative"
      >
        <div className="aspect-video relative">
          {project.imageUrlId === 'project-loader' ? (
            <MoonLoader />
          ) : (
            projectImage && (
              <Image
                src={projectImage.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={projectImage.imageHint}
              />
            )
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold font-headline mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 h-10">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-card/70 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground scale-0 group-hover:scale-100 transition-transform duration-300"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
