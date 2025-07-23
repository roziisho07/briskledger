"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function OurLocation() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
                Visit Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#009d85]">Location</span>
              </h2>
              <p className="text-xl text-gray-600">
                {
                  " We're always happy to connect — whether it's a quick consultation, a long-term partnership, or just a friendly hello."
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="p-3 bg-[#009d85]/10 rounded-full text-[#009d85]">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Our Office
                  </h3>
                  <address className="not-italic text-gray-600">
                    Gethunza LLC
                    <br />
                    {"1234 Main Street, Suite 200"}
                    <br />
                   {" New York, NY 10001, USA"}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="p-3 bg-[#009d85]/10 rounded-full text-[#009d85]">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    {"Monday - Friday: 9:00 AM - 5:00 PM"}
                    <br />
                    {"Saturday - Sunday: Closed"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="tel:+12125550123"
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="p-3 bg-[#009d85]/10 rounded-full text-[#009d85]">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600">{"+1 (212) 555-0123"}</p>
                  </div>
                </a>

                <a
                  href="mailto:support@gethunza.com"
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="p-3 bg-[#009d85]/10 rounded-full text-[#009d85]">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">support@gethunza.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Gethunza LLC Office Location"
              width="100%"
              height="100%"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3749295865045!2d-74.00601568459432!3d40.71277577933032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1611111111111!5m2!1sen!2sus"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
              <a
                href="https://maps.google.com?q=1234+Main+Street,+Suite+200,+New+York,+NY+10001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009d85] font-medium flex items-center"
              >
                Open in Maps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
