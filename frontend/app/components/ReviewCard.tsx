import { FaUser } from "react-icons/fa";
import { ReviewQueryResult } from "@/sanity.types";

type Review = ReviewQueryResult[number];

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group relative h-full p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#009d85]/30">
      {/* Background highlight on hover */}
      <div className="absolute inset-0 bg-[#009d85]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Quote icon */}
        <div className="mb-4 text-[#009d85]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-8.983z" />
          </svg>
        </div>

        {/* Content */}
        <blockquote className="mb-6 flex-grow">
          <p className="text-gray-600 italic">
            "
            {review.content?.substring(0, 150) || "No review content provided."}
            {review.content && review.content.length > 150 ? "..." : ""}"
          </p>
        </blockquote>

        {/* Rating */}
        <div className="flex gap-1 text-yellow-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < (review.rating || 0)} />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            {review.rating || 0}/5
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-4" />

        {/* Author */}
        <div className="flex items-center gap-4 mt-auto">
          {review.profilePhoto?.asset?._ref ? (
            <img
              src={getImageUrl(review.profilePhoto.asset._ref)}
              alt={review.author || "Anonymous"}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#009d85]/30 group-hover:border-[#009d85]/50 transition-colors"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-[#009d85]/10 flex items-center justify-center text-[#009d85] border-2 border-[#009d85]/20 group-hover:border-[#009d85]/30 transition-colors">
              <FaUser className="w-5 h-5" />
            </div>
          )}

          <div>
            <h4 className="font-medium text-gray-900 group-hover:text-[#009d85] transition-colors">
              {review.author || "Anonymous"}
            </h4>
            {/* {review.company && (
              <p className="text-sm text-gray-500">{review.company}</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Star Icon Component
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-5 h-5 ${filled ? "fill-current" : "strokeCurrent fill-none stroke-gray-300"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={filled ? 0 : 1.5}
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

// Image URL helper (replace with your Sanity image builder)
function getImageUrl(ref: string) {
  const id = ref
    .replace("image-", "")
    .replace(/-jpg$/, ".jpg")
    .replace(/-png$/, ".png")
    .replace(/-webp$/, ".webp");
  return `https://cdn.sanity.io/images/YOUR_PROJECT_ID/YOUR_DATASET/${id}`;
}
