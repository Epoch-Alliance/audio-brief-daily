
import React from "react";

const EarlyAdopterSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-anf-dark mb-6">
            Ideal for Busy Founders
          </h2>
          <p className="text-xl text-anf-gray mb-12 max-w-2xl mx-auto">
            Join other time-conscious professionals who have transformed their content consumption routine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial placeholder 1 */}
            <div className="bg-gray-50 rounded-xl p-6 text-left border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-anf-blue/20 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-anf-dark">Alex J.</h4>
                  <p className="text-sm text-anf-gray">Startup Founder</p>
                </div>
              </div>
              <p className="text-anf-gray italic">
                "Audio News Funnel has transformed my morning routine. I'm now up-to-date on industry trends while getting ready for the day."
              </p>
            </div>
            
            {/* Testimonial placeholder 2 */}
            <div className="bg-gray-50 rounded-xl p-6 text-left border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-anf-blue/20 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-bold text-anf-dark">Sarah M.</h4>
                  <p className="text-sm text-anf-gray">Product Manager</p>
                </div>
              </div>
              <p className="text-anf-gray italic">
                "I've gone from feeling constantly behind on my reading list to starting each day feeling informed and prepared."
              </p>
            </div>
          </div>
          
          {/* Logo strip placeholder */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-sm text-anf-gray mb-6">EARLY ADOPTERS FROM</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterSection;
