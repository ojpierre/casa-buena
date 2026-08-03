import { usePopup } from '@/context/PopupContext';
import { motion } from 'framer-motion';

export function LifestyleSection() {
  const { openPopup } = usePopup();

  const cards = [
    {
      id: 'dinner',
      label: 'THE DINNER TABLE',
      title: 'Pull up a chair. Stay a while.',
      desc: 'A bottle at the centre of the table. Four glasses. Candles that burn lower than expected. This is what Casa Buena was named for — the good house, where people gather.',
      img: '/lifestyle-dinner-table.png'
    },
    {
      id: 'moment',
      label: 'THE QUIET GLASS',
      title: "You've earned this one.",
      desc: "One glass, warm light, zero agenda. Casa Buena Red, a view that matters, and the kind of quiet that only a good day can produce.",
      img: '/lifestyle-wine-moment.png'
    },
    {
      id: 'gift',
      label: 'THE GIFT',
      title: 'Show up with something worth opening.',
      desc: "The new bottle doesn't just taste right — it looks the part. Walk into any dinner with Casa Buena in hand and watch the host smile before they even pour.",
      img: '/lifestyle-collage.png'
    },
    {
      id: 'hero',
      label: 'THE NIGHT OUT',
      title: 'The night that surprises you.',
      desc: "Start with Casa Buena over ice and let the evening figure itself out. Orange wedge optional. Good company mandatory.",
      img: '/hero-bottle-red.png'
    }
  ];

  return (
    <section id="lifestyle" className="w-full bg-[#0A0004] py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Your moment.<br/>Your rules.
          </h2>
          <p className="font-sans text-white/70 text-lg max-w-2xl mx-auto">
            Casa Buena was made for the moments that matter — and the ones that just happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/5] md:aspect-square"
              onClick={() => openPopup('serve')}
            >
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                <span className="font-sans font-bold text-primary text-xs uppercase tracking-widest mb-3">
                  {card.label}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-white/80 text-sm md:text-base mb-6 max-w-sm">
                  {card.desc}
                </p>
                <div className="flex items-center">
                  <span className="font-sans font-semibold text-white text-sm border border-white/30 rounded-full px-5 py-2 group-hover:bg-white group-hover:text-black transition-colors">
                    Get the serve &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
