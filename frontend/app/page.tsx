import { Suspense } from "react";
// import Link from "next/link";
// import { PortableText } from "@portabletext/react";
import QuickbooksLogo from "@/public/images/quickbooks-2.svg";
import XeroLogo from "@/public/images/xero.svg";
import FreshbooksLogo from "@/public/images/freshbooks-2021-logo.svg";

import { AllPosts, MorePosts } from "@/app/components/Posts";

import { citiesQuery, reviewQuery, settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

import StatsSection from "./components/Stats";
import ServiceCategories from "./components/ServicesCategories";

import { CitiesQueryResult, ReviewQueryResult } from "@/sanity.types";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUS";
import { ClientReviews } from "./components/Reviews";
import OurLocation from "./components/OurLocation";
import CitiesWeServe from "./components/Cities";
import { TaxCountdown } from "./components/TaxCounter";
import { ProcessSteps } from "./components/ProcessStep";
import { SupportedSoftware } from "./components/SupportedSoftware";
import { IndustryCarousel } from "./components/Industries";
import { FAQSection } from "./components/FaqSection";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });
  const { data: reviews }: { data: ReviewQueryResult } = await sanityFetch({
    query: reviewQuery,
  });
  const { data: cities }: { data: CitiesQueryResult } = await sanityFetch({
    query: citiesQuery,
  });

  return (
    <>
      <div className="relative">
        <Hero />
        <div>
          <TaxCountdown />
        </div>

        <div className="container ">
          <StatsSection />
        </div>

        <WhyChooseUs description={settings?.description} />
      </div>

      <div className="container ">
        <ServiceCategories />
      </div>
      <div>
        <TaxCountdown />
      </div>
      <ClientReviews reviews={reviews} />
      <SupportedSoftware
        softwareList={[
          { name: "QuickBooks", logo: QuickbooksLogo },
          { name: "Xero", logo: XeroLogo },
          { name: "FreshBooks", logo: FreshbooksLogo },
        ]}
      />
      <IndustryCarousel />
      <ProcessSteps />
      <div className="container">
        <ContactUs />
      </div>
      <>
        <FAQSection />
      </>
      <div>
        <OurLocation />
      </div>
      <div>
        <CitiesWeServe cities={cities} />
      </div>

      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{<MorePosts limit={3} skip="0" />}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
