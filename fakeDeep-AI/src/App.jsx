import { useEffect, useRef, useState } from "react";
import CardSection from "./components/Card";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { RevenueSharing } from "./components/Revenue";
import Tokenomics from "./components/Tokenomics";
import { UseCases } from "./components/UseCases";
import WhyUs from "./components/WhyUsSection";

// import { HeroSection } from "./components/HeroSection";

import Roadmap from "./components/RoadMap";
import { Footer } from "./components/Footer";
import FAQ from "./components/FaqSection";
import { NewHeroSection } from "./components/NewHeroSection";
// import LazyLoad from 'react-lazy-load';

function App() {
  const [shouldReRenderRoadmap, setShouldReRenderRoadmap] = useState(false);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldReRenderRoadmap(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => {
      if (roadmapRef.current) {
        observer.unobserve(roadmapRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldReRenderRoadmap) {
      // Re-render the Roadmap component
      setShouldReRenderRoadmap(false);
    }
  }, [shouldReRenderRoadmap]);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <NewHeroSection />
        {/* <HeroSection/> */}
        <Features />
        <WhyUs />
        <RevenueSharing />
        <div ref={roadmapRef}>
          <Roadmap
            key={shouldReRenderRoadmap ? "re-render" : "initial-render"}
          />
        </div>
        <Tokenomics />
        <FAQ />
        <UseCases />
        <CardSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
