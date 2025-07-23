// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";
import contactHero from "@/public/images/accountant2.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-96">
        <Image
          src={contactHero}
          alt="Contact our accounting team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#009d85]/80 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-white">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get personalized financial solutions from our expert accountants
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-600 text-lg">
                Our team typically responds within 24 hours. For urgent matters,
                please call us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mt-1 text-[#009d85] text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    123 Accounting Way
                    <br />
                    Financial District, NY 10001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009d85] hover:underline mt-3 inline-flex items-center font-medium"
                  >
                    <SiGooglemaps className="mr-2" /> View on map
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mt-1 text-[#009d85] text-2xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-2xl font-medium text-gray-800">
                    <a
                      href="tel:+12125550123"
                      className="hover:text-[#009d85] transition-colors"
                    >
                      +1 (212) 555-0123
                    </a>
                  </p>
                  <p className="text-gray-500 mt-2">
                    <FaClock className="inline mr-2 text-[#009d85]" />
                    Mon-Fri: 9am-5pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mt-1 text-[#009d85] text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-xl font-medium text-gray-800">
                    <a
                      href="mailto:info@accountingfirm.com"
                      className="hover:text-[#009d85] transition-colors"
                    >
                      info@accountingfirm.com
                    </a>
                  </p>
                  <p className="text-gray-500 mt-2">Response time: 24 hours</p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#009d85] transition-colors text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#009d85] transition-colors text-2xl"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#009d85] transition-colors text-2xl"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#009d85] text-white px-6 py-2 rounded-full font-medium">
              Quick Inquiry
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center pt-4">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                Thank you! Your message has been sent successfully. We'll
                contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009d85] focus:border-[#009d85] transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009d85] focus:border-[#009d85] transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009d85] focus:border-[#009d85] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009d85] focus:border-[#009d85] transition"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Preparation</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="payroll">Payroll Services</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009d85] focus:border-[#009d85] transition"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-[#007e6a]"
                      : "bg-[#009d85] hover:bg-[#007e6a]"
                  } text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office in the heart of the financial district
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl h-96 border-4 border-white">
            <iframe
              title="Our Office Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3749295865045!2d-74.00601568459432!3d40.71277577933032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1611111111111!5m2!1sen!2sus"
              className="border-0"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white border border-[#009d85] text-[#009d85] rounded-full font-medium hover:bg-[#009d85] hover:text-white transition-colors"
            >
              <SiGooglemaps className="mr-2" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#009d85] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a free consultation with one of our accounting experts
            today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#009d85] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Consultation
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
