// import backgroundImage from '../../public/revenue_bg.png';
import { useEffect, useRef } from "react";
import "../styles/revenue.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';




export const RevenueSharing = () => {
  const spanRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 40;
            const end = 80;
            const duration = 3000;
            const increment = end / (duration / 50);
            const animate = () => {
              start += increment;
              if (start <= end) {
                spanRef.current.textContent = `${Math.round(start)}%`;
                requestAnimationFrame(animate);
              } else {
                spanRef.current.textContent = `${end}%`;
              }
            };
            animate();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        observer.unobserve(spanRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000, 
  //   });
  // }, []);
  return (
    <>
      <div className="revenue-container mt-[120px] text-white">
        <h1 className="w-[90%] h-[60px] m-auto mb-[40px] text-center ">
          Revenue Sharing
        </h1>
        <p className="w-[90%] p-[5px] mt-[10px] m-auto">
          Unlock limitless earnings with Deepfake AI. Competing directly with
          top players like AkooI, our cutting-edge model will soon be available
          for integration via API. We are committed to sharing 50% of the
          revenue from API sales with our partners. As we transition to a
          premium-only service, we aim to capture the lucrative text-to-video
          market. OpenAI s $50 million monthly revenue is our benchmark, and we
          plan to reward our users generously as we grow.
        </p>

        <div className="revenue-lower-Container  p-[5px] mt-[10px] flex flex-col md:flex-row items-center justify-around  text-center">
          <div 
          // data-aos="zoom-in-up"
           className="revenue-1stDiv flex flex-row items-center mb-4 md:mb-0">
            <span ref={spanRef} className=" span1">40%</span>
            <span className=" span2 text-left ml-[10px]">Revenue will be shared to holders</span>
          </div>
          <div className="h-0.5 md:w-0.5 md:h-32 bg-white my-4 md:my-0 md:mx-4"></div>
          <div
          // data-aos="zoom-in-up"
            className="revenue-2ndDiv flex flex-row items-center">
            <span className="span1">API</span>
            <span className="span2 text-left ml-[10px]">Providing API to other projects</span>
          </div>
        </div>
      </div>
    </>
  );
};
