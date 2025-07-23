import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative z-10">
      <div className="container px-6 py-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Gethunza LLC</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            We provide modern accounting, web, and software solutions for
            growing businesses. Built for clarity, growth, and peace of mind.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
            Contact Us
          </h4>
          <p className="text-gray-600 text-sm">
            📍 Head Office: New York, NY · Karachi, PK
          </p>
          <p className="text-gray-600 text-sm">
            📍 Branch Office: Islamabad, Pakistan · Islamabad, PK
          </p>
          <p className="text-gray-600 text-sm">📞 +1 (555) 123-4567</p>
          <p className="text-gray-600 text-sm">
            ✉️{" "}
            <a
              href="mailto:support@gethunza.com"
              className="hover:underline transition text-[#009d85]"
            >
              support@briskledger.com
            </a>
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link
                href="/services"
                className="hover:text-[#009d85] transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#009d85] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#009d85] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#009d85] transition">
                Team
              </Link>
            </li>
          </ul>

          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-[#009d85] transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#009d85] transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#009d85] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:support@gethunza.com"
              className="text-gray-500 hover:text-[#009d85] transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} BriskLedger LLC. All rights reserved.
        Created by roziisho07
        <FaGithub className="inline-block w-4 h-4 cursor-pointer" href="#" />
      </div>
    </footer>
  );
}
