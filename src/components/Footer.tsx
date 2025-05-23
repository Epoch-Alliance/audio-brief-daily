
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-anf-dark/95 to-anf-dark/98 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-anf-blue to-blue-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
                </svg>
              </div>
              <span className="font-bold text-white">Audio News Funnel</span>
            </div>
            <p className="text-white/60 text-sm mt-2">
              Stay on top of your game in just 5 minutes a day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left animate-fade-in" style={{animationDelay: "100ms"}}>
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">About</Button></li>
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">Blog</Button></li>
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">Careers</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">Privacy</Button></li>
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">Terms</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">Contact</Button></li>
                <li><Button variant="link" className="text-white/60 hover:text-white p-0 h-auto">FAQ</Button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{animationDelay: "200ms"}}>
          <p className="text-sm text-white/50">
            © {currentYear} Audio News Funnel. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
