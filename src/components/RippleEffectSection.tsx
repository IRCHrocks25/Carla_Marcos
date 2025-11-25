import { ImageWithFallback } from './figma/ImageWithFallback';

export function RippleEffectSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Multiple wave paths */}
          <path d="M 50 100 Q 100 80 150 100 T 250 100 T 350 100" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 150 Q 100 130 150 150 T 250 150 T 350 150" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M 50 200 Q 100 180 150 200 T 250 200 T 350 200" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 250 Q 100 230 150 250 T 250 250 T 350 250" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 50 300 Q 100 280 150 300 T 250 300 T 350 300" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M 50 350 Q 100 330 150 350 T 250 350 T 350 350" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M 50 400 Q 100 380 150 400 T 250 400 T 350 400" stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580973946162-429ef3340c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNpbmdpbmclMjBtaWNyb3Bob25lJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYzNDU5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Woman performing with microphone"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 font-bold">
              My Unique Edge
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed">
              I bring a distinctive fusion of health, law and corporate expertise to subconscious transformation, helping my clients achieve their goals in both business and life by bridging high-performance with mental health and emotional well-being.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed">
              My approach is solution-focused, science-backed, and holistic, helping people rapidly overcome challenges like anxiety, depression, insomnia, phobias, OCD, chronic pain, and more.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed">
              I also specialize in peak performance, guiding entrepreneurs, professionals, and creatives to find clarity, make better decisions, and unleash their confidence and creativity, whether in the boardroom, on stage, or on the field.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-100 leading-relaxed">
              My integrative approach, which always considers the mind-body connection, also helps my clients reconnect with themselves, discover their purpose, and support their rejuvenation goals, promoting better longevity through a happier, healthier life.
            </p>

            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-bold">
                My mantra:
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic leading-relaxed font-bold">
                "You're not stuck, you're just wired that way. The good news is: your brain can be rewired."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}