
const FaqTable = () => {
  return (
    <div className="container mx-auto mt-[100px] p-4">
      <div className="overflow-x-auto">
        <table className="border border-gray-500 min-w-full divide-y divide-gray-200">
        
          <tbody className="divide-y divide-gray-200">
            {[
              "What is deepfake technology?",
              "How does your face swap feature work?",
              "How can I change voices using your AI tool?",
              "Can I use the deepfake AI for commercial purposes?",
              "How long does it take to process a face swap or voice change?"
            ].map((question, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="border border-gray-500 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{question}</td>
                <td className="border border-gray-500 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FaqTable;
