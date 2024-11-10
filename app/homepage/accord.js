import { useState } from "react";
const faqs = [
  {
    title: "How much does it cost to set up a store?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "What kind of digital products can I sell?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "Do I need technical skills to use the platform?",
    content:
      "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
  },
  {
    title: "Is there a limit to the number of products I can list?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "How do I receive payments for my sales?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "Can I sell internationally on this marketplace?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "What support and resources are available for sellers?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
  {
    title: "Is there a review process for uploaded products?",
    content:
      "It is absolutely free to set up a store on our platform. You can create your store and start selling your products without any cost.",
  },
];
function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 text-black bg-white  rounded-2xl m-2 p-1 transition-all font-semibold">
      <button
        className="flex items-center justify-between w-full p-4 text-left bg-white  rounded-2xl hover:bg-gray-100"
        onClick={toggle}
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transition-all duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
}

export function Accordion() {
  return (
    <div className="flex flex-col text-center p-2 lg:flex-row items-center justify-center mt-9">
      <div className="lg:w-1/2 w-full m-0 lg:mr-16 ">
        <div className="text-4xl font-semibold text-primary">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="font-semibold text-lg">
          Quick answers to questions you may have. Can’t find what you're
          looking for? Check out our full documentation
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto ">
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              title={faq.title}
              content={faq.content}
            ></AccordionItem>
          );
        })}
      </div>
    </div>
  );
}
