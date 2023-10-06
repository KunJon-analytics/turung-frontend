import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-primary mt-auto">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3">
          <Link
            href="https://t.me/turungcommunity"
            className=""
            target="_blank"
          >
            <span className="sr-only">Telegram</span>
            <FaTelegram className="h-6 w-6" />
          </Link>

          <Link
            href="https://twitter.com/turungcommunity"
            className=""
            target="_blank"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/turung"
            className=""
            target="_blank"
          >
            <span className="sr-only">Linkedin</span>
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8  md:order-1 md:mt-0 ">
          <p className="text-center text-base-content">&copy; Turung. 2023.</p>
        </div>
      </div>
    </footer>
  );
}
