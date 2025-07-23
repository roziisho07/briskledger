import { CitiesQueryResult } from "@/sanity.types";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CitiesWeServe({
  cities,
}: {
  cities: CitiesQueryResult;
}) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            Our Coverage
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cities We <span className="text-[#009d85]">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly supporting businesses across the U.S. with our expert
            accounting services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cities.map((city) => (
            <div
              key={city._id}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#009d85]/30 overflow-hidden"
            >
              {/* Background highlight on hover */}
              <div className="absolute inset-0 bg-[#009d85]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center">
                <FaMapMarkerAlt className="w-8 h-8 text-[#009d85] mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#009d85] transition-colors">
                  {city.name}
                </h3>
                {city.state && (
                  <p className="text-sm text-gray-500 mt-1">{city.state}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Don't see your city? We likely serve your area too!
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-[#009d85] text-[#009d85] hover:bg-[#009d85] hover:text-white font-medium rounded-full transition-colors duration-300">
            Contact Us to Verify
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
