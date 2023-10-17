"use client";

import React from "react";
import { useContractRead, useAccount } from "wagmi";
import {
  FaCoins,
  FaDollarSign,
  FaRocket,
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
  const { data: tokenBought } = useContractRead({
    ...presaleContract,
    functionName: "userVesting",
    args: [address as `0x${string}`, presaleId],
    watch: false,
  });

  console.log({ tokenBought });

  return (
    <>
      <div className="stats stats-vertical lg:stats-horizontal shadow mt-5">
        <StatCard
          value="$0.07"
          icon={FaDollarSign}
          title="Presale Price"
          description="Grab tokens at a discount!"
        />
        <StatCard
          value="$0.20"
          icon={FaRocket}
          title="Launch Price"
          description="Standard launch price."
        />
        {tokenBought && (
          <StatCard
            value={`${humanNumber(Number(formatEther(tokenBought[0])))}`}
            icon={FaShoppingCart}
            title="Tokens Bought"
            description="Tokens bought during presale"
          />
        )}
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow mb-5">
        {claimableAmount && Boolean(Number(claimableAmount)) ? (
          <ClaimAction claimableAmount={claimableAmount} />
        ) : (
          <StatCard
            value={"0"}
            icon={FaUnlock}
            title="Unlocked Tokens"
            description="Claim your tokens."
          />
        )}
        <StatCard
          value={
            tokenBalance
              ? `${humanNumber(Number(formatEther(tokenBalance)))}`
              : "0"
          }
          icon={FaCoins}
          title="Token Balance"
          description="Your TXPR balance"
        />
      </div>
    </>
  );
};

export default Statistic;
