// app/services/page.tsx
import React from "react";
import { Image } from "next-sanity/image";
import {
  FaCalculator,
  FaFileInvoice,
  FaChartLine,
  FaHandshake,
  FaIndustry,
  FaCheckCircle,
} from "react-icons/fa";
import { AllServicesQueryResult } from "@/sanity.types";
import { allServicesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import { IndustryCarousel } from "../components/Industries";
import Link from "next/link";

export default async function ServicesPage() {
  const { data: services }: { data: AllServicesQueryResult } =
    await sanityFetch({ query: allServicesQuery });

  const coreServices = [
    {
      icon: <FaFileInvoice className="w-8 h-8" />,
      title: "Bookkeeping Solutions",
      description:
        "Accurate daily/monthly bookkeeping with QuickBooks Online or Xero. Includes bank reconciliation and expense tracking.",
      href: "/services/bookkeeping",
      keywords: [
        "QuickBooks services",
        "monthly bookkeeping",
        "financial records",
      ],
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      title: "Tax Preparation Services",
      description:
        "Professional tax planning and filing for businesses, freelancers, and individuals. We maximize deductions and ensure full IRS compliance.",
      href: "/services/tax",
      keywords: ["small business taxes", "IRS filing", "tax deductions"],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Financial Reporting",
      description:
        "Customized profit/loss statements, balance sheets, and cash flow reports delivered monthly.",
      href: "/services/financial-reporting",
      keywords: ["financial statements", "business metrics", "KPI reporting"],
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Payroll Processing",
      description:
        "Full-service payroll with tax filings for W-2 and 1099 employees. Integrates with your accounting software.",
      href: "/services/payroll",
      keywords: ["online payroll", "payroll taxes", "employee payments"],
    },
    {
      icon: <FaIndustry className="w-8 h-8" />,
      title: "Business CFO Services",
      description:
        "Strategic financial guidance including budgeting, forecasting, and growth planning.",
      href: "/services/advisory",
      keywords: ["virtual CFO", "financial strategy", "business advisory"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Semantic H1 */}
      <section className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional{" "}
            <span className="text-[#009d85]">Accounting Services</span> for Your
            Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized financial solutions that help businesses save time,
            reduce costs, and make smarter decisions
          </p>
        </div>
      </section>

      {/* Core Services with Schema Markup */}
      <section
        className="py-16 bg-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Accounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From daily bookkeeping to strategic financial planning, we support
              businesses at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-8"
                itemScope
                itemType="https://schema.org/FinancialService"
              >
                <div
                  className="text-[#009d85] mb-4 text-4xl"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" itemProp="description">
                  {service.description}
                </p>
                <div className="hidden" itemProp="keywords">
                  {service.keywords.join(", ")}
                </div>
                <Link
                  href={service.href}
                  className="text-[#009d85] hover:underline font-medium flex items-center"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services */}
      <IndustryCarousel />

      {/* CTA Section with Conversion Focus */}
      <section className="bg-[#009d85] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Stress-Free Financial Management?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free consultation to discover how we can streamline your
            accounting processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#009d85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              aria-label="Contact our accounting team"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#009d85] transition-colors"
              aria-label="View our pricing plans"
            >
              See Pricing Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
