"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type Software = {
  name: string;
  logo: string;
};

type SupportedSoftwareProps = {
  softwareList: Software[];
};

export function SupportedSoftware({ softwareList }: SupportedSoftwareProps) {
  // const softwareList = [
  //   { name: "QuickBooks", logo: "/quickbooks-2.svg" },
  //   { name: "Xero", logo: "/xero-logo.svg" },
  //   { name: "FreshBooks", logo: "/freshbooks-logo.svg" },
  //   { name: "Wave", logo: "/wave-logo.svg" },
  //   { name: "Zoho Books", logo: "/zoho-logo.svg" },
  //   { name: "Sage", logo: "/sage-logo.svg" },
  // ];

  return (
    <div className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/5 py-8 px-6 rounded-xl border border-[#009d85]/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaCheckCircle className="text-[#009d85] text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">
            Compatible With Your Favorite Tools
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {softwareList.map((software) => (
            <div
              key={software.name}
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-[#009d85]/40 transition-colors"
            >
              {software.logo ? (
                <Image
                  src={software.logo}
                  alt={software.name}
                  className="h-8 object-contain"
                  width={40}
                  height={40}
                  sizes="(max-width: 768px) 50px, 100px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (
                      (e.target as HTMLImageElement)
                        .nextElementSibling as HTMLElement
                    ).style.display = "block";
                  }}
                />
              ) : null}
              <span className="text-sm font-medium text-gray-700 hidden">
                {software.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
