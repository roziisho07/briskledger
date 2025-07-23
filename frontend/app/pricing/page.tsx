// app/pricing/page.tsx
import React from "react";
import {
  FaCheck,
  FaCalculator,
  FaFileInvoice,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      description: "Perfect for freelancers and sole proprietors",
      features: [
        "Monthly bookkeeping",
        "Quarterly financial statements",
        "Basic tax filing",
        "Email support",
        "Annual financial review",
      ],
      icon: <FaCalculator className="text-[#009d85] text-3xl" />,
      popular: false,
    },
    {
      name: "Growth",
      price: "$499",
      description: "Ideal for small businesses with employees",
      features: [
        "All Starter features",
        "Weekly bookkeeping",
        "Monthly financial reports",
        "Payroll processing (up to 5 employees)",
        "Dedicated account manager",
        "Tax planning sessions",
      ],
      icon: <FaFileInvoice className="text-[#009d85] text-3xl" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for growing businesses",
      features: [
        "All Growth features",
        "Unlimited payroll processing",
        "CFO advisory services",
        "Custom financial dashboards",
        "Same-day support",
        "Industry-specific compliance",
      ],
      icon: <FaChartLine className="text-[#009d85] text-3xl" />,
      popular: false,
    },
  ];

  const additionalServices = [
    {
      name: "Tax Preparation",
      description: "Comprehensive tax filing for businesses and individuals",
      price: "$299+",
      icon: <FaFileInvoice className="text-[#009d85] text-2xl" />,
    },
    {
      name: "Payroll Services",
      description: "Complete payroll processing with tax compliance",
      price: "$99+/month",
      icon: <FaHandshake className="text-[#009d85] text-2xl" />,
    },
    {
      name: "Financial Advisory",
      description: "Strategic planning for business growth",
      price: "$150/hour",
      icon: <FaChartLine className="text-[#009d85] text-2xl" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent <span className="text-[#009d85]">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, predictable pricing with no hidden fees
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              Packages
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accounting Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-lg border-2 ${
                  plan.popular
                    ? "border-[#009d85] transform md:-translate-y-4"
                    : "border-gray-200"
                } overflow-hidden transition-all hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute  top-0 pt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#009d85] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                  </p>
                  {plan.price !== "Custom" && (
                    <p className="text-gray-500 mb-6">per month</p>
                  )}
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-[#009d85] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold ${
                      plan.popular
                        ? "bg-[#009d85] hover:bg-[#007e6a] text-white"
                        : "bg-white border-2 border-[#009d85] text-[#009d85] hover:bg-[#009d85]/10"
                    } transition-colors`}
                  >
                    {plan.price === "Custom" ? "Get a Quote" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              À la Carte
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom solutions for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#009d85]/10 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-[#009d85] mb-6">
                  {service.price}
                </p>
                <button className="w-full py-2 px-4 border-2 border-[#009d85] text-[#009d85] rounded-lg font-semibold hover:bg-[#009d85]/10 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the monthly fee?",
                answer:
                  "Our monthly fees include all bookkeeping, financial reporting, and basic tax services as outlined in each package. Additional services like payroll processing or tax filing may incur extra charges.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade, downgrade, or cancel your plan at any time with 30 days notice. We'll prorate any differences in pricing.",
              },
              {
                question: "Do you offer discounts for annual payments?",
                answer:
                  "We offer a 10% discount for clients who pay annually. Contact us for more details about annual payment options.",
              },
              {
                question: "How do you handle tax season?",
                answer:
                  "All plans include basic tax filing. For complex tax situations, we offer discounted tax preparation services to our monthly clients.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#009d85]/10 rounded-xl p-8 text-center">
            <FiHelpCircle className="text-[#009d85] text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Need help choosing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with our team to determine the best
              accounting solution for your business.
            </p>
            <button className="bg-[#009d85] hover:bg-[#007e6a] text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#009d85] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who trust us with their accounting
            needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#009d85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="tel:+12125550123"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#009d85] transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
