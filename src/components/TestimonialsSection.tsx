import heroImage from 'figma:asset/50f18e4ad7c691d4a131d9dcb2c116edabc1c80a.png';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const stats = [
    {
      percentage: "40-60%",
      description: "Fewer post-operative complications and 25% faster recovery with pre-surgical hypnotherapy."
    },
    {
      percentage: "80%",
      description: "of hypnotherapy patients report improved quality of life using hypnotherapy for side effect management."
    },
    {
      percentage: "75%",
      description: "Hypnotherapy reduces medical anxiety in children by up to",
      small: true
    },
    {
      percentage: "30-50%",
      description: "reduction in opioid dependency through hypnotherapy-based pain management."
    },
    {
      percentage: "40%",
      description: "less pain was reported with mothers using hypnotherapy before childbirth."
    },
    {
      percentage: "70-80%",
      description: "improvement in IBS symptoms sustained over 12 months."
    },
    {
      percentage: "85%",
      description: "chronic insomnia sufferers maintain sleep improvements for 6+ months."
    },
    {
      percentage: "60%",
      description: "PTSD therapy combined with hypnotherapy leads to greater symptom reduction.",
      small: true
    },
    {
      percentage: "75%",
      description: "Smoking cessation success rate increase to with hypnotherapy, versus 45% with other methods.",
      small: true
    },
    {
      percentage: "10-15%",
      description: "Students see a boost in exam scores and a significant drop in anxiety after hypnotherapy.",
      small: true
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative w-full">
        <img 
          src={heroImage} 
          alt="Scientific Evidence of Hypnotherapy" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Stats Section - Built with Components */}
      <div className="relative w-full bg-gradient-to-b from-black via-indigo-950 to-purple-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Top text */}
          <p className="text-white text-center mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">
            clients already know:
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-transparent border-2 border-purple-500/40 rounded-xl md:rounded-2xl p-5 sm:p-6 flex flex-col justify-center items-start min-h-[160px] sm:min-h-[180px]"
              >
                <div className={`${stat.small ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'} text-white mb-2 sm:mb-3 font-bold`}>
                  {stat.percentage}
                </div>
                <p className="text-white/90 text-xs sm:text-sm leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom text */}
          <p className="text-white/90 text-center mb-6 sm:mb-7 md:mb-8 max-w-4xl mx-auto text-sm sm:text-base md:text-lg px-4">
            These numbers reflect what I see in practice every day: fast, lasting, whole-person transformation rooted in science.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
            >
              Explore the Science Behind the Shift
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}