import { BiStar } from "react-icons/bi";

const AiDayPlanning = () => {
  return (
    <div id="ai-planning" className="container mx-auto bg-[#edf3ee] text-[#26372f] py-[70px] px-8 rounded-2xl space-y-4 grid grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h3 className="text-[#758d53] font-semibold text-sm uppercase tracking-[0.12em] flex items-center gap-2">
            <BiStar /> Ai day planning</h3>
        <h2 className="font-bold text-3xl leading-tight text-[#26372f]">
          not sure where to start? let studyFlow suggest a plan
        </h2>
        <p className="text-base leading-relaxed text-[#617067]">
          one click on "plan my day" turns your open tasks into a simple ,
          realistic schedule - so the hardest part , starting , is already done
          for you
        </p>
      </div>

      <div className="space-y-4">

           <div className="bg-[#fbfcfa] p-6 rounded-xl shadow-sm border border-[#dce5dd] text-center space-y-3">
          <h2 className="text-lg font-semibold text-[#26372f]"> Today's suggested plan</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-[#617067]">
            <li> 9.00 - 9.45 deep work on your hardest task</li>
            <li> 10.00 - 10.45 next task , same objective</li>
            <li> 11.00 - 11.45 quick review of the day's progress</li>

          </ul>
          </div>
      </div>


    </div>
  );
};

export default AiDayPlanning;
