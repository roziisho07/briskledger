"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden p-2 py-4 text-gray-700 focus:outline-none lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden ">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-72 bg-white shadow-xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="bg-[#009d85] text-white p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gray-800">
                    FinancialPro
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaTimes className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 overflow-y-auto py-4 px-2">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <motion.li key={item.href} whileTap={{ scale: 0.97 }}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                          pathname === item.href
                            ? "bg-[#009d85]/10 text-[#009d85] font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{item.label}</span>
                        <FaChevronRight className="text-gray-400 text-sm" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3 text-sm">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-600 hover:text-[#009d85] p-2 rounded-lg hover:bg-gray-100"
                >
                  <FaPhoneAlt className="text-[#009d85] mr-3" />
                  +1 (234) 567-890
                </a>
                <a
                  href="mailto:info@accounting.com"
                  className="flex items-center text-gray-600 hover:text-[#009d85] p-2 rounded-lg hover:bg-gray-100"
                >
                  <FaEnvelope className="text-[#009d85] mr-3" />
                  info@accounting.com
                </a>
                <div className="text-xs text-gray-500 pt-2">
                  {/* Mon–Fri: 9AM–5PM */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
