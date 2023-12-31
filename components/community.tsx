import React from "react";
import Image from "next/image";

import communityImage from "@/public/images/community.svg";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Community = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 md:mb-40 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={communityImage}
                  width={400}
                  height={360}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h2 mb-3 text-primary">Join our community</h3>
                  <p className="text-xl mb-4">
                    Join project community and be amongst the first to get a
                    free smartstore.
                  </p>
                  <div className="flex text-primary">
                    <Link
                      href={"https://twitter.com/turungcommunity"}
                      target="_blank"
                    >
                      <FaTwitter className="h-10 w-10" />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/company/turung"}
                      target="_blank"
                    >
                      <FaLinkedin className="h-10 w-10 ml-4" />
                    </Link>
                    <Link href={"https://t.me/turungcommunity"} target="_blank">
                      <FaTelegram className="h-10 w-10 ml-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
