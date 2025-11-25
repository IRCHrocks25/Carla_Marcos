import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

export function TransformationProgramSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Card - The Ripple Effect */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-12 sm:mb-16 md:mb-20 lg:mb-24 shadow-2xl">
          {/* Cosmic purple background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-950"></div>
          
          {/* Purple glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_70%)]"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-5 md:mb-6 font-bold">
              The Ripple Effect
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              Helping someone transform isn't just about them. It's about the energy they carry into their families, teams, and communities. Positive change spreads.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8 sm:mb-9 md:mb-10 leading-relaxed">
              Ready to rewire your mind for peak performance, emotional mastery, and true success? Let's start your breakthrough today.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl mb-6 sm:mb-8 font-bold w-full sm:w-auto"
            >
              Book your Initial Consultation
              <ArrowUpRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            
            <p className="text-base sm:text-lg text-purple-100">
              Work with me globally, online, in English or Spanish
            </p>
          </div>
        </div>

        {/* Bottom Section - The Exhaustion No One Talks About */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold">
              The Exhaustion No One Talks About
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent font-bold">
                When Your Success Becomes Your Prison
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You're successful by every external measure.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Yet you lie awake at 3 AM wondering why you still feel like you're performing your life instead of living it.
              </p>
              
              <h3 className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent pt-2 sm:pt-3 md:pt-4 font-bold">
                The invisible struggle of high-achievers:
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">Your Mind Never Stops:</span> Anxiety disguised as "being thorough." Overthinking masked as "being strategic." Decision paralysis dressed up as "being careful."
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">Your Body Keeps the Score:</span> Stress headaches that no amount of water fixes. Energy crashes that caffeine can't cure. Gastrointestinal symptoms that come and go. Sleep that never actually refreshes you.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">Your Soul Feels Starved:</span> You've optimized everything except joy. You've mastered everything except ease. You've achieved everything except the feeling that you can finally exhale.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The Pattern You Can't Break: You know exactly what you should do, but you don't do it. Or you do it for a while, then slide back into old habits. The gap between knowing and doing feels insurmountable.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Here's the truth nobody tells you, mostly because they don't know it themselves: willpower is not the answer.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This doesn't devalue willpower, far from it. It simply means that for lasting change, your conscious and subconscious minds need to be working together. The subconscious is still running programs written when you were just 5-7 years old, and no amount of conscious effort alone can override that code.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Until now. And that's where I come in.
            </p>
            
            {/* Quote Box */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg">
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic mb-3 sm:mb-4 leading-relaxed font-bold">
                "We can't 'think our way out of patterns that were never created by thinking in the first place.'"
              </p>
              <p className="text-purple-900 font-semibold text-sm sm:text-base">
                - CARLA MARCOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}