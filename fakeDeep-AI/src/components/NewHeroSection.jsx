import React, { useEffect, useRef, useState } from "react";
import "../styles/newHeroSection.css";
import star from "../assets/img_union.png";
import boy1 from "../assets/newBoy.png";
import boy2 from "../assets/oldBoy.png";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa6";
import StarAnimation from "./Stars";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export const NewHeroSection = () => {
  const headerRef = useRef(null);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);

  const [isCopied, setIsCopied] = useState(false);
  const address = "CA : 0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9 ";
  const handleCopy = () => {
    navigator.clipboard.writeText(
      "0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9 "
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 500;
      const startSize = isMobile ? 160 : 160;
      const newSize = startSize - scrollY / 12;

      if (scrollY < headerRef.current.offsetHeight / 2) {
        headerRef.current.style.backgroundSize = `${newSize}%`;
        headerRef.current.style.backgroundAttachment = isIOS
          ? "scroll"
          : "fixed";
        container1Ref.current.style.opacity =
          1 - scrollY / (headerRef.current.offsetHeight / 2);
        container2Ref.current.style.opacity = 1;
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <>
      <section id="hero" className="newHeroSection-main" ref={headerRef}>
        <div className="newHeroShadow">
          <div className="newHeroSection" ref={container1Ref}>
            <div className="newHeroSection-container text-white">
              <div className="newHero-union">
                <StarAnimation />
                <h2>Welcome to DEEPFAKE</h2>
              </div>
              <h1>Transform Faces and Voices with AI </h1>
              <p>
                Experience the Magic of Deepfake Technology - Swap Faces and
                Change Voices Effortlessly
              </p>
              <div className="newCopyIcon text-white gap-2 text-center text-[16px] md:text-[16px]   lg:flex">
                {/* <span className=" text-[16px] md:text-[10px] text-white ">CA</span> */}
                <span className="  flex items-center">
                  {/* : */}
                  {address.substring(0, 49)}
                  <button
                    onClick={handleCopy}
                    className="text-white "
                    style={{ marginLeft: "8px" }}
                  >
                    {isCopied ? (
                      <>
                        <FaCheckDouble size={20} color="white" />
                      </>
                    ) : (
                      <IoCopyOutline size={20} />
                    )}
                  </button>
                </span>
              </div>

              <div className="new-buttons">
                <button className="new-button1">Whitepaper </button>

                <button className="new-button2">
                  <strong className="new-heroStrong">Start Bot Now</strong>
                  <div className="new-hoverEffect2">
                    <div></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* about section */}
          <div id="about" className="newAboutSection" ref={container2Ref}>
            <div className="newAboutSection-container">
              <div className="newHero-union">
                <StarAnimation />
                <h2 className="!text-white">WHat is deepfake?</h2>
              </div>
              <h1>About Us</h1>
              <p>
                Experience the Magic of Deepfake Technology - Swap Faces and
                Change Voices Effortlessly
              </p>
              <div className="newAboutSection-slider">
                <div className="newSlider-container flex justify-center items-center ">
                  <div className="newAboutSlider relative w-[700px] h-[400px] ">
                    <div className="">
                      <div
                        className="newSliderImg-container absolute top-0 left-0 w-full h-full bg-cover"
                        style={{ backgroundImage: `url(${boy1})` }}
                      ></div>
                      <div
                        className="newSliderImg-container absolute top-0 left-0 h-full bg-cover "
                        style={{
                          width: `${sliderPos}%`,
                          backgroundImage: `url(${boy2})`,
                        }}
                      ></div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={sliderPos}
                        className="newSliderImg-container absolute appearance-none w-full h-full bg-[rgba(242,242,242,0.1)] outline-none m-0 transition-all duration-200 flex justify-center items-center hover:bg-[rgba(242,242,242,0.1)]"
                        onChange={handleSliderChange}
                      />
                      {/*                     <div className="newSliderImg-container absolute top-0 left-0 w-full h-full bg-cover "
                     style={{ backgroundImage: `url(${boy1})` }}
// https://imgur.com/PfIWek4                     bg-[url('https://i.imgur.com/s08MkXC.jpg')]

// https://imgur.com/s08MkXC  bg-[url('https://i.imgur.com/PfIWek4.jpg')]
                    ></div>
                    <div
                      className="newSliderImg-container absolute top-0 left-0 h-full bg-cover"
                      style={{ width: `${sliderPos}%`, backgroundImage: `url(${boy2})` }}
                    ></div>
 */}
                      <div
                        className=" pointer-events-none absolute w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
                        style={{
                          left: `calc(${sliderPos}% - 18px)`,
                          top: "calc(50% - 18px)",
                        }}
                      >
                        <span className="relative block border-solid border-[2px] border-gray-600 rotate-[-45deg] after:content-[''] after:block after:border-solid after:border-[2px] after:border-gray-600 after:rotate-[90deg]"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
