import "../styles/heroSection.css";
import star from "../../public/img_union.png";
import skelton from "../../public/skelton.png";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StarAnimation from "./Stars";

export const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  const address = "CA : 0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9 ";
  const handleCopy = () => {
    navigator.clipboard.writeText(
      "0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9 "
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Show "Copied!" for 2 seconds
  };

  useEffect(() => {
    AOS.init({
      duration: 3000, // duration of the animations in milliseconds
    });
  }, []);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <>
      <div className="main-heroSection">
        <div className="heroSection text-white">
          {/* hero section */}
          <div className="layout topLayout0007">
            <div data-aos="zoom-in-up" className="inner-topLayout0007">
              <div className="left-container7">
                <div className="topLayout-union">
                  <StarAnimation />
                  <h4>Welcome to DEEPFAKE</h4>
                </div>
                <h1>Transform Faces and Voices with AI</h1>
                <p>
                  Experience the Magic of Deepfake Technology - Swap Faces and
                  Change Voices Effortlessly
                </p>
                <div className="text-white gap-2 text-left text-[16px] md:text-[16px]   lg:flex">
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
                <div className="buttons">
                  <button className="button1">Whitepaper </button>

                  <button className="button2">
                    <strong className="heroStrong">Start Bot Now</strong>
                    <div className="hoverEffect2">
                      <div></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="skelton-container">
              <img src={skelton} alt=" skelton" />
            </div>
          </div>

          {/* about section */}
          <div className="layout bottomLayout">
            <div data-aos="zoom-in-up" className="text-bottomLayout">
              <div className="topLayout-union">
                <StarAnimation />
                <h4>WHAT IS DEEPFAKE?</h4>
              </div>
              <h1>About Us</h1>
              <p>
                Experience the Magic of Deepfake Technology - Swap Faces and
                Change Voices Effortlessly
              </p>
            </div>
            <div
              // data-aos="zoom-in-up"
              className="img-bottomLayout"
            >
              <div className="slider-container flex justify-center items-center h-screen m-0">
                <div className="relative w-[700px] h-[390px] ">
                  <div className="">
                    <div className="sliderImg-container absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://i.imgur.com/s08MkXC.jpg')]"></div>
                    <div
                      className="sliderImg-container absolute top-0 left-0 h-full bg-cover bg-[url('https://i.imgur.com/PfIWek4.jpg')]"
                      style={{ width: `${sliderPos}%` }}
                    ></div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={sliderPos}
                      className="sliderImg-container absolute appearance-none w-full h-full bg-[rgba(242,242,242,0.1)] outline-none m-0 transition-all duration-200 flex justify-center items-center hover:bg-[rgba(242,242,242,0.1)]"
                      onChange={handleSliderChange}
                    />

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

        {/* responsive */}

        <div className="responsive-heroSection">
          <div data-aos="fade-up" className="responsive-imgContainer">
            <div className="container007">
              <div className="responsive-union text-white center ">
                <StarAnimation />
                <h4>Welcome to DEEPFAKE</h4>
              </div>
              <h1>Transform Faces and Voices with AI</h1>
            </div>
          </div>
          <div className="responsive-middleContainer text-white text-center">
            <p>
              Experience the Magic of Deepfake Technology - Swap Faces and
              Change Voices Effortlessly
            </p>
            <div className="copy-icon">
              {/* <span className=" text-[16px] md:text-[16px] text-white ">CA</span> */}
              <span className=" flex items-center">
                {/* :  */}
                {address.substring(0, 40)}
                <button
                  onClick={handleCopy}
                  className="text-white"
                  style={{ marginLeft: "8px" }}
                >
                  {isCopied ? (
                    <>
                      <FaCheckDouble size={20} color="white" />
                    </>
                  ) : (
                    <IoCopyOutline />
                  )}
                </button>
              </span>
            </div>
            <div className="newButtons">
              <button className="button01">
                <strong className="heroStrong1">Start Bot Now</strong>
                <div className="hoverEffect3">
                  <div></div>
                </div>
              </button>
              <button className="button02">Whitepaper</button>
            </div>
          </div>
          <div className="responsive-aboutSection">
            <div className="container008">
              <div className="responsive-union01 text-white center ">
                <StarAnimation />
                <h4>What is DEEPFAKE</h4>
              </div>
              <h1>About Us</h1>

              <p>
                Experience the Magic of Deepfake Technology - Swap Faces and
                Change Voices Effortlessly
              </p>
              <div className="responsive-About-img mt-[20px]">
                {/* img-bottomLayout" */}
                {/* <img src={video} alt="video-img" /> */}

                {/* slider-container */}

                <div className=" responsive-slider-container flex justify-center items-center  m-0">
                  <div className="relative w-[600px] h-[350px] ">
                    <div className="">
                      <div className="sliderImg-container responsive-sliderFirstCard absolute top-0 left-0 w-full h-full bg-cover bg-[url('https://i.imgur.com/s08MkXC.jpg')]"></div>
                      <div
                        className="sliderImg-container responsive-sliderFirstCard  absolute top-0 left-0 h-full bg-cover bg-[url('https://i.imgur.com/PfIWek4.jpg')]"
                        style={{ width: `${sliderPos}%` }}
                      ></div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={sliderPos}
                        className="sliderImg-container responsive-sliderFirstCard absolute appearance-none w-full h-full bg-[rgba(242,242,242,0.2)] outline-none m-0 transition-all duration-200 flex justify-center items-center hover:bg-[rgba(242,242,242,0.1)]"
                        // className="sliderImg-container absolute appearance-none w-full h-full bg-[rgba(242,242,242,0.3)] outline-none m-0 transition-all duration-200 flex justify-center items-center hover:bg-[rgba(242,242,242,0.1)]"
                        onChange={handleSliderChange}
                      />

                      <div
                        className="responsive-pointer pointer-events-none absolute w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
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
      </div>
    </>
  );
};
