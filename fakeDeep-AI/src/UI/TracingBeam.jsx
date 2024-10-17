import '../styles/roadMap.css'
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { cn } from '../utils/cn';

export const TracingBeam = ({ children, className ,robot}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);



  useEffect(() => {
    if (contentRef.current) {
      // setSvgHeight(contentRef.current.offsetHeight);
      setSvgHeight(contentRef.current.offsetHeight+10);
    }
    console.log("🚀svgHeight:", svgHeight)
  }, [contentRef, svgHeight]);

  const y1 = useSpring(
    // +
    useTransform(scrollYProgress, [-0.05, 0.8], [10, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [-0.05, 1], [10, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  useEffect(() => {
    const unsubscribeY1 = y1.onChange((value) => {
      console.log('Y1:', value);
    });
    const unsubscribeY2 = y2.onChange((value) => {
      console.log('Y2:', value);
    });

    return () => {
      unsubscribeY1();
      unsubscribeY2();
    };
  }, [y1, y2]);


  return (
    <motion.div ref={ref} className={cn('relative w-full max-w-4xl mx-auto h-full', className)}>
      <div className="motion-container  absolute -left-4 md:-left-12 top-3">
        <motion.div
          transition={{ duration: 40, delay: 5 }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-white shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#774af0',
              borderColor: scrollYProgress.get() > 0 ? 'white' : '#774af0',
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 1} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{duration: 0.5, }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 1} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            className="motion-reduce:hidden"
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >

              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div
        style={{ y: y1 }}
        className="robotBean absolute top-0 right-0"
      >
        <img src={robot} alt="Robot" className="w-16 h-16" />
      </motion.div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};






















// import '../styles/roadMap.css'
// import { useEffect, useRef, useState } from 'react';
// import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
// import { cn } from '../utils/cn';

// export const TracingBeam = ({ children, className ,robot}) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
//   const contentRef = useRef(null);
//   const [svgHeight, setSvgHeight] = useState(0);



//   useEffect(() => {
//     if (contentRef.current) {
//       setSvgHeight(contentRef.current.offsetHeight);
//     }
//     console.log("🚀 ~ file: TracingBeam.jsx:11 ~ TracingBeam ~ svgHeight:", svgHeight)
//   }, []);

//   const y1 = useSpring(
//     useTransform(scrollYProgress, [-0.05, 0.8], [10, svgHeight]),
//     {
//       stiffness: 500,
//       damping: 90,
//     }
//   );
//   const y2 = useSpring(
//     useTransform(scrollYProgress, [-0.05, 1], [10, svgHeight - 200]),
//     {
//       stiffness: 500,
//       damping: 90,
//     }
//   );

//   return (
//     <motion.div ref={ref} className={cn('relative w-full max-w-4xl mx-auto h-full', className)}>
//       <div className="motion-container  absolute -left-4 md:-left-12 top-3">
//         <motion.div
//           transition={{ duration: 40, delay: 5 }}
//           animate={{
//             boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
//           }}
//           className="ml-[27px] h-4 w-4 rounded-full border border-white shadow-sm flex items-center justify-center"
//         >
//           <motion.div
//             transition={{ duration: 0.2, delay: 0.5 }}
//             animate={{
//               backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#650976',
//               borderColor: scrollYProgress.get() > 0 ? 'white' : '#650976',
//             }}
//             className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
//           />
//         </motion.div>

//         <svg
//           viewBox={`0 0 20 ${svgHeight}`}
//           width="20"
//           height={svgHeight} // Set the SVG height
//           className="ml-4 block"
//           aria-hidden="true"
//         >
//           <motion.path
//             d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
//             fill="none"
//             stroke="#9091A0"
//             strokeOpacity="0.16"
//             transition={{
//                             duration: 0.5,
//                         }}
//           />
//           <motion.path
//             d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
//             fill="none"
//             stroke="url(#gradient)"
//             strokeWidth="4"
//             className="motion-reduce:hidden"
//             transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
//           />
//           <defs>
//             <motion.linearGradient
//               id="gradient"
//               gradientUnits="userSpaceOnUse"
//               x1="0"
//               x2="0"
//               y1={y1}
//               y2={y2}
//             >

//               <stop stopColor="#18CCFC" stopOpacity="0" />
//               <stop stopColor="#18CCFC" />
//               <stop offset="0.325" stopColor="#6344F5" />
//               <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
//             </motion.linearGradient>
//           </defs>
//         </svg>
//       </div>
//       <motion.div
//         style={{ y: y1 }}
//         className="robotBean absolute top-0 right-0"
//       >
//         <img src={robot} alt="Robot" className="w-16 h-16" />
//       </motion.div>

//       <div ref={contentRef}>{children}</div>
//     </motion.div>
//   );
// };

























// without image

// import { useEffect, useRef, useState } from 'react';
// import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
// import { cn } from '../utils/cn';

// export const TracingBeam = ({ children, className, robot }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
//   const contentRef = useRef(null);
//   const [contentHeight, setContentHeight] = useState(0);

//   useEffect(() => {
//     if (contentRef.current) {
//       setContentHeight(contentRef.current.offsetHeight);
//     }
//     console.log("🚀 ~ file: TracingBeam.jsx:11 ~ TracingBeam ~ contentHeight:", contentHeight)
//   }, []);

//   const y = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, contentHeight]),
//     {
//       stiffness: 500,
//       damping: 90,
//     }
//   );

//   return (
//     <motion.div ref={ref} className={cn('relative w-full max-w-4xl mx-auto h-full', className)}>
//       <div className="absolute -left-4 md:-left-12 top-3">
//         <motion.div
//           transition={{ duration: 40, delay: 5 }}
//           animate={{
//             boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
//           }}
//           className="ml-[27px] h-4 w-4 rounded-full border border-white shadow-sm flex items-center justify-center"
//         >
//           <motion.div
//             transition={{ duration: 0.2, delay: 0.5 }}
//             animate={{
//               backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#650976',
//               borderColor: scrollYProgress.get() > 0 ? 'white' : '#650976',
//             }}
//             className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
//           />
//         </motion.div>
//         <motion.div
//           className="line w-[4px] bg-[#0047ff] absolute"
//           style={{ height: contentHeight }}
//           initial={{ height: 0 }}
//           animate={{ height: contentHeight}}
//           transition={{ duration: 0.5 }}
//         />
//         {/*         <motion.div
//           className="line w-[8px] bg-[#0047ff] relative"
//           style={{ height: contentHeight }}
//           initial={{ height: 0 }}
//           animate={{ height: contentHeight }}
//           transition={{ duration: 0.5 }}
//         />
//  */}
//         <motion.img
//           src={robot}
//           alt="Robot"
//           className="robot absolute h-[50px] w-[50px] mt-[50px]"
//           style={{ y }}
//         />
//       </div>
//       <div ref={contentRef}>{children}</div>
//     </motion.div>
//   );
// };
