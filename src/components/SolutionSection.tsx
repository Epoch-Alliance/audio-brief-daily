
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WaitlistDialog from "./ui/waitlist-dialog";

const SolutionSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  
  return (
    <section className="bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-anf-dark">
            Reclaim Your Time with Audio Briefings
          </h2>
          <p className="mt-4 text-xl text-anf-gray">
            Transform your content consumption into an efficient, hands-free experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-xl p-6 border border-gray-100 bg-white">
            <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-anf-blue text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-anf-dark">5-Minute Daily Briefings</h3>
            <p className="text-anf-gray mb-4">
              Condense hours of reading into a 5-minute audio summary you can consume during commutes, workouts, or morning routines.
            </p>
            <ul className="space-y-2 text-sm text-anf-gray">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Save 3+ hours weekly
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Professional narration
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl p-6 border border-gray-100 bg-white">
            <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-anf-blue text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-anf-dark">Fully Personalized</h3>
            <p className="text-anf-gray mb-4">
              Connect your favorite sources: Substack, Medium, blogs, Twitter threads, and even premium subscriptions.
            </p>
            <ul className="space-y-2 text-sm text-anf-gray">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Link unlimited sources
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                AI curates relevant content
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl p-6 border border-gray-100 bg-white">
            <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-anf-blue text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-anf-dark">Hands-Free Listening</h3>
            <p className="text-anf-gray mb-4">
              Reclaim fragmented time and turn "dead time" into productive learning moments throughout your day.
            </p>
            <ul className="space-y-2 text-sm text-anf-gray">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Works with any podcast app
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-anf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Download for offline use
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-anf-dark mb-6 max-w-2xl mx-auto">
            <span className="font-bold">Feel on top of your game</span>, even when you're too busy to read.
          </p>
          <Button 
            onClick={() => setOpenDialog(true)}
            className="bg-anf-blue hover:bg-anf-blue/90 text-white font-medium py-6 px-8 rounded-lg text-lg"
          >
            Join the Waiting List 🚀
          </Button>
        </div>
      </div>
      <WaitlistDialog open={openDialog} setOpen={setOpenDialog} />
    </section>
  );
};

export default SolutionSection;
