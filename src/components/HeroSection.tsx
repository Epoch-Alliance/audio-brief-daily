
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import WaitlistDialog from "./ui/waitlist-dialog";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [openDialog, setOpenDialog] = useState(false);
  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-anf-dark to-anf-dark/95 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-64 bg-anf-blue/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-purple-500/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-anf-blue to-purple-500 bg-clip-text text-transparent 
                px-4 py-1 rounded-full text-sm font-medium border border-anf-blue/30 mb-6">
                Your Daily Audio Briefing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Stay on top of your game in just <span className="bg-gradient-to-r from-anf-blue to-purple-500 bg-clip-text text-transparent">5 minutes</span> a day
            </h1>
            <p className="text-xl text-white/70 max-w-[600px]">
              Your personalized, AI-generated audio briefing of newsletters, blogs, and paid content — 
              delivered fresh every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => setOpenDialog(true)}
                className="bg-gradient-to-r from-anf-blue to-blue-500 hover:opacity-90 text-white font-medium py-6 px-8 rounded-lg text-lg shadow-lg shadow-anf-blue/20 transition-all duration-300"
              >
                Join the Waiting List 🚀
              </Button>
              <Button 
                onClick={() => setOpenDialog(true)}
                variant="outline" 
                className="border-anf-blue/50 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 py-6 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Limited beta spots available. Get exclusive early access.
            </p>
          </div>
          <div className="relative hidden lg:block h-full animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-anf-blue/20 to-purple-500/10 rounded-3xl"></div>
            <div className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-10 h-full border border-white/20 shadow-lg shadow-anf-blue/10">
              <div className="space-y-6 w-full">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-anf-blue/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-2xl">🎧</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white">Daily Audio Briefing</h3>
                    <p className="text-sm text-white/70">Today - 5:21 min</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-anf-blue to-purple-500 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-transform hover:transform hover:scale-105">
                      <h4 className="text-xs font-medium text-white">Substack</h4>
                      <p className="text-xs text-white/70">2 articles</p>
                    </div>
                    <div className="col-span-1 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-transform hover:transform hover:scale-105">
                      <h4 className="text-xs font-medium text-white">Medium</h4>
                      <p className="text-xs text-white/70">3 articles</p>
                    </div>
                    <div className="col-span-1 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-transform hover:transform hover:scale-105">
                      <h4 className="text-xs font-medium text-white">Twitter</h4>
                      <p className="text-xs text-white/70">5 threads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaitlistDialog open={openDialog} setOpen={setOpenDialog} />
    </section>
  );
};

export default HeroSection;
