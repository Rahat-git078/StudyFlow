const Banner = () => {
    return (
        <section id="top" className="container mx-auto space-y-12 px-4 py-12 text-center md:py-16">
            <span className="badge">Built for students who like to see progress</span>
             <h1 className="mx-auto max-w-[700px] text-4xl font-semibold md:text-5xl">
             Turn big goals into daily tasks you&apos;ll actually finish </h1>
        <p className="max-w-[700px] mx-auto ">
          Set a goal, break it into tasks, and watch your progress bar move every time you check one off. No spreadsheet and no guessing what to study next.

        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <button className="cursor-pointer rounded-md bg-[#0e7c66] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0a5d4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7c66]">Get Started</button>
          <button className="cursor-pointer rounded-md bg-[#0e7c66] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0a5d4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7c66]">See How It Works</button>
        </div>

        <div className="card mx-auto w-full max-w-[550px] space-y-4 bg-base-100 p-6 text-left text-black shadow-sm">
            <div className="flex justify-between items-center gap-4">
             <h2 className="font-bold text-2xl">Today's Progress</h2>
              <p>50% complete</p>             

            </div>

          <progress className="progress text-primary h-4" value="50" max="100" aria-label="Today's progress: 50 percent"></progress>
            
       <ul className="space-y-5">
           <li className="flex  items-center gap-4 border border-[#0e7c66] rounded-md p-2" >
                solve 5 questions from math
           </li>

            <li className="flex items-center gap-4 border border-[#0e7c66] rounded-md p-2" >
                read 20 pages of history
           </li>
            <li className="flex  items-center gap-4 border border-[#0e7c66] rounded-md p-2" >
                write a journal entry
           </li>


        </ul>   

      
  </div>
  </section>
    );
};

  export default Banner;