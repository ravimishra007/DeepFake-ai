import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import star4 from "../assets/star4.svg";
import star5 from "../assets/star5.svg";
import star6 from "../assets/star6.svg";

const StarAnimation = () => {
  return (
    <div className="btn ">
      <button class="btn">
        <svg
          height="30"
          width="30"
          viewBox="0 0 512 512"
          class="sparkle-container"
        >
          <g class="star-group">
            <path
              class="star star2"
              d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z"
              fill="#4467FF"
            ></path>
            <path
              class="star star3"
              d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z"
              fill="#4467FF"
            ></path>
            <path
              class="star star1"
              d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z"
              fill="#4467FF"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default StarAnimation;
