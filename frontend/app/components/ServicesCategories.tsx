import Link from "next/link";
import {
  BookOpen,
  FileBarChart2,
  ShieldCheck,
  Settings,
  Puzzle,
} from "lucide-react";

const services = [
  {
    title: "Professional Bookkeeping Services",
    icon: <BookOpen className="w-10 h-10" />,
    href: "/services/bookkeeping-accounting",
    description:
      "Accurate QuickBooks and Xero management for stress-free financial records",
    keywords: [
      "remote bookkeeping",
      "small business accounting",
      "monthly financial statements",
    ],
  },
  {
    title: "Tax Preparation & Compliance",
    icon: <ShieldCheck className="w-10 h-10" />,
    href: "/services/tax-compliance",
    description:
      "Year-round tax planning and IRS filing for businesses and 1099 contractors",
    keywords: ["small business taxes", "tax deductions", "IRS compliance"],
  },
  {
    title: "Virtual CFO Services",
    icon: <FileBarChart2 className="w-10 h-10" />,
    href: "/services/virtual-cfo",
    description:
      "Strategic financial forecasting and cash flow management for growth",
    keywords: ["fractional CFO", "financial planning", "business advisory"],
  },
  {
    title: "Payroll Solutions",
    icon: <Settings className="w-10 h-10" />,
    href: "/services/payroll-software",
    description:
      "Automated payroll processing with tax filings for W-2 and 1099 employees",
    keywords: ["online payroll", "Gusto alternative", "payroll tax compliance"],
  },
  {
    title: "Industry-Specific Accounting",
    icon: <Puzzle className="w-10 h-10" />,
    href: "/services/industry-solutions",
    description:
      "Specialized accounting for healthcare, real estate, and e-commerce businesses",
    keywords: [
      "medical practice accounting",
      "real estate bookkeeping",
      "SAAS financials",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Semantic heading structure with keywords */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            Financial Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert <span className="text-[#009d85]">Accounting Solutions</span>{" "}
            for Your Business
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored bookkeeping, tax, and CFO services designed to help
            businesses
            <span className="font-semibold text-[#009d85]">
              {" "}
              save time and reduce costs
            </span>
            .
          </p>
        </header>

        {/* Service cards with enhanced semantics */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          itemScope
          itemType="https://schema.org/Service"
        >
          {services.map((service, index) => (
            <article
              key={index}
              itemScope
              itemProp="hasOfferCatalog"
              itemType="https://schema.org/OfferCatalog"
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#009d85]/30"
            >
              <Link href={service.href} className="block h-full">
                <div className="absolute inset-0 bg-[#009d85]/5 group-hover:bg-[#009d85]/10 transition-colors duration-300"></div>

                <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                  <div
                    className="mb-6 p-4 bg-[#009d85]/10 rounded-full group-hover:bg-[#009d85]/20 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-[#009d85] transition-colors duration-300 mb-3">
                    <span itemProp="name">{service.title}</span>
                  </h2>
                  <p className="text-gray-600 mb-6" itemProp="description">
                    {service.description}
                  </p>
                  {/* Hidden keywords for SEO (not visible to users) */}
                  <div className="hidden" itemProp="keywords">
                    {service.keywords.join(", ")}
                  </div>
                  <div className="mt-auto text-[#009d85] font-medium flex items-center group-hover:underline">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA with tracking attributes */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-[#009d85] hover:bg-[#007e6a] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="View all accounting services"
            data-umami-event="homepage-services-cta"
          >
            Explore All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
