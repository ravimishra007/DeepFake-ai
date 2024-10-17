"use client";

import "../styles/features.css";
import men from "../assets/men1.png";
import Rectangle from "../assets/Rectangle 12.png";
import star from "../assets/img_union.png";
import mike from "../assets/mike.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import StarAnimation from "./Stars";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
gsap.registerPlugin(ScrollTrigger);
export const Features = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.set(img, { opacity: 0, clipPath: "inset(50% 0 50% 0)" });

      gsap.to(img, {
        opacity: 1,
        scale: 1.04,
        clipPath: "inset(0% 0 0% 0)",
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "bottom-=28% 60%",
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []); // Empty dependency array ensures this runs once on component mount

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <>
      <div
        className="text-white font-outfit p-10 feature-container "
        id="features"
      >
        <h1 className="flex items-center justify-center w-[80%] m-auto h-[65px] ">
          Features
        </h1>

        <div className="upper-container-main h-[653px] m-auto p-5 gap-16 flex flex-col lg:flex-row">
          <div className="img-div order-2 lg:order-1 w-full lg:w-[100%] h-[545px] flex items-center justify-center">
            <img
              ref={addToRefs}
              src={Rectangle}
              alt="men img"
              className="mt-[95px] w-[80%] h-[80%]"
            />
          </div>

          <div
            // data-aos="fade-left"
            className="order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="text-center text-div">
              <div className="Features-union">
                <StarAnimation />
                <h2 className="font-[500] w-[90%] m-auto h-[35px] text-center">
                  INFLUENCER AI
                </h2>
              </div>

              <h1 className="text-2xl font-bold mb-4">Create Influencer</h1>
              <p className="text-lg">
                With this feature, users can create a virtual influencer with
                several sub-features, including:
              </p>
              <div className="p-div">
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">Swap:</strong>{" "}
                  Seamlessly swap faces.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Talkify:
                  </strong>{" "}
                  Add realistic speech to your influencer.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Generate Images:
                  </strong>{" "}
                  Create high-quality images.
                </p>
                <p>
                  <strong className="text-[rgb(173, 170, 170)]">
                    Customization:
                  </strong>{" "}
                  Change the voice, name, and other settings of your generated
                  influencer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second cards */}

        <div className="downContainer flex flex-col  lg:flex-row ">
          <div className="left-container middle-container oneCard order-1 lg:order-2 w-full lg:w-1/2">
            <div className="Features-union">
              <StarAnimation />
              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                INFLUENCER AI
              </h2>
            </div>
            <h1>Create Influencer</h1>
            <p>
              With this feature, users can create a virtual influencer with
              several sub-features, including:
            </p>
            <div className="p-div">
              <p>
                <strong className="text-[rgb(173, 170, 170)]">Swap:</strong>{" "}
                Seamlessly swap faces.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">Talkify:</strong>{" "}
                Add realistic speech to your influencer.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">
                  Generate Images:
                </strong>{" "}
                Create high-quality images.
              </p>
              <p>
                <strong className="text-[rgb(173, 170, 170)]">
                  Customization:
                </strong>{" "}
                Change the voice, name, and other settings of your generated
                influencer.
              </p>
            </div>

            <div className="">
              <img
                src={Rectangle}
                alt="men img"
                className="rounded-lg mt-[20px] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="left-container  order-1 lg:order-2 w-full lg:w-1/2">
            <div className="Features-union">
              <StarAnimation />
              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                Face Swap
              </h2>
            </div>
            <h1>Realistic Face Swaps in Seconds</h1>
            <p>
              Users can swap their face into any video by simply uploading an
              image and the video where the swap will occur.
            </p>

            <div className="">
              <img
                // style={{ border: "10px solid red" }}
                ref={addToRefs}
                src={men}
                alt="men img"
                className="rounded-lg mt-[20px] w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="left-container order-1 lg:order-2 w-full lg:w-1/2 ">
            <div className="Features-union">
              <StarAnimation />
              <h2 className=" font-[500] w-[90%] m-auto h-[35px] text-center">
                {" "}
                Voice Change
              </h2>
            </div>
            <h1>Transform Voices with AI-Powered Precision</h1>
            <p>
              Users can lip-sync any video by uploading the video and an audio
              file, or use text sync to input text and generate audio.
            </p>
            <div className="">
              <img
                ref={addToRefs}
                src={mike}
                alt="mike img"
                className="mt-[20px] rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
