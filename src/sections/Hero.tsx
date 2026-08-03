import { motion, useScroll, useTransform } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { openPopup } = usePopup();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Image — Hero Bottle Shot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bottle-red.png" 
          alt="Casa Buena Sangria Red bottle with hand holding glass of sangria with fresh fruits"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end md:justify-center pb-28 md:pb-0">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="font-sans text-sm font-semibold tracking-[0.3em] uppercase text-primary border border-primary/40 px-4 py-2 rounded-full backdrop-blur-sm bg-primary/10">
              Now In Bottle
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[48px] leading-[1.05] md:text-[72px] lg:text-[84px] font-serif text-white mb-6"
          >
            From Spain,<br/>kwa table<br/>yako.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-sans font-light mb-10 max-w-md leading-relaxed"
          >
            Casa Buena Sangria. Sweet fruit wine from the vineyards of Spain, crafted for every Kenyan moment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => openPopup('product')}
              className="rounded-full bg-primary text-white font-sans font-semibold py-4 px-8 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shadow-lg shadow-primary/20"
            >
              Discover the Bottles
            </button>
            <button 
              onClick={() => {
                document.getElementById('lifestyle')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full border border-white/30 text-white font-sans font-semibold py-4 px-8 hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Scroll the Story
            </button>
          </motion.div>
        </div>
      </div>

      {/* Chevron */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
