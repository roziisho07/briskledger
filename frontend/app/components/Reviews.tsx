import Link from "next/link";
import { ReviewCard } from "./ReviewCard"; // Adjust import path as needed
import { ReviewQueryResult } from "@/sanity.types"; // Adjust import path as needed

export function ClientReviews({ reviews }: { reviews: ReviewQueryResult }) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009d85]/10 text-[#009d85] rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#009d85]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped
            grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews
            .filter((review) => review.isFeatured)
            .map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center px-8 py-4 border border-[#009d85] text-[#009d85] hover:bg-[#009d85] hover:text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            Read More Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
