"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitch from "@/components/ui/theme-switch";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
];

const NavLink = ({ name, href }: { name: string; href: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      <motion.span
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        {name}
      </motion.span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId={`underline-${name}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
};


export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-background/60 backdrop-blur-lg rounded-full shadow-lg border border-white/10 px-4 py-2 flex items-center gap-4">
        <a href="#home" className="text-lg font-headline font-bold text-primary flex-shrink-0">
          Praneeth.Portfolio
        </a>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} name={item.name} href={item.href} />
          ))}
        </nav>
        <ThemeSwitch />

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-background/90 backdrop-blur-xl">
              <div className="flex flex-col items-center p-8">
                <nav className="flex flex-col items-center gap-6 text-lg">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setSheetOpen(false)}
                      className="font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
