import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { X } from 'lucide-react';

const TABS = [
  { id: 'dinner', label: 'The Dinner Table', img: '/lifestyle-dinner-table.png',
    serves: [
      { title: "The Centre Piece", desc: "Open the bottle, place it in the middle of the table. Let people pour their own. Add an ice bucket and sliced oranges on the side.", pair: "Pairs with any conversation that starts with 'remember when...'" },
      { title: "The Proper Pour", desc: "Red in proper wine glasses, no ice. Let the bottle do the talking. The label faces out.", pair: "Pairs with the kind of food you spent time on." },
      { title: "The Jug Share", desc: "Red, big glass jug, sliced citrus and berries floating, loads of ice. Looks like you planned this (you didn't).", pair: "Pairs with compliments and refill requests." }
    ]
  },
  { id: 'moment', label: 'The Quiet Glass', img: '/lifestyle-wine-moment.png',
    serves: [
      { title: "The Solo", desc: "Red, one glass, four ice cubes, squeeze of lime. No garnish. No ceremony.", pair: "You've earned the simplicity." },
      { title: "The Balcony Glass", desc: "White from the carton, chilled, no ice. The temperature does the work. Find somewhere with a view.", pair: "Pairs with whatever city you're in." },
      { title: "The Friday Ritual", desc: "Red from the bottle, wide glass, two orange wedges squeezed in, topped with ice. Put something on in the background.", pair: "This is your time." }
    ]
  },
  { id: 'gift', label: 'The Gift', img: '/lifestyle-collage.png',
    serves: [
      { title: "The Arrival", desc: "Show up with the bottle. Wrapped in brown paper if you're feeling it. The ribbon is optional. The smile isn't.", pair: "Pairs with being the guest everyone remembers." },
      { title: "The Impressed Host", desc: "White, chilled beforehand (text ahead to ask for fridge space). Proper glasses. Mint garnish if they have it.", pair: "Pairs with 'where did you find this?'" },
      { title: "The Late Addition", desc: "Arrive with the carton when the bottle runs out. No judgement. Just more sangria.", pair: "Pairs with relief." }
    ]
  },
  { id: 'nightout', label: 'The Night Out', img: '/hero-bottle-red.png',
    serves: [
      { title: "The Party Pour", desc: "Red, big jug, sliced citrus, loads of ice, make a whole lot of it. The bottle stays visible.", pair: "Pairs with whatever everyone brought." },
      { title: "The Quick Chill", desc: "White, straight from the fridge, ice, a passion fruit sliced over the top. Ready in 30 seconds.", pair: "Pairs with the first 5 minutes." },
      { title: "The Show-Off", desc: "Red from the new bottle, in a clear pitcher, orange slices floating, sprigs of mint, extra ice. You look like a bartender.", pair: "Pairs with 'who made this?'" }
    ]
  }
];

export function ServePopup() {
  const { activePopup, closePopup } = usePopup();
  const [activeTab, setActiveTab] = useState(0);

  if (activePopup !== 'serve') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-0 z-50 bg-[#0A0004] text-white overflow-y-auto"
      >
        <button 
          onClick={closePopup}
          className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={TABS[activeTab].img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0004] via-[#0A0004]/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-8">
            <h2 className="font-serif text-5xl md:text-7xl">
              {TABS[activeTab].label}
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          {/* Tabs */}
          <div className="flex overflow-x-auto gap-4 pb-8 mb-8 border-b border-white/10 no-scrollbar">
            {TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all ${
                  activeTab === idx 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {TABS[activeTab].serves.map((serve, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-8 border border-white/10 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-white mb-4">{serve.title}</h3>
                  <p className="font-sans text-white/70 text-base leading-relaxed mb-8 flex-grow">
                    {serve.desc}
                  </p>
                  <p className="font-sans text-primary italic text-sm border-t border-white/10 pt-4 mt-auto">
                    {serve.pair}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
