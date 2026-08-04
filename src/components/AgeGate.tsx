import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('casabuena_age_verified');
    if (!verified) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem('casabuena_age_verified', 'true');
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0004]"
        >
          <div className="text-center p-8 max-w-md w-full">
            {/* Text Logo */}
            <div className="mb-10">
              <h2 className="font-serif text-4xl text-white mb-1">Casa Buena</h2>
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary">Sangria</p>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-white mb-10">
              Are you 18 or older?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleYes}
                className="rounded-full bg-primary text-white font-semibold py-4 px-10 text-lg hover:bg-primary/90 transition-colors"
              >
                YES
              </button>
              <button
                onClick={handleNo}
                className="rounded-full border border-white text-white font-semibold py-4 px-10 text-lg hover:bg-white/10 transition-colors"
              >
                NO
              </button>
            </div>
            
            <p className="mt-8 text-white/50 text-xs font-sans uppercase tracking-wider">
              By entering this site, you agree to our terms and conditions.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
