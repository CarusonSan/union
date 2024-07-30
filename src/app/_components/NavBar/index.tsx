"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-antique-brass-400">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-shrink-0">{/* Your logo or brand */}</div>
        <div className="ml-10 flex items-end space-x-4">
          {pathname === "/" ? (
            <Link
              className="bg-antique-brass-600 rounded-md px-3 py-2 text-sm font-medium"
              href="/rsvp"
            >
              RSVP
            </Link>
          ) : (
            <Link
              className="bg-antique-brass-600 rounded-md px-3 py-2 text-sm font-medium"
              href="/"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
