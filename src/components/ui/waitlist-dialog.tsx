
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const WaitlistDialog = ({ open, setOpen }: WaitlistDialogProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waiting list.",
        duration: 5000,
      });
      
      // Reset after a while
      setTimeout(() => {
        setOpen(false);
        setHasSubmitted(false);
        setEmail("");
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join the Audio News Funnel Waiting List</DialogTitle>
          <DialogDescription className="text-center">
            Get exclusive early access and special founder pricing when we launch.
          </DialogDescription>
        </DialogHeader>
        {hasSubmitted ? (
          <div className="flex flex-col items-center py-6 space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="text-xl font-medium text-center">You're on the list!</h3>
            <p className="text-center text-anf-gray">
              We'll be in touch soon with more details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-anf-blue hover:bg-anf-blue/90 text-white font-medium py-6" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                "Join the Waiting List 🚀"
              )}
            </Button>
            <p className="text-xs text-center text-anf-gray">
              By joining, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
              <br />
              We'll never spam you or sell your information.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
