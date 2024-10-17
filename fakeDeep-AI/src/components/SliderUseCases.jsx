import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import container1 from "../assets/deepfake01.png";
import container2 from "../assets/deepfake02.png";
import container3 from "../assets/deepfake03.png";
import star from "../assets/img_union.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const data = [
  {
    fromtext: "Face swap",
    from: container1,
    description: `Swap your face with your favourite celebrity.`,
    authorimg: "/images/testimonial/testimonial-1.png",
    authorname: "Face swap",
    // authordesig: 'COO, XAlpha',
  },
  {
    fromtext: "Face Enhancement",
    from: container2,
    description: `Making your content, marketing and ads more engaging and personalized.`,
    authorimg: "/images/testimonial/testimonial-2.png",
    authorname: "Face Enhancement",
    // authordesig: 'COO, Xero AI',
  },
  {
    fromtext: "Video Translate",
    from: container3,
    description: `Transform your Marketing Video into Viral Sensation.`,
    authorimg: "/images/testimonial/testimonial-3.png",
    authorname: "Video Translate",
    // authordesig: 'CMO, Cryptex',
    // style: { color: 'blue' },
  },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const previousButton = useRef(null);
  const nextButton = useRef(null);

  const previousSlide = useRef(null);
  const currentSlide = useRef(null);
  const nextSlide = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextButton.current.click();
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timeout);
  }, [slideIndex]);

  const getAnimationDuration = () =>
    parseInt(
      getComputedStyle(currentSlide.current.parentElement)
        .getPropertyValue("--slide-duration")
        .replace(/m?s/g, "")
    );

  const removeClasses = () => {
    currentSlide.current.parentElement.childNodes.forEach((e) => {
      e.classList.remove("left");
      e.classList.remove("right");
      e.classList.remove("center");
    });
  };

  const onPreviousButtonClick = () => {
    if (animating) return;

    removeClasses();
    setAnimating(true);

    currentSlide.current.classList.add("right");
    previousSlide.current.classList.add("center");

    setTimeout(() => {
      setSlideIndex((index) => (index > 0 ? index - 1 : data.length - 1));
      setAnimating(false);
    }, getAnimationDuration());
  };

  const onNextButtonClick = () => {
    if (animating) return;

    removeClasses();
    setAnimating(true);

    currentSlide.current.classList.add("left");
    nextSlide.current.classList.add("center");

    setTimeout(() => {
      setSlideIndex((index) => (index < data.length - 1 ? index + 1 : 0));
      setAnimating(false);
    }, getAnimationDuration());
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => onNextButtonClick(),
    onSwipedRight: () => onPreviousButtonClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const isPreviousSlide = (i) =>
    i === (slideIndex > 0 ? slideIndex - 1 : data.length - 1);
  const isNextSlide = (i) =>
    i === (slideIndex < data.length - 1 ? slideIndex + 1 : 0);

  return (
    <div className="slider-containerMain text-white relative  " {...handlers}>
      <div className="slider relative mt-[2rem] ">
        <div className="controls relative">
          <div className="relative">
            <div
              ref={previousButton}
              onClick={() => onPreviousButtonClick()}
              className="control previous absolute top-[12rem] bg-[#010314] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-1  text-white cursor-pointer"
            >
              <FiArrowLeft size={30} />
            </div>
          </div>
          <div
            ref={nextButton}
            onClick={() => onNextButtonClick()}
            className="absolute top-[12rem] bg-[#010314] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-1  text-white cursor-pointer"
          >
            <FiArrowRight size={30} />
          </div>
        </div>

        <div className="slides !-pt-[2rem]">
          {data.map((e, i) => (
            <div
              className="slide p-[42px] "
              data-previous-slide={isPreviousSlide(i)}
              data-current-slide={i === slideIndex}
              data-next-slide={isNextSlide(i)}
              ref={
                isPreviousSlide(i)
                  ? previousSlide
                  : isNextSlide(i)
                  ? nextSlide
                  : i === slideIndex
                  ? currentSlide
                  : null
              }
              key={i}
            >
              <img src={e.from} alt="" className="mb-4 object-contain" />
              <div className="useCases-imgContainer flex text-left mt-4 gap-[5px] mb-4">
                <img src={star} alt="union_star" />
                <h2 className="">{e.authorname}</h2>
              </div>
              <p className="italic text-left ">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
