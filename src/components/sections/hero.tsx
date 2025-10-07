"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";
import SocialCard from "@/components/ui/social-card";

const profileImage = PlaceHolderImages.find(
  (img) => img.id === "profile-praneeth"
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
      <div className="absolute inset-0 z-0 animated-gradient" />
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
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button asChild size="lg" className="font-bold">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2" />
            </a>
          </Button>
          <SocialCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
