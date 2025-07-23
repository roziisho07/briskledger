"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What accounting software do you work with?",
      answer:
        "We're certified in QuickBooks Online, Xero, FreshBooks, and NetSuite. We’re also experienced in integrating with a wide range of platforms via API connections or secure manual imports.",
    },
    {
      question: "How often will I receive financial reports?",
      answer:
        "We deliver monthly financial reports by the 15th of each month. In addition, we provide quarterly reviews and a comprehensive year-end summary to keep your finances on track.",
    },
    {
      question: "What's included in your basic accounting package?",
      answer:
        "Our basic package covers core bookkeeping, monthly financial statements, accounts payable and receivable management, and essential tax planning. You can also add services like payroll processing, budget forecasting, and virtual CFO support as needed.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We use bank-level 256-bit encryption, multi-factor authentication, and secure client portals to protect your data. Our team members undergo rigorous background checks and sign strict confidentiality agreements.",
    },
    {
      question: "What makes your firm different from others?",
      answer:
        "We blend modern accounting technology with personalized service. Every client is assigned a dedicated account manager and receives proactive financial insights, fast response times, and scalable support tailored to their business needs.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accounting <span className="text-[#009d85]">FAQs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to our most frequently asked questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none ${activeIndex === index ? "bg-gray-50" : "bg-white"}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#009d85] ml-4 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-500 ml-4 flex-shrink-0" />
                )}
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-6 pb-6 pt-0 ${activeIndex === index ? "block" : "hidden"}`}
                aria-hidden={activeIndex !== index}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Didn't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#009d85] hover:bg-[#007e6a] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Contact Our Team
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
