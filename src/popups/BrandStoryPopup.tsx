import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { X } from 'lucide-react';

export function BrandStoryPopup() {
  const { activePopup, closePopup } = usePopup();

  if (activePopup !== 'story') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-0 z-50 bg-[#050002] text-white overflow-y-auto"
      >
        <div className="sticky top-0 w-full bg-[#050002]/80 backdrop-blur-xl z-10 border-b border-white/10 flex justify-between items-center p-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl">The Story</h2>
          <button 
            onClick={closePopup}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <p className="font-serif text-3xl md:text-5xl leading-tight mb-24 text-center">
            "Casa Buena means Good House. Not a grand house. Not a wealthy one. A good one — the kind where people are welcome, where there is always something on the table, where the evenings stretch longer than they should."
          </p>

          <div className="space-y-32">
            {/* Chapter 1 */}
            <div className="group">
              <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <img src="/vineyard-origin.png" alt="Spanish Vineyards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="max-w-2xl mx-auto">
                <span className="font-sans font-bold text-primary uppercase tracking-widest text-sm mb-4 block">Chapter 01</span>
                <h3 className="font-serif text-4xl mb-6">Where it all begins.</h3>
                <p className="font-sans text-white/70 text-lg leading-relaxed">
                  The Cariñena region. Grenache vines deep in Spanish soil. This isn't just a factory process — it's centuries of fruit wine tradition respected and refined. The blend was developed not in a laboratory, but from a genuine understanding of what people enjoy at the end of the day. It's warm, specific, and proud of its roots without being self-important or exclusionary.
                </p>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="max-w-2xl mx-auto text-center border-y border-white/10 py-16">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">🏠</span>
              </div>
              <span className="font-sans font-bold text-primary uppercase tracking-widest text-sm mb-4 block">Chapter 02</span>
              <h3 className="font-serif text-4xl mb-6">A name with a philosophy.</h3>
              <p className="font-sans text-white/70 text-lg leading-relaxed">
                Why Casa Buena? Because a good house is defined by the people in it, not its grandeur. This directly maps onto the brand's purpose: making a quality wine experience accessible to everyone, without dumbing it down or stripping its identity. It's an invitation to pull up a chair.
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="group">
              <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <img src="/hero-bottle-red.png" alt="Casa Buena in Kenya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="max-w-2xl mx-auto">
                <span className="font-sans font-bold text-primary uppercase tracking-widest text-sm mb-4 block">Chapter 03</span>
                <h3 className="font-serif text-4xl mb-6">From carton to bottle. From Kenya, forever.</h3>
                <p className="font-sans text-white/70 text-lg leading-relaxed mb-6">
                  Brought to Kenya via KWAL, Casa Buena arrived to answer a specific gap. The market was full of people curious about wine but finding it either overly complex, artificially expensive, or frankly, elitist.
                </p>
                <p className="font-sans text-white/70 text-lg leading-relaxed mb-6">
                  The carton was the first step — accessible, easy, no pretension. It worked. People loved it. Now the bottle takes it further. Same liquid, same 8% ABV, same Mediterranean fruit notes — but dressed for the moments that deserve a little more ceremony.
                </p>
                <p className="font-sans text-white/70 text-lg leading-relaxed">
                  From Nairobi to Mombasa, Nakuru, Eldoret, and Kisumu — in bottle and carton — it's here for the catch-ups, the pre-games, the dinners, and the quiet evenings alike.
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-32 text-center pb-12">
            <h3 className="font-serif text-4xl mb-8">Ready to be part of it?</h3>
            <button
              onClick={() => {
                closePopup();
                document.getElementById('find-it')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white font-sans font-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-3 text-lg"
            >
              Find Casa Buena Near You <span className="text-2xl leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
