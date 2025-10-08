
"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import SocialCard from "@/components/ui/social-card";
import { textToSpeech } from "@/ai/flows/text-to-speech";

const SUBTITLES = [
    "AI Architect",
    "Digital Artisan",
    "Solutions Developer"
];

export default function Hero() {
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

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

    const handleAvatarHover = async () => {
        if (isPlaying || (audioRef.current && !audioRef.current.paused)) return;
        setIsPlaying(true);
        try {
            const { audio } = await textToSpeech({ text: "hello, welcome to praneeth p k portfolio" });
            if (audioRef.current) {
                audioRef.current.src = audio;
                audioRef.current.play();
            }
        } catch (error) {
            console.error("Error generating speech:", error);
        } finally {
            // A short delay before allowing another play to avoid spam
            setTimeout(() => setIsPlaying(false), 1000);
        }
    };


  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 animated-gradient" />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      
      <motion.div
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center z-10"
      >
        <motion.div 
            style={{ transformStyle: "preserve-3d", rotateX, rotateY, transform: "translateZ(20px)" }}
            className="bg-card/30 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center"
        >
            <motion.div 
                onMouseEnter={handleAvatarHover}
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/50 shadow-lg cursor-pointer"
            >
                <Image
                  src="/me.jpg"
                  alt="Praneeth P K"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            >
              Hi, I’m Praneeth P K
            </motion.h1>
            <motion.div
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
      </motion.div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </section>
  );
}
