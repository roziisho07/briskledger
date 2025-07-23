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

      {/* Team Section
      {teamMembers && teamMembers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
                Professionals
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated experts committed to your financial success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                >
                  {member.image?.asset && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image.asset.url}
                        alt={member.name || "Team member photo"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#009d85] font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-gray-500 hover:text-[#009d85]"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-500 hover:text-[#009d85]"
                        >
                          <span className="sr-only">Email</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

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
            <a
              href="/contact"
              className="bg-white text-[#009d85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#009d85] transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
