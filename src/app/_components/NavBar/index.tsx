import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">{/* Your logo or brand */}</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-end space-x-4">
                <Link
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  href="/about"
                >
                  About
                </Link>

                <Link
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  href="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  href="/rsvp"
                >
                  RSVP
                </Link>
                <Link
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  href="/admin"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
