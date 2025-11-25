import { Button } from './ui/button';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function PathwaysSection() {
  const [expandedStage, setExpandedStage] = useState(0);

  const stages = [
    {
      title: "STAGE 1: REGULATION",
      subtitle: "When Your Nervous System Finally Feels Safe",
      content: [
        "Your body has been braced for impact for so long, it's forgotten what calm feels like. We start by teaching your nervous system that it's safe to let go of hypervigilance.",
        "What happens: Sleep improves. Racing thoughts slow down. Your shoulders drop for the first time in months. You remember what it feels like to breathe deeply."
      ]
    },
    {
      title: "STAGE 2: REWIRING",
      subtitle: "Where the Magic Actually Happens",
      content: [
        "This is where we access and update the subconscious beliefs driving your patterns.",
        "We rewrite the old stories that no longer serve you, installing new neural pathways that support your goals and well-being."
      ]
    },
    {
      title: "STAGE 3: REALISATION",
      subtitle: "When Change Becomes Your New Normal",
      content: [
        "You start showing up differently without even thinking about it.",
        "The changes become integrated into who you are, not something you have to consciously maintain."
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 overflow-hidden">
      {/* Decorative wave pattern on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 opacity-10 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${i * 60} Q 50 ${i * 60 - 20} 100 ${i * 60} T 200 ${i * 60}`}
              stroke="url(#waveLeft)"
              strokeWidth="2"
              fill="none"
              opacity={0.3 + (i % 3) * 0.1}
            />
          ))}
        </svg>
      </div>

      {/* Decorative dots/particles */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Program Info */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 leading-tight font-bold">
              The Diamond Transformation Program®
            </h2>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-purple-300 mb-4 sm:mb-5 md:mb-6 font-bold">
              How to Rewire a Lifetime in Weeks, Not Years
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-purple-100">
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                Forget everything you've been told about change taking time.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                Forget the idea that growth has to be painful.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                And definitely forget the belief that you need to dig through every childhood wound to move forward.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                The Marcos Method™ is different. It's based on a simple truth: your brain is neuroplastic, which means the patterns running your life can be rewritten, much like updating software.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                After our Initial Consultation, I'll prepare your bespoke plan to help you achieve your specific goals. This will balance planning with expert ad-hoc assessment as our sessions progress.
              </p>
              
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                Often, as we work together, we discover that what first appeared to be "the problem" is actually a coping strategy. That's why I'll naturally overlay and adapt the main stages of your plan to reflect the new insights and breakthroughs you experience along the way.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion Stages */}
          <div className="space-y-3 sm:space-y-4">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedStage(expandedStage === index ? -1 : index)}
                  className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 pr-3">
                    <h4 className="text-lg sm:text-xl md:text-2xl text-white mb-1 font-bold">
                      {stage.title}
                    </h4>
                    <p className="text-purple-200 text-sm sm:text-base">
                      {stage.subtitle}
                    </p>
                  </div>
                  {expandedStage === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  )}
                </button>
                
                {expandedStage === index && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2 space-y-3 sm:space-y-4">
                    {stage.content.map((paragraph, idx) => (
                      <p key={idx} className="text-purple-100 leading-relaxed text-sm sm:text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6 font-bold px-4">
            From Survival Mode to Self-Mastery, in Weeks, Not Years
          </h3>
          
          <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 max-w-3xl mx-auto px-4">
            The Diamond Transformation Program™ doesn't just help you cope, it rewires your mind for a life that feels lighter, clearer, and completely your own.
          </p>
          
          <p className="text-purple-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-9 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Start your transformation today and experience the calm, clarity, and confidence you've been craving.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl font-bold shadow-2xl w-full sm:w-auto mx-4"
          >
            Book your Initial Consultation today
            <ArrowUpRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}