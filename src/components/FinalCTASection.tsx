import { Button } from './ui/button';
import { Mail, Instagram, Facebook, Linkedin, Phone, MapPin, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main CTA area */}
      <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Soft wave pattern background */}
        <div className="absolute inset-0 opacity-30 hidden md:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wavePattern" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#f3e8ff" />
              </linearGradient>
            </defs>
            <path
              d="M0,150 Q400,50 800,150 T1600,150 L1600,0 L0,0 Z"
              fill="url(#wavePattern)"
              opacity="0.5"
            />
            <path
              d="M0,250 Q500,150 1000,250 T2000,250 L2000,0 L0,0 Z"
              fill="url(#wavePattern)"
              opacity="0.3"
            />
          </svg>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-6 sm:space-y-7 md:space-y-8">
            {/* Main headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
              Ready for the Change That Lasts?
            </h2>
            
            {/* Purple subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-purple-700 font-semibold px-4">
              You've done all the hard things. You've survived the pressure. You've carried the weight.
            </p>
            
            {/* Body text */}
            <div className="space-y-2 text-gray-900 text-base sm:text-lg max-w-3xl mx-auto font-semibold px-4">
              <p>Now it's time to lead from alignment, not exhaustion.</p>
              <p>Whether you're ready to start small or go deep, there's a path for you.</p>
            </div>
            
            {/* Main CTA button */}
            <div className="pt-3 sm:pt-4 px-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 font-bold w-full sm:w-auto">
                Take the 5-Minute Self-Check
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
            
            {/* Choose your next step */}
            <div className="pt-10 sm:pt-12">
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-5 sm:mb-6 font-bold px-4">
                Choose your next step:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto font-bold flex items-center justify-center text-sm sm:text-base"
                >
                  Start with the Free Toolkit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto font-bold flex items-center justify-center text-sm sm:text-base"
                >
                  The Self-Liberation Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-5 sm:py-6 h-auto whitespace-normal font-bold flex items-center justify-center text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                >
                  Book Your Initial Consultation | 1:1 Session
                  <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                </Button>
              </div>
              
              <p className="text-gray-800 text-xs sm:text-sm mt-5 sm:mt-6 max-w-3xl mx-auto font-medium px-4">
                Alternatively, you'll soon have the option to join one of our group programs, so you can grow, heal, and thrive 
                alongside a supportive community.
              </p>
            </div>
            
            {/* Purple highlighted message */}
            <div className="pt-6 sm:pt-8 px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-purple-700 italic max-w-3xl mx-auto font-semibold">
                Your next chapter doesn't require more pushing. Just a new partnership with your mind.
              </p>
            </div>
            
            {/* Disclaimer */}
            <div className="pt-6 sm:pt-8 px-4">
              <p className="text-xs text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Disclaimer: Hypnotherapy is effective; however, results may vary, and success is not guaranteed. Full client commitment is important.
              </p>
            </div>
            
            {/* Professional Association Logos */}
            <div className="pt-16 pb-8 overflow-hidden">
              <div className="relative">
                <div className="flex animate-marquee gap-8">
                  {/* First set */}
                  <div className="flex gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-800 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">AfSFH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Association for Solution Focused Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">NCH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">National Council for Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="border-2 border-slate-700 px-6 py-4 rounded-lg shadow-md bg-white">
                        <div className="text-slate-800 text-2xl font-bold tracking-tight">DBS</div>
                        <div className="text-slate-600 text-xs font-semibold">CHECKED</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-600 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-xl font-bold tracking-tight">NCH</div>
                        <div className="text-[9px]">PROFESSIONAL STANDARDS</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Accredited Register</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">ICAB</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">International Compliance Assurance</p>
                    </div>
                  </div>
                  
                  {/* Second set (duplicate) */}
                  <div className="flex gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-800 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">AfSFH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Association for Solution Focused Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">NCH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">National Council for Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="border-2 border-slate-700 px-6 py-4 rounded-lg shadow-md bg-white">
                        <div className="text-slate-800 text-2xl font-bold tracking-tight">DBS</div>
                        <div className="text-slate-600 text-xs font-semibold">CHECKED</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-600 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-xl font-bold tracking-tight">NCH</div>
                        <div className="text-[9px]">PROFESSIONAL STANDARDS</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Accredited Register</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">ICAB</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">International Compliance Assurance</p>
                    </div>
                  </div>
                  
                  {/* Third set (duplicate) */}
                  <div className="flex gap-8 flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-800 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">AfSFH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Association for Solution Focused Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">NCH</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">National Council for Hypnotherapy</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="border-2 border-slate-700 px-6 py-4 rounded-lg shadow-md bg-white">
                        <div className="text-slate-800 text-2xl font-bold tracking-tight">DBS</div>
                        <div className="text-slate-600 text-xs font-semibold">CHECKED</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-600 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-xl font-bold tracking-tight">NCH</div>
                        <div className="text-[9px]">PROFESSIONAL STANDARDS</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">Accredited Register</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="bg-slate-700 text-white px-6 py-4 rounded-lg shadow-md">
                        <div className="text-2xl font-bold tracking-tight">ICAB</div>
                      </div>
                      <p className="text-[9px] text-gray-600 text-center max-w-[100px] font-medium">International Compliance Assurance</p>
                    </div>
                  </div>
                </div>
              </div>
              <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-33.333%);
                  }
                }
                .animate-marquee {
                  animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8 sm:py-10 md:py-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-6 sm:mb-8 items-start">
            {/* Brand Column */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                {/* Logo with colorful circles */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <div className="absolute top-0 left-3 sm:left-4 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  <div className="absolute top-5 sm:top-6 left-6 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full"></div>
                  <div className="absolute bottom-1.5 sm:bottom-2 left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></div>
                  <div className="absolute bottom-0 left-4 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 border-2 border-gray-400 rounded-full"></div>
                </div>
                <div>
                  <div className="text-gray-800 tracking-wider text-xs sm:text-sm font-semibold">CARLA MARCOS •</div>
                  <div className="text-gray-700 text-[10px] sm:text-xs tracking-wide font-medium">HYPNOTHERAPY</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs italic font-medium">Finding your unique balance</p>
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
                Guiding Women and Men to Find Their Unique Balance Worldwide<br />
                Global Solution Focused Hypnotherapy | English & Spanish
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 font-bold">QUICK LINKS</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-800 text-xs sm:text-sm font-medium">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h3 className="text-gray-900 tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 font-bold">SOCIAL</h3>
              <p className="text-gray-800 text-xs sm:text-sm mb-3 sm:mb-4 font-medium break-all">carlamarcoshypnotherapy@gmail.com</p>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-5 sm:pt-6 border-t border-gray-300">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-gray-700 text-[10px] sm:text-xs font-medium text-center sm:text-left">
              <div>
                © 2025 Carla Marcos • All rights reserved...
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-purple-600 transition-colors">Sitemap</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-purple-600 transition-colors">Disclaimer</a>
              </div>
              <div className="hidden md:block">
                Designed and Developed by Katalyst CRM
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}