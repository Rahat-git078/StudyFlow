import AiDayPlanning from "../../components/AiDayPlanning.jsx";
import Featured from "../../components/Featured.jsx";
import FAQ from "../../components/FAQ.jsx";
import HowItWorks from "../../components/HowItWorks.jsx";
import Pricing from "../../components/Pricing.jsx";
import Review from "../../components/Review.jsx";
import Banner from "../../components/banner.jsx";
import Stats from "../../components/stats.jsx";
import Studying from "../../components/studying.jsx";
import NextStudySession from "../../components/NextStudySession.jsx";

function Homepage() {
  return (
    <div>
      <Banner />
      <Stats />
      <Studying />
      <Featured />
      <HowItWorks />
      <AiDayPlanning />
      <Review />
      <Pricing />
      <FAQ />
      <NextStudySession />
    </div>
  );
}

export default Homepage;
