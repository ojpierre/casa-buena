export function Marquee() {
  const content = "NOW IN BOTTLE · BEST SERVED CHILLED · #CASABUENACASAVIBES · FRUIT WINE FROM SPAIN · GREAT VIBES ONLY · SWEET RED · SWEET WHITE · 8% ABV · MADE WITH IMAGINATION · CASA BUENA · ";
  const repeatedContent = content.repeat(3);

  return (
    <div className="w-full bg-primary text-white overflow-hidden py-3 md:py-4 border-y border-red-800/30">
      <div className="marquee-content font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase">
        <span>{repeatedContent}</span>
        <span>{repeatedContent}</span>
      </div>
    </div>
  );
}
