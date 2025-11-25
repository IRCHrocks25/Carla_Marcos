import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function WhyItWorksSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900">
      {/* Starry/cosmic effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl hidden md:block"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 font-bold leading-tight">
            The Woman Behind the Breakthrough
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold">
            When Life Forced Me to Practice What I Preached
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-white max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Left column */}
          <div className="space-y-3 sm:space-y-4 text-white/90 leading-relaxed font-medium text-sm sm:text-base">
            <p>
              I thought I knew everything about the mind...
            </p>
            
            <p>
              Pharma lawyer. Qualified nurse. Award-winning clinical hypnotherapist. I'd been obsessed in psychology for as long as I could remember, since I was a little girl. I spoke several languages. I had gathered years of diverse professional and life experience, and carried all the credentials, the knowledge, and the toolkit anyone could wish for. By all appearances, I was the woman who had it all figured out.
            </p>
            
            <p>
              Then life happened. A new country. A new language. A toddler. A newborn. Buying, selling, and renovating homes. Rebuilding my career and social life in new environments, one town after another.
            </p>
          </div>
          
          {/* Right column */}
          <div className="space-y-3 sm:space-y-4 text-white/90 leading-relaxed font-medium text-sm sm:text-base">
            <p>
              Building a business. And trying to juggle it all by myself while my husband traveled for work...
            </p>
            
            <p>
              I was drowning in my own expertise.
            </p>
            
            <p>
              I knew there had to be another way. That's when I discovered the most humbling truth of my career: Knowing how the mind works intellectually is not the same as having aligned it emotionally.
            </p>
            
            <p>
              The moment I stopped fighting my subconscious and started partnering with it, everything shifted, <span className="text-pink-300 italic">not just my stress levels</span>, but my entire reality.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto font-semibold leading-relaxed px-4">
            So now, I've decided to dedicate my life to helping you transform the mind that creates your life, so that you can stop pushing against invisible walls and start flowing toward the life you truly want. Interested?
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}