import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    q: "It's Friday evening. Where are you?",
    opts: [
      { id: 'A', text: "Rooftop bar, crew's already there" },
      { id: 'B', text: "Home, small gathering" },
      { id: 'C', text: "New spot, someone invited you" },
      { id: 'D', text: "Nowhere, just me and good music" }
    ]
  },
  {
    q: "Your ideal pour is:",
    opts: [
      { id: 'A', text: "Big jug, lots of ice, let's make it last" },
      { id: 'B', text: "Straight from the bottle, no ceremony" },
      { id: 'C', text: "In a proper glass, a bit of garnish" },
      { id: 'D', text: "One glass, no distractions" }
    ]
  },
  {
    q: "The most important thing about a drink is:",
    opts: [
      { id: 'A', text: "That everyone can share it" },
      { id: 'B', text: "That it's easy and doesn't overthink itself" },
      { id: 'C', text: "That it makes a good impression" },
      { id: 'D', text: "That it's just for you tonight" }
    ]
  },
  {
    q: "Casa Buena Red or White?",
    opts: [
      { id: 'A', text: "Red, always" },
      { id: 'B', text: "Whichever is colder" },
      { id: 'C', text: "White, it feels more considered" },
      { id: 'D', text: "Red, something deeper and warmer" }
    ]
  },
  {
    q: "Your perfect Casa Buena moment looks like:",
    opts: [
      { id: 'A', text: "A table full of people and the night wide open" },
      { id: 'B', text: "Your people, your place, no agenda" },
      { id: 'C', text: "Two glasses, good lighting, better conversation" },
      { id: 'D', text: "One glass, somewhere quiet, something to think about" }
    ]
  }
];

const RESULTS = {
  A: {
    name: "The Weekend Party",
    serve: "Casa Buena Red in a big jug with sliced citrus and enough ice to last the evening. Bottle on the table, no hiding it.",
    tag: "#GreatVibesOnly"
  },
  B: {
    name: "The Everyday Catch Up",
    serve: "Casa Buena White over ice, passion fruit sliced on top, zero fuss. Pour from the carton or the bottle — the vibe is what matters.",
    tag: "#CasaBuenaCasaVibes"
  },
  C: {
    name: "The Purposeful Connection",
    serve: "Casa Buena White from the bottle, in a proper glass, mint sprig, maybe a wedge of lime. Let them see the label.",
    tag: "#MadeWithImagination"
  },
  D: {
    name: "The End of Day Unwind",
    serve: "Casa Buena Red, single glass, squeeze of lime, a view that means something to you. This bottle is just for tonight.",
    tag: "#RefreshTheRules"
  }
};

export function VibeSection() {
  const [step, setStep] = useState(0); // 0-4 questions, 5 = result
  const [answers, setAnswers] = useState<string[]>([]);
  
  const handleAnswer = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const getResult = () => {
    if (answers.length < 5) return null;
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(a => counts[a as keyof typeof counts]++);
    const majority = Object.keys(counts).reduce((a, b) => counts[a as keyof typeof counts] > counts[b as keyof typeof counts] ? a : b);
    return RESULTS[majority as keyof typeof RESULTS];
  };

  const result = getResult();
  const progress = (step / 5) * 100;

  return (
    <section id="vibes" className="w-full bg-[#0A0004] py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">Great vibes only.</h2>
          <p className="font-sans font-bold text-primary text-xl tracking-wider">#CasaBuenaCasaVibes</p>
        </div>

        {/* Quiz */}
        <div className="max-w-2xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl mb-24 min-h-[360px] relative flex flex-col">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/20">
            <motion.div 
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step < 5 ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <span className="text-white/60 font-sans text-sm mb-4 block">Question {step + 1} of 5</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
                    {QUIZ_QUESTIONS[step].q}
                  </h3>
                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[step].opts.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleAnswer(opt.id)}
                        className="w-full text-left p-4 rounded-xl border border-white/30 text-white font-sans hover:bg-white hover:text-primary transition-colors duration-200"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full text-center"
                >
                  <span className="text-white/60 font-sans text-sm mb-4 block uppercase tracking-widest">Your Vibe Is</span>
                  <h3 className="font-serif text-4xl text-white mb-6">
                    {result.name}
                  </h3>
                  <p className="font-sans text-white/90 text-lg mb-8 leading-relaxed">
                    {result.serve}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href={`https://wa.me/?text=I%20got%20${encodeURIComponent(result.name)}!%20Chilling%20with%20Casa%20Buena%20%F0%9F%8D%B7%20%23CasaBuenaCasaVibes`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary font-bold font-sans py-3 px-6 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto"
                    >
                      Share on WhatsApp
                    </a>
                    <button
                      onClick={() => document.getElementById('find-it')?.scrollIntoView({ behavior: 'smooth' })}
                      className="border border-white text-white font-bold font-sans py-3 px-6 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
                    >
                      Find the Bottle
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Image Grid — using actual lifestyle photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
            <img src="/lifestyle-dinner-table.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Elegant dinner table with Casa Buena" />
            <img src="/lifestyle-wine-moment.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Man enjoying a glass of Casa Buena" />
          </div>
          <div className="space-y-4 md:space-y-6">
            <img src="/hero-bottle-red.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Casa Buena Red bottle with sangria glass" />
            <img src="/vineyard-origin.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Spanish vineyard origin" />
          </div>
          <div className="space-y-4 md:space-y-6 mt-4 md:mt-8 hidden md:block">
            <img src="/lifestyle-collage.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Wine moments collage" />
            <img src="/sangria-story-dna.png" className="w-full rounded-xl hover:border hover:border-primary transition-all duration-300 hover:-translate-y-1" alt="Sangria ingredient spiral" />
          </div>
        </div>

        {/* Mobile remaining images */}
        <div className="grid grid-cols-2 gap-4 md:hidden mb-16">
          <img src="/lifestyle-collage.png" className="w-full rounded-xl hover:border hover:border-primary transition-all" alt="Wine moments collage" />
          <img src="/sangria-story-dna.png" className="w-full rounded-xl hover:border hover:border-primary transition-all" alt="Sangria ingredient spiral" />
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-8 border-t border-white/10 pt-12">
          <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={32} /></a>
          <a href="#" className="text-white hover:text-primary transition-colors"><Facebook size={32} /></a>
          <a href="#" className="text-white hover:text-primary transition-colors"><Twitter size={32} /></a>
        </div>
      </div>
    </section>
  );
}
