import React from "react";
import checked from "../assets/checked.png";
import right from "../assets/right.png";
import cross from "../assets/cross.png";
import crossed from "../assets/crossed.png";
import fakefreeIcon from "../assets/logo_icon.png";
import remakerIcon from "../assets/remaker logo.png";
import soraIcon from "../assets/soraIcon.png";
import "../styles/table.css";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import StarAnimation from "./Stars";

const firstcard = [
  { text1: "Face Swap", icon: <RxCross2 color="white" /> },
  { text1: "Voice Change", icon: <MdCheck color="white" /> },
  { text1: "Text to Voice", icon: <MdCheck color="white" /> },
  { text1: "Text to Image", icon: <RxCross2 color="white" /> },
  { text1: "Realistic Avatar", icon: <RxCross2 color="white" /> },
];
const secondcard = [
  { text1: "Face Swap", icon: <MdCheck color="white" /> },
  { text1: "Voice Change", icon: <MdCheck color="white" /> },
  { text1: "Text to Voice", icon: <MdCheck color="white" /> },
  { text1: "Text to Image", icon: <MdCheck color="white" /> },
  { text1: "Realistic Avatar", icon: <MdCheck color="white" /> },
];
const thirdcard = [
  { text1: "Face Swap", icon: <RxCross2 color="white" /> },
  { text1: "Voice Change", icon: <RxCross2 color="white" /> },
  { text1: "Text to Voice", icon: <MdCheck color="white" /> },
  { text1: "Text to Image", icon: <MdCheck color="white" /> },
  { text1: "Realistic Avatar", icon: <MdCheck color="white" /> },
];
const Table = () => {
  return (
    <>
      <section
        className="whyUsSection w-[90%] mx-auto overflow-auto mt-[6rem]"
        id="why-us"
      >
        <h1 className="whyUsSection-h1 text-center mt-4">Why Us??</h1>
        <div
          // style={{ border: "4px solid red" }}
          className="card-container flex gap-4 pt-6 justify-start lg:w-[90%] mx-auto overflow-x-auto pb-12"
        >
          <div className="card cardanimated lg:w-[32%] w-[260px] p-5 card1 flex-none">
            <div className="flex items-center gap-3">
              <img
                src={remakerIcon}
                alt="remakerIcon"
                className="w-[39px] h-[45px]"
              />
              <h2 className="text-white lg:text-[30px] text-[22px] choosetext">
                Remaker
              </h2>
            </div>
            <div className="w-[90%] mx-auto bg-[#282729] h-[0.06rem] mt-4"></div>
            <div className="my-[3rem]">
              {firstcard.map((item, index) => (
                <div key={index} className="mt-3 flex items-center gap-3">
                  {item.icon}
                  <h1 className="text-white">{item.text1}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[32%] w-[260px] flex-none cardanimated">
            <div className="h-[25rem] dark:bg-black card2 dark:bg-grid-white/[0.1] bg-grid-white/[0.1] relative">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center card2 z-[10] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <div className="w-full h-full p-5 relative z-[20]">
                <div
                  className="flex items-center gap-3 "
                  // style={{ border: "2px solid red" }}
                >
                  <img
                    src={fakefreeIcon}
                    className="lg:w-[63px] lg:h-[39px] w-[53] h-[29px]"
                    alt="fakefreeIcon"
                  />
                  <h2 className="text-white lg:text-[30px] text-[22px] choosetext ">
                    deep{" "}
                    <span className="text-white lg:text-[30px] text-[22px] logoicon">
                      fake AI
                    </span>
                  </h2>
                </div>
                <div className="mt-[4.2rem] z-[30]">
                  {secondcard.map((item, index) => (
                    <div
                      key={index}
                      className="mt-3 flex items-center gap-3 z-[30]"
                    >
                      {item.icon}
                      <h1 className="text-white">{item.text1}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card cardanimated lg:w-[32%] w-[260px] p-5 card1 flex-none">
            <div className="flex items-center gap-3">
              <img src={soraIcon} alt="soraIcon" />
              <h2 className="text-white lg:text-[30px] text-[22px] choosetext">
                SORA
              </h2>
            </div>
            <div className="w-[90%] mx-auto bg-[#282729] h-[0.06rem] mt-6"></div>
            <div className="my-[3rem]">
              {thirdcard.map((item, index) => (
                <div key={index} className="mt-3 flex items-center gap-3">
                  {item.icon}
                  <h1 className="text-white">{item.text1}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
