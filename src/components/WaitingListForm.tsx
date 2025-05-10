
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WaitlistDialog from "./ui/waitlist-dialog";

const WaitingListForm = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-anf-blue/90 to-purple-700/90 z-0"></div>
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get Exclusive Early Access
            </h2>
            <p className="text-xl text-white/90 max-w-xl mx-auto">
              Join the waiting list to be among the first to try Audio News Funnel and receive special founder pricing.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{animationDelay: "200ms"}}>
            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-white text-anf-dark hover:bg-white/90 font-medium py-6 px-8 rounded-lg text-lg w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join the Waiting List 🚀
            </Button>
            <p className="text-sm text-white/80">
              Limited beta spots available. We'll never spam you.
            </p>
          </div>
          
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in" style={{animationDelay: "400ms"}}>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-sm opacity-80">Access</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
              <h3 className="text-3xl font-bold">5 min</h3>
              <p className="text-sm opacity-80">Daily briefing</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm opacity-80">Source integrations</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 transition-transform hover:transform hover:scale-105">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm opacity-80">Personalized</p>
            </div>
          </div>
        </div>
      </div>
      <WaitlistDialog open={openDialog} setOpen={setOpenDialog} />
    </section>
  );
};

export default WaitingListForm;
