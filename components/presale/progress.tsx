"use client";

import React, { useState, useEffect } from "react";
import { useContractRead } from "wagmi";

import TokenPreSale from "@/contracts/TokenPreSale.sol/TokenPreSale.json";
import { PRESALE_CONTRACT, presaleId } from "@/contracts/addresses";

const Progress = () => {
  const [progress, setProgress] = useState("0");
  const { data, isLoading } = useContractRead({
    address: PRESALE_CONTRACT,
    abi: TokenPreSale.abi,
    functionName: "presale",
    args: [presaleId],
    watch: true,
  });

  useEffect(() => {
    if (data) {
      const inSale = Number(data[6]);
      const total = Number(data[4]);
      const getProgress = () => {
        const difference = total - inSale;
        if (difference === 0) {
          return "0";
        }
        const salePercentage = Math.floor((difference * 100) / total);
        return salePercentage.toString();
      };

      setProgress(getProgress());
    }
  }, [data]);

  if (isLoading || !data) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="mt-5 flex justify-center items-center">
      <div>Tokens Sold: </div>
      <progress
        className="progress item-center h-5 progress-success w-full"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default Progress;
