import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import HireMe from '@/components/sections/hire-me';
import Contact from '@/components/sections/contact';
import { Chatbot } from '@/components/ui/chatbot';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <HireMe />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}
