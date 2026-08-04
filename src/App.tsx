import { PopupProvider } from '@/context/PopupContext';

import { AgeGate } from '@/components/AgeGate';
import { Header } from '@/components/Header';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/sections/Hero';
import { VibeSection } from '@/sections/VibeSection';
import { ProductTeaser } from '@/sections/ProductTeaser';
import { Education } from '@/sections/Education';
import { LifestyleSection } from '@/sections/LifestyleSection';
import { StoryStrip } from '@/sections/StoryStrip';
import { FindIt } from '@/sections/FindIt';
import { Footer } from '@/sections/Footer';

import { ProductPopup } from '@/popups/ProductPopup';
import { EducationPopup } from '@/popups/EducationPopup';
import { ServePopup } from '@/popups/ServePopup';
import { BrandStoryPopup } from '@/popups/BrandStoryPopup';

function MainApp() {
  return (
    <div className="w-full bg-black min-h-screen text-white relative">
      <AgeGate />
      <Header />
      
      <Hero />
      <Marquee />
      <VibeSection />
      <ProductTeaser />
      <Education />
      <LifestyleSection />
      <StoryStrip />
      <FindIt />
      <Footer />

      {/* Popups */}
      <ProductPopup />
      <EducationPopup />
      <ServePopup />
      <BrandStoryPopup />
    </div>
  );
}

function App() {
  return (
    <PopupProvider>
      <MainApp />
    </PopupProvider>
  );
}

export default App;
