"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => setSheetOpen(false)}
      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      {children}
    </a>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="relative flex items-center justify-between h-16 px-6 max-w-5xl mx-auto rounded-2xl bg-card/50 backdrop-blur-lg border border-white/10 shadow-lg">
        <a href="#home" className="text-lg font-headline font-bold text-primary flex-shrink-0">
          Praneeth.AI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitch />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col h-full p-4">
                <div className="flex justify-between items-center mb-8">
                  <a href="#home" className="text-lg font-headline font-bold text-primary" onClick={() => setSheetOpen(false)}>
                    Praneeth.AI
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
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
                <div className="mt-auto">
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}