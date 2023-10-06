"use client";

import React from "react";
import { parseEther } from "viem";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import TokenPreSale from "@/contracts/TokenPreSale.sol/TokenPreSale.json";
import { PRESALE_CONTRACT, presaleId } from "@/contracts/addresses";
import PresaleAlerts from "./presale-alerts";

type FetchBalanceResult = {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

export interface BuyButtonProps {
  sellTokenBalance: FetchBalanceResult | undefined;
  sellTokenAmount: number | undefined;
  buyTokenAmount: number | undefined;
  side?: string;
}

export const presaleContract = {
  address: PRESALE_CONTRACT,
  abi: TokenPreSale.abi,
};

const BuyWithBnb = ({
  sellTokenBalance,
  sellTokenAmount,
  buyTokenAmount,
  side,
}: BuyButtonProps) => {
  let value: bigint;
  value = parseEther("0.0004");
  if (sellTokenAmount) {
    value = parseEther((sellTokenAmount + 0.001).toString());
  }
  const txprTokenAmount = BigInt(buyTokenAmount || "1");

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...presaleContract,
    functionName: "buyWithBnb",
    args: [presaleId, txprTokenAmount],
    enabled: Boolean(buyTokenAmount) && side === "BNB",
    value,
  });

  const { write, error, data, isError } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <>
      {sellTokenAmount === undefined || sellTokenBalance === undefined ? (
        <button
          type="button"
          disabled
          className="bg-info mt-5 text-info-content hover:bg-error-focus font-bold py-2 px-4 rounded w-full"
        >
          {"Input TXPR amount"}
        </button>
      ) : parseEther(sellTokenAmount.toString()) >= sellTokenBalance.value ? (
        <button
          type="button"
          disabled
          className="bg-error text-error-content mt-5 hover:bg-error-focus font-bold py-2 px-4 rounded w-full"
        >
          {"Insufficient Balance"}
        </button>
      ) : (
        <button
          type="button"
          className="bg-primary mt-5 mb-5 text-primary-content hover:bg-primary-focus font-bold py-2 px-4 rounded w-full"
          disabled={!write || isLoading}
          onClick={(e) => {
            e.preventDefault();
            write?.();
          }}
        >
          {isLoading ? "Buying..." : "Buy with BNB"}
        </button>
      )}
      <PresaleAlerts
        isSuccess={isSuccess}
        isError={isError}
        isPrepareError={isPrepareError}
        error={error}
        prepareError={prepareError}
      />
    </>
  );
};

export default BuyWithBnb;
