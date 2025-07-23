import Link from "next/link";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MobileMenu from "./MobileNav";

export default async function Header() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <>
      <header className="fixed z-50  top-0 w-full bg-white/90 backdrop-blur-md shadow-sm">
        {/* Top contact bar */}
        <div className="bg-[#009d85] text-white text-sm">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="flex items-center hover:underline"
              >
                <FaPhoneAlt className="mr-2" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@accounting.com"
                className="flex items-center hover:underline"
              >
                <FaEnvelope className="mr-2" />
                info@accounting.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Mon-Fri: 9AM-5PM</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Tagline */}
            <Link href="/" className="flex items-center group">
              <div className="bg-[#009d85] text-white p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform">
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
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800 group-hover:text-[#009d85] transition-colors">
                  {settings?.title || "BriskLedger"}
                </span>
                <span className="text-xs font-medium text-gray-500 group-hover:text-[#009d85] transition-colors">
                  Remote Accounting & Bookkeeping
                </span>
              </div>
            </Link>
            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-[#009d85] font-medium transition-colors relative group"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009d85] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-[#009d85] font-medium transition-colors relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009d85] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-[#009d85] font-medium transition-colors relative group"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009d85] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-700 hover:text-[#009d85] font-medium transition-colors relative group"
                  >
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009d85] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="bg-[#009d85] hover:bg-[#007e6a] text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg flex items-center"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}
