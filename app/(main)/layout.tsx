import SiteNav from "@/components/siteNav";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen">
      <SiteNav />
      {children}
    </main>
  );
}