
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import WaitlistDialog from "./ui/waitlist-dialog";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [openDialog, setOpenDialog] = useState(false);
  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-anf-dark">
              Stay on top of your game in just <span className="text-anf-blue">5 minutes</span> a day
            </h1>
            <p className="text-xl text-anf-gray max-w-[600px]">
              Your personalized, AI-generated audio briefing of newsletters, blogs, and paid content — 
              delivered fresh every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => setOpenDialog(true)}
                className="bg-anf-blue hover:bg-anf-blue/90 text-white font-medium py-6 px-8 rounded-lg text-lg"
              >
                Join the Waiting List 🚀
              </Button>
              <Button 
                onClick={() => setOpenDialog(true)}
                variant="outline" 
                className="border-anf-blue text-anf-blue hover:bg-anf-blue/5 py-6 px-8 rounded-lg text-lg"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-anf-gray">
              Limited beta spots available. Get exclusive early access.
            </p>
          </div>
          <div className="relative hidden lg:block h-full animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-anf-blue/30 to-anf-blue/5 rounded-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-10 h-full flex items-center">
              <div className="space-y-6 w-full">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-anf-blue/20 flex items-center justify-center">
                    <span className="text-anf-blue text-2xl">🎧</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-anf-dark">Daily Audio Briefing</h3>
                    <p className="text-sm text-anf-gray">Today - 5:21 min</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-anf-blue rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-medium text-anf-dark">Substack</h4>
                      <p className="text-xs text-anf-gray">2 articles</p>
                    </div>
                    <div className="col-span-1 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-medium text-anf-dark">Medium</h4>
                      <p className="text-xs text-anf-gray">3 articles</p>
                    </div>
                    <div className="col-span-1 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-medium text-anf-dark">Twitter</h4>
                      <p className="text-xs text-anf-gray">5 threads</p>
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
