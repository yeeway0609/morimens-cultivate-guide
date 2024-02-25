"use client";

import Link from "next/link";

export default function SectionNavBar() {
  const sections = ["簡介", "關鍵啟靈", "角色技能組", "建議命輪", "建議密契", "建議隊伍"];

  const handleScroll = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - 70,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed bottom-0 w-full h-10 bg-DarkGray opacity-90 flex justify-around items-center">
      {sections.map((section, index) => (
        <div
          className="text-[10px] text-white"
          onClick={() => handleScroll(section)}
        >
          {section}
        </div>
      ))}
    </nav>
  );
}
