import { useState } from "react";
import { donutData, TokenomicsData } from "../Context/TokenomicsData";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa6";

import "../styles/tokenomics.css";
import PieChart from "./ChartComponent";

const chartData = {
  labels: ["BNB LP Pool", "Burned", "LP Pool", "CEX Wallet"],
  data: [30, 30, 35, 5],
  backgroundColor: ["#8EBBFF", "#2F2CBE", "#028DFD", "#6558FF"],
};

const Tokenomics = () => {
  const [isCopied, setIsCopied] = useState(false);
  const address = " CA : 0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9";
  const handleCopy = () => {
    navigator.clipboard.writeText("0xa17366B24a9EdFb876eFfe7dcC0A54DE21E566a9");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getBackgroundColor = (name) => {
    switch (name) {
      case "Partnership":
        return "#6558FF";
      case "LP Pool":
        return "#8EBBFF";
      case "Burned":
        return "#2F2CBE";
      case "BNB LP Pool":
        return "#028dfd";
      default:
        return "#6558FF";
    }
  };

  const getBackgroundStyle = (name) => {
    const color = getBackgroundColor(name);
    return color.startsWith("bg-") ? {} : { backgroundColor: color };
  };

  return (
    <>
      <div className="tokens-container" id="tokenomics">
        <div className="tokens token0007  relative lg:mt-[10rem] w-[90%] lg:max-w-[1800px] mx-auto">
          <h1 className="h-[60px]  text-center ">Tokenomics</h1>

          <div className="lg:flex block justify-between mx-auto w-full">
            <div
              // data-aos="fade-right"

              className="tokens-img mx-auto mt-6 lg:pt-[2.5rem] lg:w-[55%] w-full"
            >
              {/* <img className=" lg:h-auto lg:w-auto mt-6 " src={Donut} alt="donut img" /> */}

              <PieChart data={chartData} />

              <div className="text-white gap-8 text-left text-[22px] mt-[2.5rem] lg:flex hidden">
                {/* <span className="intersemibold">CA</span> */}
                <span className="interregular flex items-center">
                  {/* :  */}
                  {address.substring(0, 48)}
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
            </div>
            <div className="token-table lg:pt-[2.5rem] pt-[1rem] lg:w-[40%] w-[90%] mx-auto">
              <div className="rounded-lg data-container mx-auto lg:w-[90%] w-[80%]">
                {TokenomicsData.map((item, index) => (
                  <div
                    key={index}
                    className="
                    borderTable
                    flex lg:py-[1.3rem] py-[0.6rem] lg:gap-4 gap-8"
                  >
                    <div className="innerData-container01 flex justify-start w-[90%]">
                      <span className="font-bold text-white   lg:leading-[16px]">
                        {item.name}
                      </span>
                    </div>
                    <div className="innerData-container02 flex items-center w-9/12 text-right">
                      <span className="  text-white  lg:leading-[16px] text-opacity-80 lg:ml-0">
                        : {item.value}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="tokenCopy-container  text-white  text-left lg:text-[1.375rem] text-[0.409rem] lg:gap-4 gap-8  lg:hidden flex py-[0.6rem]">
                  {/* <span className="intersemibold w-[90%]">CA</span> */}
                  <span className="interregular w-9/12 flex items-center">
                    {/* :  */}
                    {address.substring(0, 48)}
                    <button
                      onClick={handleCopy}
                      className="text-white"
                      style={{ marginLeft: "8px" }}
                    >
                      {isCopied ? (
                        <>
                          <FaCheckDouble size={10} color="white" />
                        </>
                      ) : (
                        <IoCopyOutline />
                      )}
                    </button>
                  </span>
                </div>
              </div>
              <div
                //  data-aos="fade-left"
                className="mt-4  "
              >
                {donutData.map((item, i) => (
                  <div
                    key={i}
                    className="tableToken-container item flex justify-between text-white mx-auto mb-2 rounded-lg border-t border-r border-b border-gray-600"
                  >
                    <div
                      className={` lg:w-[1.25rem] w-[0.75rem] lg:h-[3.5rem] h-[3.5 rem] ${
                        getBackgroundColor(item.name).startsWith("bg-")
                          ? getBackgroundColor(item.name)
                          : ""
                      } rounded-tl-lg rounded-bl-lg`}
                      style={getBackgroundStyle(item.name)}
                    ></div>
                    <div className="innerTableToken-container item flex justify-between text-white w-full px-[1rem] rounded-tr-lg rounded-br-lg lg:py-4">
                      <div className="flex justify-start items-center gap-4">
                        <span className="lg:text-[1.375rem] text-[0.40875rem]">
                          {item.name}
                        </span>
                      </div>
                      <div className=" flex justify-start items-center gap-2">
                        <span className="text-white lg:text-[1.375rem] text-[0.40875rem] intersemibold lg:leading-[1rem] text-opacity-80">
                          :
                        </span>
                        <span className="text-white lg:text-[1.375rem] text-[0.40875rem] intersemibold lg:leading-[1rem] text-opacity-80 ml-2">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
