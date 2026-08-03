import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function FindIt() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const cities = [
    { id: 'nairobi', name: 'Nairobi', top: '55%', left: '48%', descOn: 'Rooftop bars, premium clubs, selected restaurants.', descOff: 'Naivas, Carrefour, Quickmart, local liquor stores.' },
    { id: 'mombasa', name: 'Mombasa', top: '75%', left: '65%', descOn: 'Beachfront lounges, Old Town bars.', descOff: 'Major supermarkets, Diani liquor stores.' },
    { id: 'nakuru', name: 'Nakuru', top: '48%', left: '40%', descOn: 'CBD lounges, resort bars.', descOff: 'Naivas, local distributors.' },
    { id: 'eldoret', name: 'Eldoret', top: '42%', left: '32%', descOn: 'Premium clubs, sports bars.', descOff: 'Major supermarkets.' },
    { id: 'kisumu', name: 'Kisumu', top: '50%', left: '20%', descOn: 'Lakefront lounges, CBD bars.', descOff: 'Naivas, United Mall stores.' },
  ];

  return (
    <section id="find-it" className="w-full bg-white py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-[#2A1810] mb-4">Find your nearest Casa Buena.</h2>
          <p className="font-sans text-[#2A1810]/60 text-lg">Available across Kenya — in bottle and carton — wherever good moments happen.</p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[4/3] bg-[#F5EDE0] rounded-2xl p-8 mb-16 shadow-inner">
          {/* Kenya Map SVG Outline */}
          <div className="absolute inset-0 p-8 flex items-center justify-center opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#2A1810" strokeWidth="0.5">
              <path d="M40 10 L60 15 L70 30 L80 40 L90 60 L80 80 L70 90 L50 85 L30 90 L20 70 L10 50 L15 30 Z" />
            </svg>
          </div>

          {/* Dots */}
          {cities.map((city, i) => (
            <div 
              key={city.id} 
              className="absolute" 
              style={{ top: city.top, left: city.left }}
            >
              <motion.button
                className="w-4 h-4 bg-primary rounded-full relative z-10"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                onClick={() => setActiveCity(city.id)}
              />
              <span className="absolute top-6 left-1/2 -translate-x-1/2 font-sans text-xs font-bold text-[#2A1810] tracking-widest">{city.name}</span>
            </div>
          ))}

          {/* Tooltip */}
          <AnimatePresence>
            {activeCity && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-xl p-6 w-64 z-20"
              >
                <button 
                  onClick={() => setActiveCity(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                  <X size={16} />
                </button>
                <h4 className="font-serif text-2xl text-primary mb-4">
                  {cities.find(c => c.id === activeCity)?.name}
                </h4>
                <div className="mb-4">
                  <span className="font-sans font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-1">On Premise</span>
                  <p className="font-sans text-sm text-[#2A1810]">
                    {cities.find(c => c.id === activeCity)?.descOn}
                  </p>
                </div>
                <div>
                  <span className="font-sans font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Off Premise</span>
                  <p className="font-sans text-sm text-[#2A1810]">
                    {cities.find(c => c.id === activeCity)?.descOff}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-primary hover:shadow-lg transition-shadow">
            <h3 className="font-serif text-2xl text-[#2A1810] mb-3">Bars & Clubs</h3>
            <p className="font-sans text-[#2A1810]/70 text-sm">Ask for Casa Buena at your favourite spot. The new bottle looks just as good on a table as it does in a glass.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-primary hover:shadow-lg transition-shadow">
            <h3 className="font-serif text-2xl text-[#2A1810] mb-3">Supermarkets & Liquor Stores</h3>
            <p className="font-sans text-[#2A1810]/70 text-sm">Pick up the bottle or the carton on the way. Available at Naivas, Carrefour, Quickmart, and local liquor stores across Kenya.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-primary hover:shadow-lg transition-shadow">
            <h3 className="font-serif text-2xl text-[#2A1810] mb-3">Online Delivery</h3>
            <p className="font-sans text-[#2A1810]/70 text-sm">Some vendors deliver. Some don't. Either way, you won't have to look far. Casa Buena is everywhere the good moments are.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
