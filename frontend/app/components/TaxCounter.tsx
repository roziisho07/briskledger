"use client";

import { useState, useEffect } from "react";
import { FaExclamationTriangle, FaCalendarAlt } from "react-icons/fa";

export function TaxCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    isDeadlineToday: false,
    isDeadlinePassed: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      // April 15 deadline (month is 0-indexed)
      let nextDeadline = new Date(today.getFullYear(), 3, 15, 23, 59, 59);

      // If deadline passed this year, set for next year
      if (today > nextDeadline) {
        nextDeadline.setFullYear(nextDeadline.getFullYear() + 1);
      }

      const difference = nextDeadline.getTime() - today.getTime();
      const isDeadlineToday = difference < 86400000 && difference > 0; // Less than 24 hours
      const isDeadlinePassed = difference <= 0;

      setTimeLeft({
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        isDeadlineToday,
        isDeadlinePassed,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getMessage = () => {
    if (timeLeft.isDeadlinePassed) {
      return (
        <>
          <FaExclamationTriangle className="inline mr-2" />
          <span>Tax deadline has passed!</span>
        </>
      );
    }

    if (timeLeft.isDeadlineToday) {
      return (
        <>
          <FaExclamationTriangle className="inline mr-2" />
          <span>Tax deadline is today!</span>
          <span className="ml-2">
            {timeLeft.hours}h {timeLeft.minutes}m left
          </span>
        </>
      );
    }

    return (
      <>
        <FaCalendarAlt className="inline mr-2" />
        <span>
          <span className="font-bold">{timeLeft.days} days</span> left until tax
          deadline
        </span>
      </>
    );
  };

  return (
    <div
      className={`bg-gradient-to-r ${
        timeLeft.isDeadlineToday || timeLeft.isDeadlinePassed
          ? "from-red-600 to-red-500"
          : "from-[#009d85] to-[#007e6a]"
      } text-white py-3`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium flex items-center">
            {getMessage()}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white text-[#009d85] rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap"
          >
            Get Help Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
