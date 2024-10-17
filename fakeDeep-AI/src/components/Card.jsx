import "../styles/card.css";
// import SvgIcon1 from './SvgIcon1';
// import SvgIcon2 from './SvgIcon2';
import bigStar from "../assets/bigStar.png";
import { useEffect, useRef } from "react";

const CardSection = () => {
  const starContainerRef1 = useRef(null);
  const starContainerRef2 = useRef(null);
  const starContainerRef3 = useRef(null);
  const starContainerRef4 = useRef(null);
  const cardSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === starContainerRef1.current) {
              starContainerRef1.current.classList.add("animate");
            } else if (entry.target === starContainerRef2.current) {
              starContainerRef2.current.classList.add("animate");
            } else if (entry.target === starContainerRef3.current) {
              starContainerRef3.current.classList.add("animate");
            } else if (entry.target === starContainerRef4.current) {
              starContainerRef4.current.classList.add("animate");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust the threshold as needed

    if (cardSectionRef.current) {
      observer.observe(starContainerRef1.current);
      observer.observe(starContainerRef2.current);
      observer.observe(starContainerRef3.current);
      observer.observe(starContainerRef4.current);
    }

    return () => {
      if (cardSectionRef.current) {
        observer.unobserve(starContainerRef1.current);
        observer.unobserve(starContainerRef2.current);
        observer.unobserve(starContainerRef3.current);
        observer.unobserve(starContainerRef4.current);
      }
    };
  }, []);

  return (
    <>
      <section className="card-Section" ref={cardSectionRef}>
        <div className="star-container01" ref={starContainerRef1}>
          <img src={bigStar} alt="" />
          <img src={bigStar} alt="" />
        </div>
        <div className="star-container02" ref={starContainerRef2}>
          <img src={bigStar} alt="" />
          <img src={bigStar} alt="" />
        </div>
        <div className="star-container03" ref={starContainerRef3}>
          <img src={bigStar} alt="" />
        </div>
        <div className="star-container04" ref={starContainerRef4}>
          <img src={bigStar} alt="" />
        </div>
        <div
          // data-aos="zoom-in"

          className="  HeroSection-container flex items-center justify-center w-[70%] m-auto custom-background"
        >
          <div className="HeroSection-InnerContainer max-w p-8 text-center ">
            <h1 className="mb-6   text-white">
              Transform Faces and Voices with Cutting Edge AI
            </h1>
            <p className="mb-8 text-xl text-[#77798F]">
              Experience the Magic of Deepfake Technology - Swap Faces and
              Change Voices Effortlessly
            </p>
            <button className="cardButton px-6 py-3 font-semibold text-white hover:bg-gray-300">
              <strong className="cardStrong">Start Bot Now</strong>
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSection;
