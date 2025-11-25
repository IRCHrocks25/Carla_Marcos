import { ImageWithFallback } from './figma/ImageWithFallback';

export function PersonBecomingSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Main heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 md:mb-4 font-bold">
            The person you're becoming
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-purple-600 font-bold">
            My Story Is Your Story (Just a Few Chapters Ahead)
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Left image with purple wavy background */}
          <button
            onClick={() => console.log('Clicked: Person becoming image')}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer mx-auto max-w-md lg:max-w-none w-full"
          >
            {/* Purple wavy background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-fuchsia-600">
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" preserveAspectRatio="none">
                <defs>
                  <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q25 30, 50 50 T100 50" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="3" fill="none"/>
                    <path d="M0 60 Q25 40, 50 60 T100 60" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="3" fill="none"/>
                    <path d="M0 70 Q25 50, 50 70 T100 70" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="3" fill="none"/>
                  </pattern>
                </defs>
                <rect width="500" height="700" fill="url(#waves)"/>
              </svg>
            </div>
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNvbmZpZGVudCUyMHNtaWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDYzNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="The person you're becoming"
              className="relative z-10 w-full h-full object-cover"
            />
          </button>
          
          {/* Right content */}
          <div className="flex flex-col justify-start space-y-4 md:space-y-5 text-gray-700 text-sm md:text-base">
            <p className="leading-relaxed">
              I used to be the woman who had all the answers for everyone else and who thought she had everything worked out.
            </p>
            
            <p className="leading-relaxed">
              Born into a family of mental health professionals in Barcelona, psychology, and especially the workings of the subconscious, became my native language. I understood early on that the subconscious is the language you must speak to truly connect with the deeper parts of the mind. It was the very air I breathed. I first qualified as a nurse, then became a pharma lawyer, and, driven by a lifelong fascination with human potential, neuroscience, and modern psychotherapeutic approaches, I eventually became a clinical hypnotherapist.
            </p>
            
            <p className="leading-relaxed">
              But knowing about the mind and mastering it are two completely different things.
            </p>
            
            <p className="leading-relaxed">
              When I relocated to the UK with a newborn and a toddler, I had to buy, sell, and renovate homes, rebuild my career and social life in a new language and in one town after another, all while building a business and managing it all on my own as my husband travelled for work. That's when I discovered that even experts aren't always experts at their own patterns of overwhelm, and that they can have blind spots.
            </p>
            
            <p className="leading-relaxed font-bold text-base md:text-lg">
              That breakdown became my breakthrough.
            </p>
            
            <p className="leading-relaxed">
              The moment I stopped trying to think my way out of exhaustion and started rewiring the subconscious patterns that created it, my entire reality shifted. And the change lasted.
            </p>
            
            <p className="leading-relaxed">
              That's when I knew: The men and women who need this work most are the ones who, like me, have spent their lives being the solution for everyone else.
            </p>
            
            <p className="text-purple-600 font-bold text-lg md:text-xl leading-relaxed">
              You don't need more information.<br />
              You need transformation.
            </p>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="text-center space-y-6 md:space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-purple-600 font-bold">
            Step Into the Person You're Becoming
          </h3>
          
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            You've carried everyone else. Now it's your turn to feel supported, restored, and unstoppable.
          </p>
          
          <button
            onClick={() => console.log('Clicked: Start transformation CTA')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Start your transformation today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="text-purple-600 font-bold text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Because the person you're becoming deserves to live in alignment, with clarity, calm, and unique balance.
          </p>
        </div>
      </div>
    </section>
  );
}