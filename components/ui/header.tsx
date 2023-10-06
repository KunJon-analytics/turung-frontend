import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./mobile-menu";
import logo from "@/public/images/logo.svg";
import HeaderButtons from "./header-buttons";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-end h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Turupay">
              <Image src={logo} alt="logo" />
              <p className="ml-2 text-primary">Turung</p>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow text-primary justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/docs/whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/presale"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Presale
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/turungcommunity"
                  target="_blank"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <HeaderButtons listStyle="flex grow justify-end flex-wrap items-center" />
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
