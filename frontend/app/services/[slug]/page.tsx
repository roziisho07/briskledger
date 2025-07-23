import type { Metadata } from "next";
import { Image } from "next-sanity/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { FaCheckCircle, FaPhoneAlt, FaQq } from "react-icons/fa";

import { servicesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import { ServicesQueryResult } from "@/sanity.types";
import { ProcessSteps } from "@/app/components/ProcessStep";
import WhyChooseUs from "@/app/components/WhyChooseUS";
import CTA from "@/app/components/Cta";
import BlockRenderer from "@/app/components/BlockRenderer";
import { FAQSection } from "@/app/components/FaqSection";

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data: service }: { data: ServicesQueryResult | null } =
    await sanityFetch({
      query: servicesQuery,
      params: { slug: params.slug },
      perspective: "published",
      stega: false,
    });

  if (!service) return notFound();

  return {
    title: service.title,
    description: service.metaDescription || service.excerpt || "",
  };
}

// Page Component
export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: service }: { data: ServicesQueryResult | null } =
    await sanityFetch({
      query: servicesQuery,
      params: { slug: params.slug },
      perspective: "published",
      stega: false,
    });

  if (!service) return notFound();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
                Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{service.excerpt}</p>
              <a
                href="/contact"
                className="inline-flex items-center bg-[#009d85] hover:bg-[#007e6a] text-white px-8 py-4 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Get Started
              </a>
            </div>
            {service.image && (
              <div className="md:w-1/2 relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(service.image).url()}
                  alt={service.title || `${service.title} service`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="prose max-w-none">
                {service.body && <PortableText value={service.body} />}
              </div>
            </div>

            {/* Sidebar with Benefits */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-[#009d85] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-[#009d85]/5 p-6 rounded-lg border border-[#009d85]/10">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Ready to get started?
                  </h4>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-[#009d85] hover:bg-[#007e6a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FAQSection />
        <ProcessSteps />
      </section>
    </div>
  );
}
