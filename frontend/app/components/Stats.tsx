import { FaUsers, FaThumbsUp, FaHeadphones, FaGlobe } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaGlobe className="w-6 h-6 text-[#009d85]" />,
      value: "450+",
      label: "Clients Served",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-[#009d85]" />,
      value: "40+",
      label: "Team Members",
    },
    {
      icon: <FaThumbsUp className="w-6 h-6 text-[#009d85]" />,
      value: "98%",
      label: "Client Retention",
    },
    {
      icon: <FaHeadphones className="w-6 h-6 text-[#009d85]" />,
      value: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#f9f9f9] to-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#e5f6f3] rounded-full mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
