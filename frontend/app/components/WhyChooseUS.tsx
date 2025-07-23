import { PortableText } from "@portabletext/react";
import { FaShieldAlt, FaBriefcase, FaClock, FaHandshake } from "react-icons/fa";

const benefits = [
  {
    icon: <FaShieldAlt className="text-[#009d85] w-6 h-6" />,
    title: "Reliable & Secure",
    text: "We follow industry best practices to keep your data protected and your books accurate.",
  },
  {
    icon: <FaBriefcase className="text-[#009d85] w-6 h-6" />,
    title: "Business-Centric Approach",
    text: "Our services are built to help small businesses scale efficiently.",
  },
  {
    icon: <FaClock className="text-[#009d85] w-6 h-6" />,
    title: "On-Time Deliverables",
    text: "We never miss deadlines. Timely reporting is the backbone of our service.",
  },
  {
    icon: <FaHandshake className="text-[#009d85] w-6 h-6" />,
    title: "Personalized Support",
    text: "Work directly with your accountant. No bots, no waiting lines.",
  },
];

export default function WhyChooseUs({ description }: { description: any }) {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          {description && (
            <div className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              <PortableText value={description} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f8fdfa] border border-[#e1f2ee] rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-[#e5f6f3] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
