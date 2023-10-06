"use client";

import React from "react";
import { useContractRead, useAccount } from "wagmi";
import {
  FaCoins,
  FaDollarSign,
  FaShoppingCart,
  FaUnlock,
} from "react-icons/fa";
import humanNumber from "human-number";
import { formatEther } from "viem";

import StatCard from "./stat-card";
import { TXPR_CONTRACT, presaleId } from "@/contracts/addresses";
import TXPR from "@/contracts/TXPR.sol/TXPR.json";
import { presaleContract } from "./buy-with-bnb";
import ClaimAction from "./claim-action";

const Statistic = () => {
  const { address } = useAccount();
  const { data: claimableAmount } = useContractRead({
    ...presaleContract,
    functionName: "claimableAmount",
    args: [address as `0x${string}`, presaleId],
    watch: false,
  });
  const { data: tokenBalance } = useContractRead({
    address: TXPR_CONTRACT,
    abi: TXPR.abi,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
    watch: false,
  });

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          value="$0.07"
          icon={<FaDollarSign className="w-8 h-8 text-primary-content" />}
          title="Presale Price"
          description="Early bird pricing: Grab tokens at a discount!"
        />
        <StatCard
          value="$0.20"
          icon={<FaShoppingCart className="w-8 h-8 text-primary-content" />}
          title="Launch Price"
          description="Tokens available at standard launch price."
        />
        {claimableAmount && Boolean(Number(claimableAmount)) ? (
          <ClaimAction claimableAmount={claimableAmount} />
        ) : (
          <StatCard
            value={"0"}
            icon={<FaUnlock className="w-8 h-8 text-primary-content" />}
            title="Claimable Tokens"
            description="Unlock your tokens after presale purchase."
          />
        )}
        <StatCard
          value={
            tokenBalance
              ? `${humanNumber(Number(formatEther(tokenBalance)))}`
              : "0"
          }
          icon={<FaCoins className="w-8 h-8 text-primary-content" />}
          title="Token Balance"
          description="See how many tokens are in your wallet."
        />
      </div>
    </div>
  );
};

export default Statistic;
