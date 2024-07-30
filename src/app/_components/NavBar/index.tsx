import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">{/* Your logo or brand */}</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Your navigation links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
