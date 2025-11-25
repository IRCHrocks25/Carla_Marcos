import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhatHappensSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] relative">
        {/* Left content - Purple gradient with wave pattern */}
        <div className="relative bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-700 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden">
          {/* Decorative wave pattern on LEFT edge */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {Array.from({ length: 20 }).map((_, i) => (
                <path
                  key={i}
                  d={`M 10 ${i * 45} Q 30 ${i * 45 + 15} 50 ${i * 45} T 90 ${i * 45}`}
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity={0.4 + (i % 2) * 0.2}
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 space-y-4 md:space-y-5 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-2 font-bold leading-tight">
              What Happens When You Find Your Unique Balance
            </h2>
            
            <h3 className="text-lg md:text-xl text-white mb-4 md:mb-6 font-bold">
              The Life That's Waiting on the Other Side
            </h3>
            
            <div className="space-y-3 md:space-y-4 text-white text-sm md:text-base">
              <p className="leading-relaxed">
                <strong>Sleep Like You Haven't For A Very Long Time.</strong> Deep, restorative sleep that actually refreshes you. Some clients experience this improvement after just one session.
              </p>
              
              <p className="leading-relaxed">
                <strong>Make Decisions with Unshakeable Clarity.</strong> No more second-guessing. No more analysis paralysis. You'll trust your instincts because your instincts will finally be trustworthy.
              </p>
              
              <p className="leading-relaxed">
                <strong>End the "I Know But I Don't Do" Cycle.</strong> Your actions will finally align with your values. The gap between who you are and who you want to be closes. Reclaim Your Creative Fire. That spark you buried under responsibilities and shoulds, It's still there, and it's ready to burn bright again.
              </p>
              
              <p className="leading-relaxed">
                <strong>Become the Leader You Were Born to Be.</strong> Not just in your career, but in your own life. When you master your inner world, your outer world transforms automatically.
              </p>
              
              <p className="leading-relaxed italic">
                "When you master your mind and find your unique balance, you don't just transform your own life, you become an inspiration for your family, friends, teams, and the wider community."
              </p>
            </div>
            
            <h3 className="text-2xl md:text-3xl text-white pt-3 md:pt-4 font-bold leading-tight">
              This isn't just healing. This is leadership from the inside out.
            </h3>
          </div>

          {/* Smooth gradient fade on right edge - desktop only */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-indigo-700/40 to-indigo-700/80 pointer-events-none z-20"></div>
        </div>
        
        {/* Right image - Clickable */}
        <button 
          onClick={() => console.log('Clicked: What Happens section image')}
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[700px] cursor-pointer"
        >
          {/* Gradient overlay on left edge of image - desktop only */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-indigo-700/60 via-indigo-600/30 to-transparent pointer-events-none z-10"></div>
          
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650798605746-6a5ebb3bdbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhcmJvciUyMG1hcmluYSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2MzQ2MjgzNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Woman by the harbor finding peace"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </section>
  );
}