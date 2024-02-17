"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "喚醒體", href: "/awaker", icon: "/icon_awaker.svg" },
  { name: "命輪", href: "/destinyWheel", icon: "/icon_destinyWheel.svg" },
  { name: "密契", href: "/covenant", icon: "/icon_covenant.svg" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navBarHeight = "h-12";
  const sideBarTop = "pt-12";

  return (
    <nav>
      <div className={`fixed ${navBarHeight} z-10 flex w-full bg-[#1D1D1D]`}>
        <div className="text-white" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <Image src="/logo.svg" width={120} height={60} alt="Logo" />
      </div>
      <div
        className={`${isOpen ? "flex" : "hidden"} fixed flex-col ${sideBarTop} left-0 h-full w-64 bg-[#1D1D1D]`}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`
                h-12 border-b-[0.5px] border-white text-sm font-medium text-white hover:text-[#A95400]
                ${pathname === link.href ? "text-blue-600" : ""}
              `}
            >
              <Image src={link.icon} width={30} height={30} alt="Link's icon" />
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
