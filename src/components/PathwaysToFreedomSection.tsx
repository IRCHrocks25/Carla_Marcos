import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function PathwaysToFreedomSection() {
  const pathways = [
    {
      title: "The Bespoke 1:1 Experience (Most Transformational)",
      description: "My award-winning signature programs tailored to your unique patterns and goals. Delivered globally via secure video sessions. For the man or woman ready to rewrite her their story from the ground up.",
      image: "https://images.unsplash.com/photo-1679661341293-075d3f017d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwb3V0ZG9vciUyMHN1bnNoaW5lfGVufDF8fHx8MTc2MzQ2MjU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      logo: {
        name: "CARLA MARCOS",
        subtitle: "DIAMOND TRANSFORMATION",
        subtitle2: "PROGRAM"
      }
    },
    {
      title: "Group Transformation Circles (Coming Soon)",
      description: "Intimate, supportive communities where you'll discover you're not alone in what you're facing—and fight these battles solo again.",
      image: "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBmcmllbmRzJTIwY2lyY2xlJTIwaGFwcHl8ZW58MXx8fHwxNzYzNDYyNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: {
        name: "CARLA MARCOS",
        subtitle: "THE JOY SUCCESS",
        subtitle2: "SOCIETY"
      }
    },
    {
      title: "The Self-Liberation Collection",
      description: "My book on how mastering the subconscious language and hypnosis opens the gateway to deep, true, and lasting transformation, accompanied by a practical guide and a deep hypnosis recording album—composed in Ibiza, the high-frequency island of joy and flow. Perfect if you want to begin your journey today.",
      image: "https://images.unsplash.com/photo-1516197067152-381321bc78e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRwaG9uZXMlMjBib29rJTIwbGlicmFyeXxlbnwxfHx8fDE3NjM0NjI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      logo: {
        name: "CARLA MARCOS",
        subtitle: "SAPPHIRE HYPNOTIC",
        subtitle2: "SOUNDSCAPES"
      }
    }
  ];

  // Generate colorful dot positions for logos
  const dotColors = ['#f97316', '#84cc16', '#14b8a6', '#8b5cf6', '#ec4899', '#3b82f6', '#ef4444'];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle wave pattern background */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${i * 40} Q400,${i * 40 - 20} 800,${i * 40} T1600,${i * 40}`}
              stroke="#8b5cf6"
              strokeWidth="1"
              fill="none"
              opacity={0.3}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 sm:mb-4 font-bold">
            Your Pathway to Freedom
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Choose How Deep You Want to Go
          </p>
        </div>

        {/* Three cards with logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {pathways.map((pathway, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Logo with colorful dots */}
              <div className="flex items-center justify-center mb-5 sm:mb-6 h-20 sm:h-24">
                <div className="relative">
                  {/* Colorful dots in a molecule-like pattern */}
                  <svg width="100" height="80" viewBox="0 0 100 80" className="absolute -left-8 sm:-left-12 top-0 w-20 sm:w-auto">
                    <circle cx="30" cy="20" r="6" fill={dotColors[0]} />
                    <circle cx="50" cy="15" r="6" fill={dotColors[1]} />
                    <circle cx="20" cy="40" r="6" fill={dotColors[2]} />
                    <circle cx="45" cy="35" r="7" fill={dotColors[3]} />
                    <circle cx="25" cy="60" r="6" fill={dotColors[4]} />
                    <circle cx="50" cy="55" r="7" fill={dotColors[5]} />
                    <circle cx="65" cy="35" r="5" fill={dotColors[6]} />
                    <circle cx="70" cy="55" r="4" fill="#d1d5db" opacity="0.5" />
                    {/* Connecting lines */}
                    <line x1="30" y1="20" x2="50" y2="15" stroke="#e5e7eb" strokeWidth="1.5" />
                    <line x1="20" y1="40" x2="45" y2="35" stroke="#e5e7eb" strokeWidth="1.5" />
                    <line x1="45" y1="35" x2="50" y2="15" stroke="#e5e7eb" strokeWidth="1.5" />
                    <line x1="25" y1="60" x2="50" y2="55" stroke="#e5e7eb" strokeWidth="1.5" />
                    <line x1="45" y1="35" x2="65" y2="35" stroke="#e5e7eb" strokeWidth="1.5" />
                    <line x1="50" y1="55" x2="70" y2="55" stroke="#e5e7eb" strokeWidth="1.5" />
                  </svg>
                  
                  <div className="text-center pl-6 sm:pl-8">
                    <div className="text-xs sm:text-sm text-gray-500 tracking-wide mb-1">
                      {pathway.logo.name}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                      {pathway.logo.subtitle}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                      {pathway.logo.subtitle2}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                {/* Image - Clickable */}
                <button 
                  onClick={() => console.log(`Clicked: ${pathway.title}`)}
                  className="w-full h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                >
                  <ImageWithFallback
                    src={pathway.image}
                    alt={pathway.title}
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Content */}
                <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 p-6 sm:p-7 md:p-8 text-white space-y-3 sm:space-y-4 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl mb-2 font-bold leading-tight">
                    {pathway.title}
                  </h3>
                  
                  <p className="text-purple-100 leading-relaxed flex-1 text-sm sm:text-base">
                    {pathway.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Your Future Self Is Waiting
          </h3>
          
          <p className="text-gray-700 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Whether you want the deep, tailored transformation of my 1:1 program, the shared strength of a group, or the instant reset of guided audios you can start today.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-bold shadow-xl w-full sm:w-auto"
          >
            Choose your pathway and begin now
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}