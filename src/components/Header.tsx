import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Check if scrolled past threshold for background blur
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide header on scroll down, show on scroll up (unless at top)
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#0A0004]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex flex-col items-start cursor-pointer group"
        >
          <span className="font-serif text-2xl md:text-3xl text-white group-hover:text-white/80 transition-colors">Casa Buena</span>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-primary -mt-1 group-hover:text-primary/80 transition-colors">Sangria</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="font-sans text-sm text-white/70 hover:text-white transition-colors">Products</a>
          <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="font-sans text-sm text-white/70 hover:text-white transition-colors">Story</a>
          <a href="#find-it" onClick={(e) => scrollToSection(e, 'find-it')} className="font-sans text-sm text-white/70 hover:text-white transition-colors">Find It</a>
          
          <a 
            href="#vibes" 
            onClick={(e) => scrollToSection(e, 'vibes')}
            className="font-sans text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            The Vibe Questionnaire
          </a>
        </nav>

        {/* Mobile Vibe Button (simplified nav for mobile) */}
        <div className="md:hidden flex items-center">
          <a 
            href="#vibes" 
            onClick={(e) => scrollToSection(e, 'vibes')}
            className="font-sans text-xs font-semibold bg-primary text-white px-4 py-2 rounded-full shadow-lg shadow-primary/20"
          >
            The Vibe
          </a>
        </div>
      </div>
    </motion.header>
  );
}
