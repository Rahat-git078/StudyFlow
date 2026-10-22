import { FiTarget } from "@react-icons/all-files/fi/FiTarget";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { FiTrendingDown } from "@react-icons/all-files/fi/FiTrendingDown";
import InfoCard from "./shared/cards.jsx";
import SectionHeader from "./shared/SectionHeader.jsx";

const Studying = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          title="Studying without a system is exhausting"
          subtitle="You're not lacking discipline. You need a place where your goals turn into today's tasks."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard
            icon={<FiTarget className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="01 / DIRECTION"
            title="Goals stay vague"
            description="Without a clear plan, big goals feel abstract and it is hard to know what to do first."
          />
          <InfoCard
            icon={<FiLayers className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="02 / ORGANIZATION"
            title="Tasks get scattered"
            description="When priorities live in different places, it is easy to lose focus and miss your next step."
          />
          <InfoCard
            icon={<FiTrendingDown className="h-5 w-5 text-[#0e7c66]" aria-hidden="true" />}
            eyebrow="03 / MOTIVATION"
            title="Progress feels slow"
            description="Without a routine that tracks small wins, it is harder to notice how far you have come."
          />
        </div>
      </div>
    </section>
  );
};

export default Studying;
