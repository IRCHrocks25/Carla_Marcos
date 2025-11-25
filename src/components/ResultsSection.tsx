import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Check, ArrowRight } from 'lucide-react';

export function ResultsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative wavy lines */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 hidden md:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 Q100,100 200,0 T400,0 L400,800 L0,800 Z"
                fill="none"
                stroke="url(#waveGradient1)"
                strokeWidth="3"
                opacity="0.6"
              />
              <path
                d="M50,50 Q150,150 250,50 T450,50 L450,800 L50,800 Z"
                fill="none"
                stroke="url(#waveGradient1)"
                strokeWidth="2"
                opacity="0.4"
              />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
            {/* Left content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 space-y-4 md:space-y-5 lg:space-y-6 order-2 md:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 md:mb-3 font-bold">
                  The Siesta Bliss Mind Reset
                </h2>
                <p className="text-lg sm:text-xl text-purple-200 font-semibold">
                  Your oasis for the mind.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-purple-100 font-medium">
                A simple, soothing way to pause, reset, and rediscover your inner flow.
              </p>
              
              <p className="text-white text-base sm:text-lg font-bold">
                Feel better in 20 minutes. Start now it's free.
              </p>
              
              <div className="space-y-3">
                <p className="text-white font-semibold text-sm sm:text-base">
                  This powerful starter pack includes:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-purple-100 font-medium">
                      Guided sleep hypnosis audio (calming anxiety)
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-purple-100 font-medium">
                      Guided sleep hypnosis audio (deep sleep)
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-purple-100 font-medium">
                      The Subconscious Shift e-booklet (title to be confirmed)
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                Created to help you slow racing thoughts, sleep deeply, and reset your 
                emotional baseline, this toolkit is your first step towards subconscious 
                alignment.
              </p>
              
              <p className="text-white text-base sm:text-lg font-semibold">
                Start shifting from survival mode to calm clarity today.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold mt-3 md:mt-4 w-full sm:w-auto"
              >
                Get the Free Toolkit Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
            
            {/* Right image */}
            <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876201548-ade1eff8b169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBlYWNlZnVsJTIwbWVkaXRhdGlvbiUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNDY1NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Woman with headphones enjoying meditation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}