"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className=" py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Contact Info */}
        <div className="bg-gradient-to-br from-[#009d85] to-[#007e6a] text-white p-12 space-y-8 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">{"Let's Work Together"}</h2>
            <p className="text-lg text-white/90 max-w-md">
              {
                " Get in touch with our team for personalized financial solutions tailored to your business needs."
              }
            </p>
          </div>

          <div className="space-y-6 relative z-10">
            <ContactItem
              icon={<FaMapMarkerAlt className="text-xl" />}
              label="Our Office"
              value="123 Finance Street, New York, NY 10001"
            />
            <ContactItem
              icon={<FaPhoneAlt className="text-xl" />}
              label="Call Us"
              value="+1 (555) 123-4567"
              href="tel:+15551234567"
            />
            <ContactItem
              icon={<FaEnvelope className="text-xl" />}
              label="Email Us"
              value="hello@accountingpro.com"
              href="mailto:hello@accountingpro.com"
            />
          </div>

          <div className="flex space-x-4 pt-4 relative z-10">
            <SocialIcon icon={<FaFacebookF />} href="#" label="Facebook" />
            <SocialIcon icon={<FaLinkedinIn />} href="#" label="LinkedIn" />
            <SocialIcon icon={<FaInstagram />} href="#" label="Instagram" />
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-12 space-y-6 flex flex-col justify-center"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600">
              {" Fill out the form and we'll get back to you within 24 hours."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009d85]/50 focus:border-[#009d85] transition"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009d85]/50 focus:border-[#009d85] transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009d85]/50 focus:border-[#009d85] transition"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 flex items-center justify-center gap-2 ${
              isSubmitting ? "bg-[#007e6a]" : "bg-[#009d85] hover:bg-[#007e6a]"
            } text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane className="text-lg" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="text-white text-2xl p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition">
        {icon}
      </div>
      <div>
        <p className="text-sm uppercase tracking-wide font-semibold opacity-80 mb-1">
          {label}
        </p>
        <p className="text-lg font-medium group-hover:underline">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="hover:text-white">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialIcon({
  icon,
  href,
  label,
}: {
  icon: JSX.Element;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all text-lg"
    >
      {icon}
    </a>
  );
}
