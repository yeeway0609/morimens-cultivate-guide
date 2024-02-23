"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navBarHeight = "h-16";
  const sideBarTop = "pt-16";

  return (
    <nav>
      <div className={`fixed ${navBarHeight} z-50 flex w-full items-center bg-[#1D1D1D]`}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 text-white opacity-60 md:hidden"
        >
          {isOpen ? (
            <Image
              src="/icon-menu-close.svg"
              alt="close menu icon"
              width={36}
              height={36}
            />
          ) : (
            <Image
              src="/icon-menu.svg"
              alt="open menu icon"
              width={36}
              height={36}
            />
          )}
        </div>
        <div className="h-6 w-[0.5px] bg-white opacity-60 md:hidden"></div>
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image className="-ml-2" src="/logo.png" width={125} height={60} alt="Logo" />
        </Link>
      </div>
      <div
        className={`${isOpen ? "" : "-translate-x-full"} ${sideBarTop}
        fixed left-0 h-full w-60 flex flex-col bg-[#1D1D1D] px-4 transition z-20 text-xl`}
      >
        <Link
          href="/awakers"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${pathname.startsWith("/awakers") ? "text-Golden" : "text-white"}
            h-16 border-b-[0.5px] border-[#888888] py-4
          `}
        >
          <img className="absolute mt-1 h-8" src="/icon_awaker.svg" alt="Link's icon" />
          <p className="ml-8">喚醒體</p>
        </Link>
        <Link
          href="/destinyWheels"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${pathname.startsWith("/destinyWheels") ? "text-Golden" : "text-white"}
            h-16 border-b-[0.5px] border-[#888888] py-4
          `}
        >
          <img className="absolute ml-4 mt-1 h-6" src="/icon_destinyWheel.svg" alt="Link's icon" />
          <p className="ml-8">命輪</p>
        </Link>
        <Link
          href="/covenants"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${pathname.startsWith("/covenants") ? "text-Golden" : "text-white"}
            h-16 border-b-[0.5px] border-[#888888] py-4
          `}
        >
          <img className="absolute ml-4 mt-1 h-6" src="/icon_covenant.svg" alt="Link's icon" />
          <p className="ml-8">密契</p>
        </Link>
      </div>

      {/* translucent mask */}
      {isOpen ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsOpen(false)}></div>
      ) : (
        <></>
      )}
    </nav>
  );
}
