"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sidebarLinks = [
  {
    title: "Getting Started",
    links: [
      { label: "Overview", href: "/docs" },
      { label: "Installation", href: "/docs#installation" },
      { label: "Quick Start", href: "/docs#quick-start" },
    ],
  },
  {
    title: "File Format",
    links: [
      { label: "Manual", href: "/docs/manual" },
      { label: "Request", href: "/docs/manual#request" },
      { label: "Response", href: "/docs/manual#response" },
      { label: "Captures", href: "/docs/manual#captures" },
      { label: "Asserts", href: "/docs/manual#asserts" },
      { label: "Import / Export", href: "/docs/manual#import-export" },
      { label: "Filters", href: "/docs/manual#filters" },
      { label: "Templates", href: "/docs/manual#templates" },
    ],
  },
  {
    title: "Tutorial",
    links: [
      { label: "Your First File", href: "/docs/tutorial" },
      { label: "Adding Asserts", href: "/docs/tutorial#asserts" },
      { label: "Modular Testing", href: "/docs/tutorial#modular" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Samples", href: "/docs/samples" },
      { label: "CLI Reference", href: "/docs/cli" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return pathname === base;
  };

  const sidebar = (
    <nav className="space-y-6">
      {sidebarLinks.map((section) => (
        <div key={section.title}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-600 mb-2">
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <button
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-y-auto p-6 transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>
    </>
  );
}
