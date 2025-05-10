
import React from "react";

const EarlyAdopterSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-anf-dark/90 to-anf-dark/95 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-anf-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6 animate-fade-in">
            Ideal for Busy Founders
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "100ms"}}>
            Join other time-conscious professionals who have transformed their content consumption routine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial placeholder 1 */}
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 text-left border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: "200ms"}}>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-anf-blue/40 to-purple-500/40 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Alex J.</h4>
                  <p className="text-sm text-white/70">Startup Founder</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Audio News Funnel has transformed my morning routine. I'm now up-to-date on industry trends while getting ready for the day."
              </p>
            </div>
            
            {/* Testimonial placeholder 2 */}
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 text-left border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: "300ms"}}>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-anf-blue/40 to-purple-500/40 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Sarah M.</h4>
                  <p className="text-sm text-white/70">Product Manager</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "I've gone from feeling constantly behind on my reading list to starting each day feeling informed and prepared."
              </p>
            </div>
          </div>
          
          {/* Logo strip placeholder */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in" style={{animationDelay: "400ms"}}>
            <p className="text-sm text-white/50 mb-6">EARLY ADOPTERS FROM</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40">
              <div className="h-8 w-24 bg-white/20 backdrop-blur-sm rounded"></div>
              <div className="h-8 w-24 bg-white/20 backdrop-blur-sm rounded"></div>
              <div className="h-8 w-24 bg-white/20 backdrop-blur-sm rounded"></div>
              <div className="h-8 w-24 bg-white/20 backdrop-blur-sm rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterSection;
