
import React from "react";

const ProblemSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-anf-dark">
            Information Overload is Real
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-anf-blue/10 text-anf-blue mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-inbox"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-anf-dark">Unread Content Piling Up</h3>
              <p className="text-anf-gray">
                Dozens of newsletters, blogs, and articles remain unread in your inbox every week.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-anf-blue/10 text-anf-blue mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-anf-dark">No Time to Read</h3>
              <p className="text-anf-gray">
                Your schedule is packed and finding time to sit down and read is nearly impossible.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-anf-blue/10 text-anf-blue mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-anf-dark">Missing Key Insights</h3>
              <p className="text-anf-gray">
                You're experiencing FOMO on valuable information that could benefit your career and decisions.
              </p>
            </div>
          </div>
          
          <p className="text-xl text-anf-dark mt-10 max-w-2xl mx-auto">
            The cognitive burden is real—and it's costing you valuable insights, productivity, and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
