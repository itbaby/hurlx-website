import { DocsSidebar } from "@/components/docs-sidebar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - hurlx",
  description: "Learn how to use hurlx for HTTP testing and API engineering.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <DocsSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
