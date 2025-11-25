import { CheckCircle } from 'lucide-react';

export function HypnotherapySection() {
  const leftAchievements = [
    "Top Hypnotherapy Program of the Year – IAOTH, USA (2025)",
    "3 Best Rated Hypnotherapist in Harrogate, UK (2022 - 2025)",
    "Clinical Hypnotherapist of the Year (UK) – LuxLife Magazine (2024)",
    "Global CBEA Award – Brainz Magazine, Sweden (2024)",
    "Carla Marcos Lopez's Journey of Passion and Purpose – Brainz Magazine (Cover Feature 2024)",
    "Expansion of Mind For Positive Change – Exclusive interview with Carla Marcos López – Brainz Magazine"
  ];

  const rightAchievements = [
    "Top 50 Fearless Leaders Award – IAOTF, USA (2024)",
    "Top Clinical Hypnotherapist of the Year – IAOTP, USA (2024)",
    "Notable Networker Award – BNI Harrogate, UK (2024)",
    "Women Leaders To Look Up To in 2025 – Passion Vista Magazine (Cover Feature)",
    "Women Leaders To Look Up To in 2025 Award – Passion Vista Magazine, India",
    "Esteemed member of the Brainz Magazine Expert Panel",
    "Best Hypnotherapy Business in Harrogate, UK for 2025 – Qualify Business Awards UK"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 font-bold">
            Why My Work Works
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed font-medium">
            I don't just teach subconscious transformation, I lived it. While sleep-deprived and overwhelmed, 
            I rewired my own patterns, then built a method so effective <span className="font-bold">87% of my clients experience 
            noticeable shifts within four sessions.</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-medium">
            To date, I've helped 600+ men and women in 15+ countries stop fighting themselves and start flowing.
          </p>
        </div>
        
        {/* Two column achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-3 sm:gap-y-4 max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16">
          {/* Left column */}
          <div className="space-y-3 sm:space-y-4">
            {leftAchievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700 font-semibold leading-snug text-sm sm:text-base">{achievement}</span>
              </div>
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-3 sm:space-y-4">
            {rightAchievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700 font-semibold leading-snug text-sm sm:text-base">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quote */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent italic leading-relaxed font-semibold">
            Because when you find your unique balance, success stops being something you chase, and becomes something you embody.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mt-3 sm:mt-4 font-semibold">- Carla Marcos</p>
        </div>
      </div>
    </section>
  );
}