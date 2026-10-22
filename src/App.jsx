
import AiDayPlanning from "./components/AiDayPlanning.jsx";
import Featured from "./components/Featured.jsx";
import FAQ from "./components/FAQ.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./components/Pricing.jsx";
import Review from "./components/Review.jsx";
import Banner from "./components/banner.jsx";
import Stats from "./components/stats.jsx";
import Studying from "./components/studying.jsx";
import NextStudySession from "./components/NextStudySession.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <Studying />
      <Featured />
      <HowItWorks />
      <AiDayPlanning />
      <Review/> 
      <Pricing/>
      <FAQ/>
      <NextStudySession/>
      <Footer/>
      
    </div>
  );
}

export default App
