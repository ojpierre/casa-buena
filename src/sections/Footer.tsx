import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#1A0008] pt-24 pb-12 px-6 flex flex-col items-center">
      {/* Logo Text */}
      <div className="mb-12 text-center">
        <h3 className="font-serif text-4xl md:text-5xl text-white mb-2">Casa Buena</h3>
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary">Sangria</p>
      </div>

      {/* Nav */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-white/70 font-sans text-sm mb-12 max-w-2xl">
        <a href="#" className="hover:text-white transition-colors">The Sangria</a>
        <span>·</span>
        <a href="#" className="hover:text-white transition-colors">Our Bottles</a>
        <span>·</span>
        <a href="#" className="hover:text-white transition-colors">Switch Up The Moment</a>
        <span>·</span>
        <a href="#" className="hover:text-white transition-colors">The Story</a>
        <span>·</span>
        <a href="#" className="hover:text-white transition-colors">Find It</a>
        <span>·</span>
        <a href="#" className="hover:text-white transition-colors">The Vibe</a>
      </div>

      {/* Socials */}
      <div className="flex gap-6 mb-8">
        <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={24} /></a>
        <a href="#" className="text-white hover:text-primary transition-colors"><Facebook size={24} /></a>
        <a href="#" className="text-white hover:text-primary transition-colors"><Twitter size={24} /></a>
      </div>

      <p className="font-sans font-bold text-white text-base tracking-wider mb-12">#CASABUENACASAVIBES</p>

      <div className="w-full max-w-4xl h-[1px] bg-white/20 mb-8" />

      {/* Small links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/50 font-sans text-xs mb-8 text-center">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Responsible Drinking</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <span>© {new Date().getFullYear()} Casa Buena Sangria by KWAL</span>
      </div>

      {/* Legal */}
      <div className="w-full max-w-4xl border border-white/10 p-4 text-center rounded">
        <p className="font-sans text-white/40 text-[11px] leading-relaxed uppercase tracking-wider">
          Excessive alcohol consumption is harmful to your health. Not for sale to persons under the age of 18 years.
        </p>
      </div>
    </footer>
  );
}
