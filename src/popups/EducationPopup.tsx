import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { X } from 'lucide-react';

export function EducationPopup() {
  const { activePopup, closePopup } = usePopup();

  if (activePopup !== 'education') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-0 z-50 bg-[#F5EDE0] text-[#2A1810] overflow-y-auto"
      >
        <div className="sticky top-0 w-full bg-[#F5EDE0]/90 backdrop-blur-md z-10 border-b border-[#2A1810]/10 flex justify-between items-center p-6">
          <h2 className="font-serif text-3xl text-primary">What Is Sangria?</h2>
          <button 
          onClick={closePopup}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-[60] p-3 bg-primary text-white rounded-full hover:bg-primary/80 shadow-2xl transition-all"
        >
          <X size={28} strokeWidth={2.5} />
        </button>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 space-y-24">
          <Chapter 
            num="01" 
            title="Older than you think." 
            content="Spain's sangria tradition goes back centuries. It was born out of simple necessity and brilliant imagination — blending good wine with whatever fresh fruits were at hand to create something that could be enjoyed all evening. It started at family tables and local taverns, eventually becoming a beloved symbol of Spanish hospitality worldwide."
          />
          
          <Chapter 
            num="02" 
            title="It starts with real wine." 
            content="A sangria is only as good as the wine it starts with. Casa Buena Red uses young Grenache from Cariñena, one of Spain's oldest designated wine regions, known for producing fruit-forward, fresh-drinking reds that don't need years in a cellar to taste beautiful. Casa Buena White uses Macabeo, a classic Spanish white grape with natural citrus and floral tendencies."
          />
          
          <Chapter 
            num="03" 
            title="This is where it gets interesting." 
            content="Once the wine is ready, the blending begins. We introduce Mediterranean orange notes, red berries, and tropical fruit extracts. The goal is balance: sweet without being sugary, fruity without tasting artificial. It should taste like wine, but feel like a celebration."
          />
          
          <Chapter 
            num="04" 
            title="The number that changes everything." 
            content="At 8% ABV, Casa Buena is light enough for a long, relaxed evening. This is a deliberate, considered choice. It's not a compromise on quality; it's a recognition that the best nights are the ones you can savor slowly, glass by glass, without the heavy finish of a strong spirit or a 14% wine."
          />
          
          <div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-sans font-bold text-primary text-lg">05</span>
              <h3 className="font-serif text-4xl">The only rule: serve it cold.</h3>
            </div>
            <p className="font-sans text-[#2A1810]/80 text-lg leading-relaxed mb-12">
              Everything else is optional. Ice or no ice. Fruit or no fruit. In a crystal glass or straight from the bottle. Carton for the chill days, bottle when you want to impress.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ServeIcon icon="🧊" text="Over loads of ice" />
              <ServeIcon icon="🍋" text="With fresh fruit" />
              <ServeIcon icon="❄️" text="Straight from the fridge" />
              <ServeIcon icon="🥂" text="With good company" />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Chapter({ num, title, content }: { num: string, title: string, content: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-sans font-bold text-primary text-lg">{num}</span>
        <h3 className="font-serif text-4xl">{title}</h3>
      </div>
      <p className="font-sans text-[#2A1810]/80 text-lg leading-relaxed ml-0 md:ml-12">
        {content}
      </p>
    </div>
  );
}

function ServeIcon({ icon, text }: { icon: string, text: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-[#2A1810]/5">
      <span className="text-4xl mb-4 block">{icon}</span>
      <span className="font-sans text-sm font-semibold">{text}</span>
    </div>
  );
}
