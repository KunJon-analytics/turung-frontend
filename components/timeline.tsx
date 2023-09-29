import React from "react";
import Phase from "./phase";
import { FaBomb, FaCoins, FaHandshake, FaRocket } from "react-icons/fa";

const Timeline = () => {
  return (
    <section className="items-center md:mt-80">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] font-bold opacity-10">
                ROADMAP
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                {" "}
                Turung <span className="text-primary"> Roadmap</span>{" "}
              </h1>
              <div className="flex mt-1 mb-10 overflow-hidden rounded w-14">
                <div className="flex-1 h-2 bg-purple-200"></div>
                <div className="flex-1 h-2 bg-purple-400"></div>
                <div className="flex-1 h-2 bg-purple-600"></div>
              </div>
            </div>
            <p className="mb-16 text-base text-center">
              We have a clear road map for our token.
            </p>
          </div>
        </div>
        <div className="w-full mx-auto lg:max-w-3xl">
          <Phase
            phase="1"
            body="TXPR token on Binance Smart Chain, Community and Team Building, token listing on exchanges."
            date="2013-10-03"
            icon={<FaCoins className="w-4 h-4 text-primary-focus" />}
            title="Initialization"
          />
          <Phase
            phase="2"
            body="Smartstore (beta) launch, Reception feature launch, Registration/trademark and licensing, and Partnership with exchanges."
            date="2013-10-03"
            icon={<FaRocket className="w-4 h-4 text-primary-focus" />}
            title="Product Launch"
          />
          <Phase
            phase="3"
            body="Partnerships with betting platforms, payment systems, sport/game clubs and Multi-Level Marketing (MLM) selling feature launch."
            date="2013-10-03"
            icon={<FaHandshake className="w-4 h-4 text-primary-focus" />}
            title="Partnerships and Marketing"
          />
          <Phase
            phase="4"
            body="Turung hardwares (POS + NFC + CARD), TURUNG pad feature, and Official sports sponsor."
            date="2013-10-03"
            icon={<FaBomb className="w-4 h-4 text-primary-focus" />}
            title="Expansion"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
