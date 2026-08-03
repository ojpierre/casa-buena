import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { X } from 'lucide-react';

export function ProductPopup() {
  const { activePopup, closePopup } = usePopup();
  const [variant, setVariant] = useState<'red' | 'white'>('red');

  if (activePopup !== 'product') return null;

  const isRed = variant === 'red';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-0 z-50 bg-[#0A0004] text-white overflow-y-auto flex flex-col md:flex-row"
      >
        <button 
          onClick={closePopup}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Visual Half */}
        <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen relative flex items-center justify-center p-12 bg-gradient-to-b from-transparent to-black/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={variant}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[400px] h-full max-h-[80vh]"
            >
              <img 
                src={isRed ? "/hero-bottle-red.png" : "/carton-white.jpg"} 
                alt={isRed ? "Casa Buena Red" : "Casa Buena White"} 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-1 flex">
              <button
                onClick={() => setVariant('red')}
                className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all ${isRed ? 'bg-[#C81424] text-white' : 'text-white/60 hover:text-white'}`}
              >
                Red
              </button>
              <button
                onClick={() => setVariant('white')}
                className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all ${!isRed ? 'bg-[#8B9E3A] text-white' : 'text-white/60 hover:text-white'}`}
              >
                White
              </button>
            </div>
          </div>
        </div>

        {/* Spec Half */}
        <div className="w-full md:w-1/2 min-h-screen bg-white text-[#2A1810] p-8 md:p-16 flex flex-col justify-center">
          <span className="inline-block font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            {isRed ? 'Now in Bottle · 750ml' : 'Classic Format · 1 Litre'}
          </span>
          <h2 className="font-serif text-5xl mb-12">
            Casa Buena {isRed ? 'Red' : 'White'}
          </h2>

          <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-y-8 gap-x-4 mb-16">
            <SpecRow label="PRODUCT" value={isRed ? 'Sweet Red Wine' : 'Sweet White Wine'} />
            <SpecRow label="GRAPE VARIETY" value={isRed ? 'Grenache' : 'Macabeo'} />
            <SpecRow label="ORIGIN" value={isRed ? 'Cariñena, Spain' : 'Spain'} />
            <SpecRow label="FLAVOUR NOTES" value={isRed ? 'Mediterranean Orange, Red Berries, Tropical Fruit' : 'Citrus, Mint, Passion Fruit, Vanilla Aromas'} />
            <SpecRow label="ABV" value="8% V/V" />
            <SpecRow label="FORMAT" value={isRed ? '750ml Bottle · Also available in 1L Carton' : '1 Litre Carton'} />
            <SpecRow label="SERVE" value={isRed ? 'Serve Chilled, with or without fruits' : 'Serve Chilled, ideal with light fruits'} />
          </div>

          <div>
            <p className="font-serif text-2xl mb-6">Ready to find one near you?</p>
            <button
              onClick={() => {
                closePopup();
                document.getElementById('find-it')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white font-sans font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Find It <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <>
      <div className="font-sans font-bold text-primary text-xs uppercase tracking-widest pt-1 border-t border-black/10">
        {label}
      </div>
      <div className="font-sans text-sm md:text-base text-[#2A1810] pt-1 border-t border-black/10">
        {value}
      </div>
    </>
  );
}
