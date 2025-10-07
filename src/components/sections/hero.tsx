"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BrainCircuit, Code, DraftingCompass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-praneeth"
);
const heroBgImage = PlaceHolderImages.find((img) => img.id === "hero-background");


const FloatingIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType, className: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={cn("absolute text-primary/50", className)}
    >
        <Icon className="w-12 h-12" />
    </motion.div>
);

const SUBTITLES = [
    "AI Architect",
    "Digital Artisan",
    "Solutions Developer"
];

export default function Hero() {
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setSubtitleIndex((prevIndex) => (prevIndex + 1) % SUBTITLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-1, 1], ["10deg", "-10deg"]);
    const rotateY = useTransform(x, [-1, 1], ["-10deg", "10deg"]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPercent = (clientX - left) / width - 0.5;
        const yPercent = (clientY - top) / height - 0.5;
        x.set(xPercent);
        y.set(yPercent);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {heroBgImage && (
        <Image
          src={heroBgImage.imageUrl}
          alt={heroBgImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroBgImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center text-center p-4 z-10"
      >
        <motion.div 
            style={{ transform: "translateZ(20px)" }}
            className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/50 shadow-2xl"
        >
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt="Praneeth P K"
              width={128}
              height={128}
              className="object-cover"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
        </motion.div>
        <motion.h1
          style={{ transform: "translateZ(50px)" }}
          className="text-4xl md:text-6xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          Hi, I’m Praneeth P K
        </motion.h1>
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-foreground/80 h-8"
        >
          <AnimatePresence mode="wait">
            {isMounted && (
              <motion.p
                key={subtitleIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {SUBTITLES[subtitleIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          style={{ transform: "translateZ(30px)" }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="font-bold">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold border-2 border-primary text-primary hover:text-primary-foreground">
            <a href="#contact">Let's Connect</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Icons for Parallax */}
      <motion.div style={{ transformStyle: "preserve-3d" }} className="absolute inset-0">
          <FloatingIcon icon={BrainCircuit} className="top-[10%] left-[15%]" delay={0.3} />
          <FloatingIcon icon={Code} className="bottom-[15%] right-[10%]" delay={0.5} />
          <FloatingIcon icon={DraftingCompass} className="top-[20%] right-[20%]" delay={0.7} />
          <FloatingIcon icon={BrainCircuit} className="bottom-[25%] left-[25%]" delay={0.4} />
      </motion.div>
    </section>
  );
}
