"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navBarHeight = "h-12";
  const sideBarTop = "pt-12";

  return (
    <nav>
      <div className={`fixed ${navBarHeight} z-50 flex w-full items-center bg-[#1D1D1D]`}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 text-white opacity-60 md:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
        <div className="h-4 w-[0.5px] bg-white opacity-60 md:hidden"></div>
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image className="-ml-2" src="/logo.svg" width={100} height={48} alt="Logo" />
        </Link>
      </div>
      <div className={`${isOpen ? "" : "-translate-x-full"} ${sideBarTop} fixed left-0 h-full w-60 flex flex-col bg-[#1D1D1D] px-4 transition z-20`}>
        <Link
          href="/awakers"
          className={`
            ${pathname === "/awakers" ? "text-Golden" : "text-white"}
            h-14 border-b-[0.5px] border-[#888888] py-4 text-base
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="absolute h-8" src="/icon_awaker.svg" alt="Link's icon" />
          <p className="absolute ml-6">喚醒體</p>
        </Link>
        <Link
          href="/destinyWheels"
          className={`
            ${pathname === "/destinyWheels" ? "text-Golden" : "text-white"}
            h-14 border-b-[0.5px] border-[#888888] py-4 text-base
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="absolute ml-4 h-6" src="/icon_destinyWheel.svg" alt="Link's icon" />
          <p className="ml-6">命輪</p>
        </Link>
        <Link
          href="/covenants"
          className={`
            ${pathname === "/covenants" ? "text-Golden" : "text-white"}
            h-14 border-b-[0.5px] border-[#888888] py-4 text-base
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="absolute ml-4 h-6" src="/icon_covenant.svg" alt="Link's icon" />
          <p className="ml-6">密契</p>
        </Link>
      </div>

      {/* translucent mask */}
      {isOpen ? <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div> : <></>}
    </nav>
  );
}
