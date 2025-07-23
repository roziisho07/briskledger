import React, { Suspense } from "react";
import { AllPosts } from "../components/Posts";

function page() {
  return (
    <div>
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default page;
