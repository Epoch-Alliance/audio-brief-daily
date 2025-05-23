
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-anf-dark/95 to-anf-dark/90 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-anf-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-12 animate-fade-in">
            How It Works
          </h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-anf-blue to-purple-500/70 hidden md:block"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 animate-fade-in" style={{animationDelay: "100ms"}}>
                <div className="flex md:flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-anf-blue to-blue-600 text-white text-xl font-bold shadow-lg shadow-anf-blue/20">
                    1
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 text-white">Connect Your Sources</h3>
                  <p className="text-white/70 mb-4">
                    Link newsletters, blogs, Medium publications, Twitter accounts, Substack subscriptions, 
                    and more. Our system securely connects to your accounts or accepts RSS feeds.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 backdrop-blur-sm">Substack</div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 backdrop-blur-sm">Medium</div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 backdrop-blur-sm">Twitter</div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 backdrop-blur-sm">RSS</div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10 backdrop-blur-sm">Newsletters</div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 animate-fade-in" style={{animationDelay: "200ms"}}>
                <div className="flex md:flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-anf-blue to-blue-600 text-white text-xl font-bold shadow-lg shadow-anf-blue/20">
                    2
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 text-white">AI Summarizes & Synthesizes</h3>
                  <p className="text-white/70 mb-4">
                    Our advanced AI reads all your content overnight, identifies the most important 
                    insights, and creates a concise summary of key points tailored specifically to your interests.
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-anf-blue"><rect width="6" height="16" x="4" y="4" rx="2"/><rect width="6" height="9" x="14" y="11" rx="2"/><path d="M22 11V7c0-1.1-.9-2-2-2h-2"/></svg>
                      <span className="text-sm font-medium text-white">AI Processing</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-anf-blue to-purple-500 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-white/70 mt-2">Our AI identifies patterns and prioritizes what matters most to you</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 animate-fade-in" style={{animationDelay: "300ms"}}>
                <div className="flex md:flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-anf-blue to-blue-600 text-white text-xl font-bold shadow-lg shadow-anf-blue/20">
                    3
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 text-white">Listen on Any Podcast App</h3>
                  <p className="text-white/70 mb-4">
                    Every morning, your personalized audio briefing is delivered to your favorite podcast app.
                    Listen during your commute, workout, or morning routine — no additional apps needed.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center rounded-lg bg-white/10 p-2 border border-white/10 backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" fill="#D56DFB" />
                        <path d="M9 8.25L18 12L9 15.75V8.25Z" fill="white" />
                      </svg>
                      <span className="text-sm text-white">Apple Podcasts</span>
                    </div>
                    <div className="flex items-center rounded-lg bg-white/10 p-2 border border-white/10 backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" fill="#1DB954" />
                        <path d="M7 14V10L11.38 12L7 14Z" fill="white" />
                        <path d="M12.5 14V10L16.88 12L12.5 14Z" fill="white" />
                      </svg>
                      <span className="text-sm text-white">Spotify</span>
                    </div>
                    <div className="flex items-center rounded-lg bg-white/10 p-2 border border-white/10 backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" fill="#8E44AD" />
                        <path d="M10 16L15 12L10 8V16Z" fill="white" />
                      </svg>
                      <span className="text-sm text-white">Overcast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
