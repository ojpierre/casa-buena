import { usePopup } from '@/context/PopupContext';

export function Education() {
  const { openPopup } = usePopup();

  return (
    <section className="w-full bg-[#F5EDE0] py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-[56px] text-[#2A1810] text-center max-w-3xl mx-auto mb-16 leading-tight">
          You've probably heard of sangria.<br />
          Let us tell you why that's a very good thing.
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16 overflow-x-auto pb-8 md:pb-0 snap-x no-scrollbar">
          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-0 md:flex-1 bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-t-primary snap-center flex-shrink-0">
            <h4 className="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-4">Where it comes from</h4>
            <p className="font-sans text-[#2A1810]/80 leading-relaxed">
              Sangria is a centuries-old Spanish tradition — real wine blended with fruit notes until it becomes something the whole table loves. Casa Buena Red starts with young Grenache from Cariñena, one of Spain's oldest wine regions. Our White uses Macabeo, a classic grape with natural citrus and floral character.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-0 md:flex-1 bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-t-primary snap-center flex-shrink-0">
            <h4 className="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-4">What it tastes like</h4>
            <p className="font-sans text-[#2A1810]/80 leading-relaxed">
              Fresh Mediterranean orange. Red berries. A whisper of tropical fruit. Sweet but never heavy, with no aftertaste that overstays its welcome. Whether you're pouring from the new bottle or the classic carton — it's the same refreshing blend that respects your evening.
            </p>
          </div>

          {/* Card 3 */}
          <div className="min-w-[85vw] md:min-w-0 md:flex-1 bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-t-primary snap-center flex-shrink-0">
            <h4 className="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-4">When to drink it</h4>
            <p className="font-sans text-[#2A1810]/80 leading-relaxed">
              Honestly? Whenever the moment feels right. Casa Buena is an everyday drink made to feel special. Chilled is best. With fruits is great. With people you like is perfect. The bottle dresses it up. The carton keeps it casual. You decide.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => openPopup('education')}
            className="font-sans font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 group"
          >
            Learn more about sangria 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
