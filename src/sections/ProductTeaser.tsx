import { usePopup } from '@/context/PopupContext';
import { motion } from 'framer-motion';

export function ProductTeaser() {
  const { openPopup } = usePopup();

  return (
    <section className="w-full bg-[#0A0004]">
      {/* Bottle Hero — Primary Product */}
      <div className="relative w-full border-b border-white/10">
        <div 
          className="relative group w-full overflow-hidden cursor-pointer"
          onClick={() => openPopup('product')}
        >
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Bottle Image */}
            <motion.div 
              className="w-[220px] md:w-[300px] flex-shrink-0 relative"
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150 z-0" />
              <img 
                src="/hero-bottle-red.png" 
                alt="Casa Buena Red Sangria Bottle — 750ml" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" 
              />
            </motion.div>

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
                New Format
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                The bottle has<br/>arrived.
              </h2>
              <p className="font-sans text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Same Casa Buena you love — the same Spanish Grenache, the same Mediterranean fruit notes, the same 8% ABV — now in a 750ml wine bottle. Premium packaging for the moments that call for a little more ceremony.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Sweet Red Wine</span>
                <span className="bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">8% ABV</span>
                <span className="bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">750ml Bottle</span>
              </div>
              <span className="inline-block font-sans font-semibold text-white group-hover:text-primary transition-colors text-lg">
                Full details &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Carton Classics — Side by Side */}
      <div className="w-full border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-3 block">The Classic Format</span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">The OG. Still here. Still hits.</h3>
            <p className="font-sans text-white/50 max-w-xl mx-auto">
              The 1-litre carton that started it all. Perfect for the fridge, perfect for sharing, perfect for those days when you just want something easy and reliable.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Red Carton */}
            <motion.div 
              className="flex-1 bg-gradient-to-b from-[#C81424]/10 to-transparent rounded-2xl border border-white/10 overflow-hidden cursor-pointer group p-8 flex flex-col items-center"
              onClick={() => openPopup('product')}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-[140px] md:w-[180px] h-[200px] md:h-[260px] mb-6 flex items-center justify-center">
                <img src="/carton-red.jpg" alt="Casa Buena Sweet Red Wine — 1L Carton" className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-2">Sweet Red</h4>
              <p className="font-sans text-white/50 text-sm text-center mb-4">Grenache · Mediterranean Fruit Notes · 1 Litre</p>
              <span className="font-sans text-xs font-bold text-primary tracking-wider uppercase group-hover:underline underline-offset-4">View Details &rarr;</span>
            </motion.div>

            {/* White Carton */}
            <motion.div 
              className="flex-1 bg-gradient-to-b from-[#8B9E3A]/10 to-transparent rounded-2xl border border-white/10 overflow-hidden cursor-pointer group p-8 flex flex-col items-center"
              onClick={() => openPopup('product')}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-[140px] md:w-[180px] h-[200px] md:h-[260px] mb-6 flex items-center justify-center">
                <img src="/carton-white.jpg" alt="Casa Buena Sweet White Wine — 1L Carton" className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="font-serif text-2xl text-white mb-2">Sweet White</h4>
              <p className="font-sans text-white/50 text-sm text-center mb-4">Macabeo · Citrus, Mint & Passion Fruit · 1 Litre</p>
              <span className="font-sans text-xs font-bold text-primary tracking-wider uppercase group-hover:underline underline-offset-4">View Details &rarr;</span>
            </motion.div>
          </div>

          {/* Both cartons */}
          <div className="mt-12 text-center">
            <p className="font-sans text-white/40 text-sm">
              Both formats. Same great sangria. Same great taste. Your choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
