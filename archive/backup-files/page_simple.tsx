"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { SideNavigation } from "@/components/layout/SideNavigation";
import { TableOfContents } from "@/components/layout/TableOfContents";

export default function Home() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <SideNavigation
        isOpen={isSideNavOpen}
        onToggle={() => setIsSideNavOpen(!isSideNavOpen)}
      />

      <TableOfContents
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
      />

      <main className="pt-16 lg:ml-80 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-center">
            Cursor Rules 完全マスターガイド
          </h1>
          <p className="text-center mt-4 text-gray-600">
            レイアウト修正テスト中...
          </p>
        </div>
      </main>
    </div>
  );
}