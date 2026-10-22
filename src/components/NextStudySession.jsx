import { FaArrowRight } from "react-icons/fa";

const NextStudySession = () => {
  return (
    <div id="get-started" className="max-w-4xl container mx-auto  bg-white px-[150px] py-[80px] text-center space-y-6">
      <h2 className="text-3xl font-bold">
        set your first goal in under two minutes. No credit card required.
      </h2>

      <p className="text-lg text-gray-600">
        Your study session could be the one that sticks
      </p>

      <button className="btn btn-primary text-white">Get started <FaArrowRight/></button>
    </div>
  );
};

export default NextStudySession;
