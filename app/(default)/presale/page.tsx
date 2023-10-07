"use client";

import React from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Exchange from "@/components/presale/exchange";
import Progress from "@/components/presale/progress";
import Statistic from "@/components/presale/statistic";
import Timer from "@/components/timer";

const PresalePage = () => {
  const { address, isConnected } = useAccount();
  return (
    <div className="relative">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans mt-5 text-3xl text-primary font-bold tracking-tight sm:text-4xl">
            Presale Stage 1
          </h2>
          <Timer />
          {address || isConnected ? (
            <>
              <Progress />
              <Statistic />
              <Exchange />
            </>
          ) : (
            <div className="flex justify-center mt-10">
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresalePage;
