
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WaitlistDialog from "./ui/waitlist-dialog";

const WaitingListForm = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="bg-gradient-to-br from-anf-blue to-anf-blue/70 text-white py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Exclusive Early Access
          </h2>
          <p className="text-xl opacity-90 max-w-xl mx-auto">
            Join the waiting list to be among the first to try Audio News Funnel and receive special founder pricing.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-white text-anf-blue hover:bg-white/90 font-medium py-6 px-8 rounded-lg text-lg w-full md:w-auto"
            >
              Join the Waiting List 🚀
            </Button>
            <p className="text-sm opacity-80">
              Limited beta spots available. We'll never spam you.
            </p>
          </div>
          
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-sm opacity-80">Access</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">5 min</h3>
              <p className="text-sm opacity-80">Daily briefing</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm opacity-80">Source integrations</p>
            </div>
            <div>
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
