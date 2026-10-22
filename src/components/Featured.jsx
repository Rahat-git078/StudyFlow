


import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { FiTrendingUp } from "@react-icons/all-files/fi/FiTrendingUp";
import InfoCard from "./shared/cards.jsx";
import SectionHeader from "./shared/SectionHeader.jsx";

const Featured = () => {
  return (
    <section id="features" className="px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          title="Everything a study session needs"
          subtitle="A simple system to turn your plans into steady, visible progress."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard
            icon={<FiCheckCircle className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="01 / FOCUS"
            title="Clear daily goals"
            description="Know what matters today and turn a big ambition into a study plan you can actually start."
          />
          <InfoCard
            icon={<FiLayers className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="02 / ROUTINE"
            title="Tasks in one place"
            description="Keep your next steps organized so you can spend less time planning and more time learning."
          />
          <InfoCard
            icon={<FiTrendingUp className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="03 / PROGRESS"
            title="Progress you can see"
            description="Every completed task adds up, making your effort easier to notice and your routine easier to maintain."
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;