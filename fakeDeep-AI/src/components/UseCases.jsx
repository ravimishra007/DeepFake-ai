import { useEffect, useRef } from "react";
import img1 from "../assets/deepfake01.png";
import img2 from "../assets/deepfake02.png";
import img3 from "../assets/deepfake03.png";
import star from "../assets/img_union.png";
import "../styles/useCases.css";
import Slider from "./SliderUseCases";
import StarAnimation from "./Stars";

export const UseCases = () => {
  // const tiltRefs = [useRef(null), useRef(null), useRef(null)];

  // const applyTiltEffect = (el) => {
  //   const height = el.clientHeight;
  //   const width = el.clientWidth;

  //   const handleMove = (e) => {
  //     const xVal = e.layerX;
  //     const yVal = e.layerY;

  //     const yRotation = 20 * ((xVal - width / 2) / width);
  //     const xRotation = -20 * ((yVal - height / 2) / height);

  //     const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

  //     el.style.transform = transformString;
  //   };

  //   const handleMouseOut = () => {
  //     el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  //   };

  //   const handleMouseDown = () => {
  //     el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
  //   };

  //   const handleMouseUp = () => {
  //     el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
  //   };

  //   el.addEventListener('mousemove', handleMove);
  //   el.addEventListener('mouseout', handleMouseOut);
  //   el.addEventListener('mousedown', handleMouseDown);
  //   el.addEventListener('mouseup', handleMouseUp);

  //   return () => {
  //     el.removeEventListener('mousemove', handleMove);
  //     el.removeEventListener('mouseout', handleMouseOut);
  //     el.removeEventListener('mousedown', handleMouseDown);
  //     el.removeEventListener('mouseup', handleMouseUp);
  //   };
  // };

  // useEffect(() => {
  //   tiltRefs.forEach((ref) => {
  //     if (ref.current) {
  //       applyTiltEffect(ref.current);
  //     }
  //   });
  // }, [tiltRefs]);

  return (
    <>
      <section
        className="useCases-Section text-white h-[450px]"
        id="how-it-works"
      >
        <h1 className="text-center mb-[25px]">Use Cases</h1>

        <div className="useCases-scrolling">
          <div className="useCases-container">
            <div
              className="useCases-innerContainer"
              // ref={tiltRefs[0]} .useCases-innerContainer:hover .useCases-images>img : not(:hover){opacity:.7; transform:scale(.85)}
            >
              <div className="useCases-images">
                <img src={img1} alt=" img-1" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <StarAnimation />
                  <h2>Face swap</h2>
                </div>

                <p>Swap your face with your favourite celebrity</p>
              </div>
            </div>
            <div
              className="useCases-innerContainer elonMusk-container"
              // ref={tiltRefs[1]}
            >
              <div className="useCases-images elonMusk">
                <img src={img2} alt=" img-2" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <StarAnimation />
                  <h2>Face Enhancement</h2>
                </div>

                <p>Making your content, marketing and ads more engaging</p>
              </div>
            </div>
            <div
              className="useCases-innerContainer"
              //  ref={tiltRefs[2]}
            >
              <div className="useCases-images">
                <img src={img3} alt=" img-3" />
              </div>
              <div className="useCases-innerItem">
                <div className="useCases-iconImages">
                  <StarAnimation />
                  <h2>Video Translate </h2>
                </div>

                <p>Transform your Marketing Video into Viral Sensation</p>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <Slider /> */}</div>
      </section>
    </>
  );
};
