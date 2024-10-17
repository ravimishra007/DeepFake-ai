
import { useState } from "react";
import '../styles/tokenomics.css';
import '../styles/faq.css';


function FAQ() {
  const [faqs] = useState([
    {
      question: "01: What is deepfake technology?",
      answer:
        "Deepfake technology uses artificial intelligence (AI) to create realistic-looking videos or images of people doing or saying things they never actually did.",
    },
    {
      question: "02: How does your face swap feature work?",
      answer:
        "Our face swap feature uses advanced AI algorithms to seamlessly swap the faces of two people in a video or image.",
    },
    {
      question: " 03: How can I change voices using your AI tool?",
      answer:
        "Our AI voice changer tool utilizes deep learning to accurately recreate your voice or transform it into a different voice.",
    },
    {
      question: "04: Can I use the deepfake AI for commercial purposes?",
      answer:
        "It's important to use deepfake technology responsibly. We strongly advise against using it for any commercial purposes that may deceive or mislead others.",
    },
    {
      question:
        "05: How long does it take to process a face swap or voice change?",
      answer:
        "The processing time depends on the complexity of the task. Generally, it takes a few minutes to a few hours.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="tokens container faq-section mt-[80px] mx-auto py-12 p-[20px]">
      <h1 className="text-3xl font-bold text-center mb-8">FAQ&apos;s</h1>
      <div className="grid grid-cols-1 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-medium text-white">
                {faq.question}
              </h3>
              <span className="text-white text-[22px]">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-400 ">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FAQ;




// import '../styles/faq.css'


// export const FaqSection = () => {
//   return (
//     <>
//     <section className="faq-section">
      
//     <div className="faq-container  mx-auto mt-[100px] p-4">
//     <h1 className="text-3xl font-bold text-center text-white mb-8">FAQ&apos;s</h1>

//       <div className="upperTable-container overflow-x-auto">
//         <table className="  min-w-full divide-y ">
        
//           <tbody className=" divide-y divide-gray-200">
//             {[
//               "What is deepfake technology?",
//               "How does your face swap feature work?",
//               "How can I change voices using your AI tool?",
//               "Can I use the deepfake AI for commercial purposes?",
//               "How long does it take to process a face swap or voice change?"
//             ].map((question, index) => (
//               <tr key={index}>
//                 <td className="index-table px-6 py-4 whitespace-nowrap text-center">{`0${index + 1}`}</td>
//                 <td className="question-table px-6 py-4 whitespace-nowrap ">{question}</td>
//                 <td className="index-table px-6 py-4 text-wrap text-center ">
//                   <button className="text-indigo-600 hover:text-indigo-900">+</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
    
//     </section>
//     </>
//   );
// };





