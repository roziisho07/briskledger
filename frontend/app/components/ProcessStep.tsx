"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaChartLine,
  FaFileSignature,
  FaRocket,
} from "react-icons/fa";

export function ProcessSteps() {
  const steps = [
    {
      icon: <FaPhoneAlt className="w-8 h-8" />,
      title: "Consultation",
      description: "Free initial discovery call to understand your needs",
      color: "text-blue-500",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Analysis",
      description: "Comprehensive review of your financial situation",
      color: "text-purple-500",
    },
    {
      icon: <FaFileSignature className="w-8 h-8" />,
      title: "Proposal",
      description: "Customized plan tailored to your business goals",
      color: "text-green-500",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Implementation",
      description: "Seamless execution with ongoing support",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Simple <span className="text-[#009d85]">4-Step Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamlined accounting solutions designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#009d85]/30"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#009d85] text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`${step.color} mb-6 text-4xl flex justify-center`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#009d85] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={"/contact"}
            className="inline-flex items-center px-8 py-4 bg-[#009d85] hover:bg-[#007e6a] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
