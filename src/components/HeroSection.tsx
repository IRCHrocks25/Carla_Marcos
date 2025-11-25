import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      {/* Wavy decorative lines on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30 hidden md:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 400 800">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {/* Multiple wavy lines */}
          <path
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100 L400,150 Q350,100 300,150 T200,150 T100,150 T0,150 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            opacity="0.6"
          />
          <path
            d="M0,200 Q50,150 100,200 T200,200 T300,200 T400,200 L400,250 Q350,200 300,250 T200,250 T100,250 T0,250 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            opacity="0.5"
          />
          <path
            d="M0,300 Q50,250 100,300 T200,300 T300,300 T400,300 L400,350 Q350,300 300,350 T200,350 T100,350 T0,350 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="5"
            opacity="0.4"
          />
          <path
            d="M0,400 Q50,350 100,400 T200,400 T300,400 T400,400 L400,450 Q350,400 300,450 T200,450 T100,450 T0,450 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            opacity="0.5"
          />
          <path
            d="M0,500 Q50,450 100,500 T200,500 T300,500 T400,500 L400,550 Q350,500 300,550 T200,550 T100,550 T0,550 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            opacity="0.6"
          />
          <path
            d="M0,600 Q50,550 100,600 T200,600 T300,600 T400,600 L400,650 Q350,600 300,650 T200,650 T100,650 T0,650 Z"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            opacity="0.4"
          />
        </svg>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              STOP PUSHING.<br />
              START FLOWING.
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
              Transform the Mind That Creates Your Life,<br className="hidden sm:block" />
              And Find Your Unique Balance
            </h2>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              You're smart. You're capable. You've achieved what others dream of, yet 
              something still feels off. The books, courses, and willpower have only 
              taken you so far... because the real change happens deeper.
            </p>
            
            <p className="text-purple-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              I combine the drive and precision of a pharma lawyer, the holistic care of 
              a nurse, and the deep transformation tools of a multi-award-winning 
              clinical hypnotherapist to help you rewire the subconscious patterns 
              holding you back, intentionally reshaping your brain's neural pathways 
              while developing new, empowering thought patterns, behaviours, and 
              responses in alignment with your conscious goals.
            </p>
            
            <div className="pt-2 sm:pt-3 md:pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative order-1 md:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&h=800&fit=crop"
              alt="Carla Marcos - Professional Hypnotherapist"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}