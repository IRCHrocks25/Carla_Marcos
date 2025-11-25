import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExhaustionSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* As Seen On Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="text-gray-400 tracking-[0.3em] text-xs mb-6 sm:mb-8 font-semibold">
            AS SEEN ON
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-60 grayscale">
            {/* Telemundo */}
            <div className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
              <span className="text-xl sm:text-2xl md:text-3xl">T</span>elemundo
            </div>
            {/* CW */}
            <div className="text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
              CW
            </div>
            {/* FOX */}
            <div className="text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
              FOX
            </div>
            {/* ABC */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">abc</span>
              </div>
            </div>
            {/* NBC */}
            <div className="flex flex-col items-center">
              <div className="flex gap-0.5 mb-1">
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-purple-600"></div>
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-orange-500"></div>
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-red-500"></div>
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-yellow-400"></div>
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-green-500"></div>
                <div className="w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 bg-blue-500"></div>
              </div>
              <div className="text-gray-700 font-bold text-base sm:text-lg md:text-xl tracking-wider">NBC</div>
            </div>
            {/* CBS */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 sm:border-4 border-gray-700 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-gray-700">
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl ml-2">CBS</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center mt-12 sm:mt-16 md:mt-20">
          {/* Left - Cosmic Brain Image */}
          <div className="relative flex justify-center order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1710676145647-e9f9d9e40d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBicmFpbiUyMHVuaXZlcnNlJTIwc3RhcnN8ZW58MXx8fHwxNzYzNDU1MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cosmic brain representing subconscious alignment"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Right content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 leading-tight font-bold">
              When your conscious and subconscious finally align, success stops feeling like a battle and starts feeling inevitable
            </h2>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              You might feel stuck right now, like you're caught in patterns you just can't escape. And no matter what you do, you circle back to that same old, familiar, unwanted mode. But here's the good news: your brain can be rewired.
            </p>
          </div>
        </div>

        {/* Bottom purple text */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-600 leading-relaxed font-semibold max-w-4xl mx-auto px-4">
            Your mind already holds the blueprint for your best life. Let's bring it into focus and allow it to transform into the reality you live and breathe.
          </p>
        </div>
      </div>
    </section>
  );
}