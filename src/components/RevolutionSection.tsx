import { Binoculars, Lightbulb, UserCheck } from 'lucide-react';

export function RevolutionSection() {
  const cards = [
    {
      icon: 'usercheck',
      title: "My Mission:",
      description: "To help brilliant, exhausted men and women align their conscious and subconscious minds so they can find their unique balance and lead their lives with the same mastery they bring to everything else."
    },
    {
      icon: 'binoculars',
      title: "My Vision:",
      description: "A world led by people like you who have done the inner work. Leaders who act from wholeness instead of woundedness, who create from overflow instead of depletion, and who change the world for the better by first transforming themselves."
    },
    {
      icon: 'lightbulb',
      title: "My Core Belief:",
      description: "The mind is not your enemy, it's your greatest ally, once you learn its language. You're not stuck, you're just running old programming. And any program can be rewritten."
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1763311680980-816106593998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHB1cnBsZSUyMHdhdmVzJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzYzNDYzNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
      />
      
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/40 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-3 lg:mb-4 font-bold leading-tight px-2">
            Leading a Revolution from the inside out
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 font-bold">
            Mission & Vision
          </p>
        </div>
        
        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {cards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => console.log(`Clicked: ${card.title}`)}
              className="bg-purple-800/30 backdrop-blur-sm border-2 border-purple-400/40 rounded-2xl p-5 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 md:space-y-5 hover:bg-purple-700/40 hover:border-purple-300/60 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-5 md:p-6 border border-purple-300/40 group-hover:bg-white/30 transition-all duration-300">
                  {card.icon === 'binoculars' ? (
                    <Binoculars className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  ) : card.icon === 'lightbulb' ? (
                    <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  ) : (
                    <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  )}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                {card.description}
              </p>
            </button>
          ))}
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
            The revolution starts within. But it doesn't end there, because personal transformation is the gift that keeps on giving.
          </p>
        </div>
      </div>
    </section>
  );
}