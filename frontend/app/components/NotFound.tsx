"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center">
        <div className="text-[#009d85] text-6xl mb-6 flex justify-center">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaArrowLeft /> Go Back
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#009d85] text-white rounded-lg hover:bg-[#007e6a] transition-colors"
          >
            <FaHome /> Return Home
          </Link>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 mb-2">Need accounting help?</p>
          <Link
            href="/contact"
            className="text-[#009d85] hover:underline font-medium"
          >
            Contact our team →
          </Link>
        </div>
      </div>
    </div>
  );
}
