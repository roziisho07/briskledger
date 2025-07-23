import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import bookkeepingImage from "../assets/images/finance.jpg";
import bookkeepingImage2 from "../assets/images/financeImage.jpg";

function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#009d85]/5 -skew-x-12 transform origin-top"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#009d85]/5 skew-x-12 transform origin-top"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Your{" "}
                <span className="text-[#009d85] relative inline-block">
                  Accountant
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#009d85]/30"></span>
                </span>{" "}
                Is Just a Click Away
              </h1>

              <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
                We manage your books, so you can focus on growing your business
                — with clear reports, on-time filings, and full financial
                clarity.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-lg">
                {[
                  "Clear Pricing. No Hidden Fees.",
                  "Scalable Services That Grow With You.",
                  "Support That Goes Beyond Tax Season.",
                  "Direct Communication With Your Accountant",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <FaCheckCircle className="text-[#009d85] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className=" grid grid-flow-row sm:grid-flow-col  gap-8 mt-10 justify-center lg:justify-between">
                <Link
                  href="/contact"
                  className="relative overflow-hidden duration-300 ease-in-out bg-[#009d85] px-8 py-4 rounded-full text-white text-lg font-semibold shadow-md hover:shadow-lg hover:bg-[#007e6a] transition-all group flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get a Free Quote{" "}
                    <FaArrowRight className="ml-3 text-xl transition-all duration-300 ease-in-out group-hover:translate-x-2" />
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="px-22 py-4 z-10 cursor-pointer rounded-full border-2 border-[#009d85] text-[#009d85] text-lg font-semibold hover:bg-[#009d85]/10 transition-colors flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Images with creative overlay effect */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Base image */}
              <div className="relative aspect-square rounded-lg shadow-xl overflow-hidden">
                <Image
                  src={bookkeepingImage}
                  alt="Accounting professionals working"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay image with offset */}
              <div className="absolute -bottom-6 -right-6 w-2/4 h-2/4 rounded-lg shadow-xl overflow-hidden border-4 border-white transform rotate-2 z-10 hover:rotate-0 transition-transform duration-300">
                <Image
                  src={bookkeepingImage2}
                  alt="Financial documents and calculator"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Satisfaction badge */}
              <div className="absolute -bottom-10 -right-10 bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-100 z-20">
                <div className="text-2xl font-bold text-[#009d85]">100%</div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
