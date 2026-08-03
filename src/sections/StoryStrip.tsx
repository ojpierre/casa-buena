import { useRef } from 'react';
import { usePopup } from '@/context/PopupContext';
import { motion, useScroll, useTransform } from 'framer-motion';

export function StoryStrip() {
  const { openPopup } = usePopup();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a horizontal scroll effect on desktop tied to vertical scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  return (
    <section ref={containerRef} className="w-full bg-[#0A0004] py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="mb-12 px-6">
        <h2 className="font-serif text-4xl text-white">The Journey</h2>
      </div>

      {/* Mobile: horizontal scroll. Desktop: transform mapped to scroll */}
      <div className="md:hidden flex overflow-x-auto gap-6 px-6 pb-8 snap-x no-scrollbar">
        <StoryCards />
      </div>
      
      <div className="hidden md:block w-[200vw]">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          <StoryCards />
        </motion.div>
      </div>

      <div className="text-center mt-12 px-6">
        <button 
          onClick={() => openPopup('story')}
          className="font-sans font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
        >
          The full story 
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
}

function StoryCards() {
  return (
    <>
      <div className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="h-[200px] relative">
          <img src="/vineyard-origin.png" className="w-full h-full object-cover" alt="Spanish vineyards through grape leaf" />
        </div>
        <div className="p-8">
          <span className="font-sans font-bold text-primary uppercase text-xs tracking-wider mb-2 block">Cariñena, Spain</span>
          <h3 className="font-serif text-2xl text-white mb-3">Where it begins.</h3>
          <p className="font-sans text-white/60 text-sm leading-relaxed">Young Grenache grapes, old world craft, centuries of fruit wine tradition. The roots run deep in some of Spain's oldest designated wine country.</p>
        </div>
      </div>

      <div className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="h-[200px] relative">
          <img src="/sangria-story-dna.png" className="w-full h-full object-cover" alt="The sangria blend — DNA helix of fruits and wine" />
        </div>
        <div className="p-8">
          <span className="font-sans font-bold text-primary uppercase text-xs tracking-wider mb-2 block">The Blend</span>
          <h3 className="font-serif text-2xl text-white mb-3">Balanced until perfect.</h3>
          <p className="font-sans text-white/60 text-sm leading-relaxed">Mediterranean oranges, red berries, tropical notes. Each element layered with intention — sweet but never sugary, fruity but never artificial.</p>
        </div>
      </div>

      <div className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center bg-[#0A0004] rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-4xl">🏠</span>
        </div>
        <h3 className="font-serif text-3xl text-white mb-3">Casa Buena.</h3>
        <p className="font-sans text-white/60 text-sm leading-relaxed">"Good House." Not a grand house. Not a wealthy one. A good one — the kind where people are welcome, where the evenings stretch longer than they should.</p>
      </div>

      <div className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="h-[200px] relative">
          <img src="/hero-bottle-red.png" className="w-full h-full object-cover" alt="Casa Buena arrives in Kenya" />
        </div>
        <div className="p-8">
          <span className="font-sans font-bold text-primary uppercase text-xs tracking-wider mb-2 block">Kenya, Now</span>
          <h3 className="font-serif text-2xl text-white mb-3">Here and now. In bottle.</h3>
          <p className="font-sans text-white/60 text-sm leading-relaxed">Brought to Kenya by KWAL. Started in the carton. Elevated to the bottle. Made for every table, every catch-up, every moment worth marking.</p>
        </div>
      </div>
    </>
  );
}
