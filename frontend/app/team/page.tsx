import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { sanityFetch } from "@/sanity/lib/live";
import { teamMembersQuery } from "@/sanity/lib/queries";
import { TeamMembersQueryResult } from "@/sanity.types";
import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/sanity/lib/utils";
import { urlFor } from "@/sanity/lib/sanityImageUrl";

export default async function TeamPage() {
  const { data: teamMembers }: { data: TeamMembersQueryResult } =
    await sanityFetch({ query: teamMembersQuery });

  // Get unique departments
  const departments = Array.from(
    new Set(teamMembers.map((member) => member.department).filter(Boolean))
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009d85]/5 to-[#007e6a]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="text-[#009d85]">Your Accounting Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified professionals dedicated to your financial success
          </p>
        </div>
      </section>

      {/* Team by Department */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {departments.map((dept) => (
          <section key={dept} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
              {dept} Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.department === dept)
                .map((member) => (
                  <div
                    key={member._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div className="relative h-64 w-full">
                      {member.image ? (
                        <Image
                          src={urlFor(member.image).url()}
                          width={640}
                          height={400}
                          className="object-cover w-full h-full"
                          priority={true}
                          // height={400}
                          sizes=" (max-width: 640px) 100vw, 640px"
                          alt={member.name || ""}
                        />
                      ) : null}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-[#009d85] font-medium mb-2">
                        {member.position}
                      </p>
                      {member.bio && (
                        <p className="text-gray-600 mb-4">{member.bio}</p>
                      )}

                      {Array.isArray(member.credentials) &&
                        member.credentials.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.credentials.map((cred, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                              >
                                {cred}
                              </span>
                            ))}
                          </div>
                        )}

                      <div className="flex space-x-4 pt-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#0077b5]"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-500 hover:text-[#009d85]"
                          >
                            <FaEnvelope className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
