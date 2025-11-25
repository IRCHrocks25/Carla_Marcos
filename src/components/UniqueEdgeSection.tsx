import { Button } from './ui/button';
import { Star, ArrowUpRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay@8.6.0';
import { useState, useEffect } from 'react';

export function UniqueEdgeSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials = [
    {
      title: "Anxiety Relief",
      text: "The way Carla works is a revelation. She's helped me change the painful patterns that created deep anxieties and unhappiness. I now feel confident, relaxed, and able to enjoy being myself.",
      author: "Lucy, UK",
      rating: 5.0
    },
    {
      title: "Stress & Burnout",
      text: "As a hospital medic during COVID, Carla's sessions have been invaluable. My anxiety is lower, I'm sleeping better, and I feel more positive. She explains everything so clearly and gets results.",
      author: "Kelly, UK",
      rating: 5.0
    },
    {
      title: "Confidence Breakthrough",
      text: "I was sceptical at first, but my confidence has grown so much I now lecture weekly to large groups. Carla's work has completely changed how I show up in the world.",
      author: "Paul, UK",
      rating: 5.0
    },
    {
      title: "Life Transformation",
      text: "Working with Carla has been transformative. I've overcome limiting beliefs that held me back for years. Now I feel empowered and ready to achieve my goals.",
      author: "Sarah, USA",
      rating: 5.0
    },
    {
      title: "Career Success",
      text: "The changes I've experienced are incredible. My performance anxiety is gone, and I've been promoted twice since working with Carla. Her methods truly work.",
      author: "James, Canada",
      rating: 5.0
    },
    {
      title: "Inner Peace",
      text: "After years of struggling with self-doubt, I finally found peace within myself. Carla's guidance has been life-changing. I'm forever grateful.",
      author: "Maria, Spain",
      rating: 5.0
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3 sm:mb-4 font-bold">
            Loved by Clients Around the World
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            From Anxiety and Overwhelm to Confidence, Clarity & Calm
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm border border-gray-100 relative h-full">
                    <h3 className="text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4 font-bold">
                      {testimonial.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-gray-900 font-semibold text-sm sm:text-base">{testimonial.author}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-gray-900 font-semibold text-sm sm:text-base">{testimonial.rating}</span>
                        </div>
                      </div>
                      
                      <div className="text-5xl sm:text-6xl text-blue-900 leading-none">"</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mb-10 sm:mb-12">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-purple-400 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-5 sm:mb-6 font-bold">
            Your Breakthrough Starts Here
          </h3>
          
          <p className="text-gray-700 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            These women and men were once where you are now stressed, stuck, and searching for answers. In just weeks, they rewired their minds, reclaimed their energy, and reshaped their lives.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
            >
              Read 30+ Full Client Stories
              <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold w-full sm:w-auto"
            >
              Book your Initial Consultation today
              <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent italic font-semibold">
            The sooner you start, the sooner you shift.
          </p>
        </div>
      </div>
    </section>
  );
}