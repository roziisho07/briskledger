"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import nonprofit from "../assets/images/nonprofit.webp";
import healthcare from "../assets/images/healthcare.webp";
import resturants from "../assets/images/resturants.webp";
import eCommerce from "../assets/images/ecommerce.webp";
import realestate from "../assets/images/realestate.webp";
// import healthcare from "../assets/images/healthcare.webp";

const industries = [
  {
    id: 1,
    name: "Healthcare",
    description:
      "HIPAA-compliant accounting for medical practices, clinics, and providers",
    image: healthcare,
    services: [
      "Medical billing analysis",
      "Practice valuation",
      "Tax compliance",
    ],
  },
  {
    id: 2,
    name: "Restaurants",
    description: "Financial solutions for F&B businesses of all sizes",
    image: resturants,
    services: ["Inventory costing", "Sales tax filing", "Payroll management"],
  },
  {
    id: 3,
    name: "E-Commerce",
    description: "Multi-platform financial tracking for online sellers",
    image: eCommerce,
    services: ["COGS analysis", "Marketplace reconciliation", "VAT handling"],
  },
  {
    id: 4,
    name: "Real Estate",
    description: "Portfolio accounting for investors and developers",
    image: realestate,
    services: ["Depreciation schedules", "K-1 preparation", "1031 exchanges"],
  },
  {
    id: 5,
    name: "Non-Profits",
    description: "Fund accounting and grant compliance specialists",
    image: nonprofit,
    services: [
      "Form 990 preparation",
      "Restricted fund tracking",
      "Audit readiness",
    ],
  },
];

export function IndustryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            Industry Expertise
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Specialized <span className="text-[#009d85]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored accounting for your unique industry requirements
          </p>
        </div>

        <div
          className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slides */}
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`absolute inset-0 transition-opacity duration-500 flex flex-col md:flex-row ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Image */}
              <div className="relative h-1/2 md:h-full md:w-1/2">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="h-1/2 md:h-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {industry.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {industry.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-[#009d85] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>

                <button className="self-start px-6 py-3 bg-[#009d85] hover:bg-[#007e6a] text-white rounded-full font-medium transition-colors">
                  Get {industry.name} Solutions
                </button>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10"
            aria-label="Previous industry"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10"
            aria-label="Next industry"
          >
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#009d85] w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
