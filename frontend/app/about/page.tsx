// app/about/page.tsx
import React from "react";
import Image from "next/image";
import {
  FaUsers,
  FaHistory,
  FaChartPie,
  FaHandshake,
  FaAward,
} from "react-icons/fa";
import Link from "next/link";

export default async function AboutPage() {
  //   const teamMembers = await sanityFetch<TeamMember[]>({ query: teamQuery });

  const coreValues = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and ethical conduct in all our dealings",
    },
    {
      icon: <FaChartPie className="w-8 h-8" />,
      title: "Expertise",
      description:
        "Our team maintains deep technical knowledge and stays current with industry changes",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Client Focus",
      description:
        "Your success is our priority - we tailor solutions to your unique needs",
    },
  ];

  const milestones = [
    { year: "2010", event: "Founded with just 3 team members" },
    { year: "2014", event: "Expanded to second location" },
    { year: "2018", event: "Reached 100+ business clients" },
    { year: "2022", event: "Launched specialized industry divisions" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#009d85]">Our Firm</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted accounting professionals dedicated to your financial success
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/office-team.jpg"
                  alt="Our accounting team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Trust Since 2010
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded with a vision to provide exceptional accounting
                services, our firm has grown from a small local practice to a
                respected regional firm serving businesses across multiple
                industries.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                What started as three passionate accountants in a single office
                has blossomed into a team of dedicated professionals committed
                to delivering accurate, timely, and strategic financial
                guidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-[#009d85] font-bold text-xl mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-8 text-center"
              >
                <div className="text-[#009d85] mb-4 text-4xl mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
              Recognition
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Accolades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <FaAward className="text-[#009d85] text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Best Accounting Firm 2023
                </h3>
                <p className="text-gray-600">Regional Business Awards</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <FaAward className="text-[#009d85] text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Top 100 Firms
                </h3>
                <p className="text-gray-600">Accounting Today</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <FaAward className="text-[#009d85] text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Client Service Excellence
                </h3>
                <p className="text-gray-600">Professional Association</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <FaAward className="text-[#009d85] text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Fastest Growing
                </h3>
                <p className="text-gray-600">Business Journal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#009d85] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our expertise can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#009d85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#009d85] transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
