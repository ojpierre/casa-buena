import { useRef, useState, useEffect } from 'react';
import { usePopup } from '@/context/PopupContext';
import { motion } from 'framer-motion';

const cardsData = [
  {
    tag: 'Cariñena, Spain',
    title: 'Where it begins.',
    desc: 'Young Grenache grapes, old world craft, centuries of fruit wine tradition. The roots run deep in some of Spain\'s oldest designated wine country.',
    img: '/vineyard-origin.png',
    type: 'image'
  },
  {
    tag: 'The Blend',
    title: 'Balanced until perfect.',
    desc: 'Mediterranean oranges, red berries, tropical notes. Each element layered with intention — sweet but never sugary, fruity but never artificial.',
    img: '/sangria-story-dna.png',
    type: 'image'
  },
  {
    tag: 'The Name',
    title: 'Casa Buena.',
    desc: '"Good House." Not a grand house. Not a wealthy one. A good one — the kind where people are welcome, where the evenings stretch longer than they should.',
    img: '',
    type: 'icon'
  },
  {
    tag: 'Kenya, Now',
    title: 'Here and now. In bottle.',
    desc: 'Brought to Kenya by KWAL. Started in the carton. Elevated to the bottle. Made for every table, every catch-up, every moment worth marking.',
    img: '/hero-bottle-red.png',
    type: 'image'
  }
];

export function StoryStrip() {
  const { openPopup } = usePopup();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const center = container.clientWidth / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const childCenter = (childRect.left - containerRect.left) + (childRect.width / 2);
      const distance = Math.abs(childCenter - center);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    handleScroll();
    // Re-check on window resize
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      
      const nextIndex = (activeIndex + 1) % cardsData.length;
      const container = scrollRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const targetChild = children[nextIndex];
      
      if (targetChild) {
        // Only scroll the horizontal container, never the window
        const scrollPosition = targetChild.offsetLeft - (container.clientWidth / 2) + (targetChild.clientWidth / 2);
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
      
    }, 4000); // 4 second interval

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <section id="story" className="w-full bg-[#0A0004] py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="mb-12 px-6 md:px-12 lg:px-24">
        <h2 className="font-serif text-4xl md:text-5xl text-white">The Journey</h2>
      </div>

      {/* Manual Scroll Carousel */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-4 md:gap-8 px-[10vw] md:px-[calc(50vw-225px)] pb-16 pt-8 snap-x snap-mandatory no-scrollbar"
      >
        {cardsData.map((card, i) => {
          const isActive = i === activeIndex;
          
          return (
            <motion.div
              key={i}
              animate={{ 
                scale: isActive ? 1.05 : 0.9,
                opacity: isActive ? 1 : 0.4
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[80vw] md:w-[450px] flex-shrink-0 snap-center bg-[#0A0004] rounded-xl border border-white/10 overflow-hidden cursor-pointer shadow-xl"
              onClick={() => {
                if (scrollRef.current) {
                  const container = scrollRef.current;
                  const children = Array.from(container.children) as HTMLElement[];
                  const targetChild = children[i];
                  if (targetChild) {
                    const scrollPosition = targetChild.offsetLeft - (container.clientWidth / 2) + (targetChild.clientWidth / 2);
                    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
                  }
                }
              }}
            >
              {card.type === 'image' ? (
                <div className="h-[240px] md:h-[280px] relative">
                  <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                </div>
              ) : (
                <div className="h-[240px] md:h-[280px] bg-white/5 flex flex-col items-center justify-center p-8 text-center border-b border-white/10">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl">🏠</span>
                  </div>
                </div>
              )}
              
              <div className="p-8 h-full bg-[#0A0004] border-t border-white/10">
                <span className="font-sans font-bold text-primary uppercase text-xs tracking-wider mb-2 block">{card.tag}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">{card.title}</h3>
                <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-4 px-6 relative z-10">
        <button 
          onClick={() => openPopup('story')}
          className="font-sans font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group md:text-lg"
        >
          The full story 
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
}
