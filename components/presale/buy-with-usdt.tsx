"use client";

import React from "react";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";

import { BuyButtonProps, presaleContract } from "./buy-with-bnb";
import {
  PRESALE_CONTRACT,
  USDT_CONTRACT,
  presaleId,
} from "@/contracts/addresses";
import Success from "../ui/success";
import Error from "../ui/error";

const BuyWithUsdt = ({
  sellTokenAmount,
  buyTokenAmount,
  sellTokenBalance,
  side,
}: BuyButtonProps) => {
  const { address } = useAccount();

  const { data: sellTokenAllowance } = useContractRead({
    address: USDT_CONTRACT,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address as `0x${string}`, PRESALE_CONTRACT],
  });

  const tokenAmountToApprove =
    parseEther(sellTokenAmount?.toString() || "0.07") -
    (sellTokenAllowance || BigInt("0"));

  const {
    config,
    isError: approvePrepareIsError,
    error: approvePrepareError,
  } = usePrepareContractWrite({
    address: USDT_CONTRACT,
    abi: erc20ABI,
    functionName: "approve",
    args: [PRESALE_CONTRACT, tokenAmountToApprove],
    enabled: sellTokenAllowance !== undefined,
  });

  const {
    write: approve,
    data: approveData,
    isError: approveIsError,
    error: approveError,
  } = useContractWrite(config);

  const { isLoading: approveIsLoading, isSuccess: approveIsSuccess } =
    useWaitForTransaction({
      hash: approveData?.hash,
    });

  const txprTokenAmount = BigInt(buyTokenAmount || "1");

  const {
    config: buyWithUsdtConfig,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...presaleContract,
    functionName: "buyWithUSDT",
    args: [presaleId, txprTokenAmount],
    enabled: Boolean(buyTokenAmount) && side === "USDT",
  });

  const { write, error, data, isError } = useContractWrite(buyWithUsdtConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  if (
    sellTokenAmount === undefined ||
    sellTokenBalance === undefined ||
    sellTokenAllowance === undefined
  ) {
    return (
      <button
        type="button"
        className="bg-primary mt-5 text-primary-content hover:bg-primary-focus font-bold py-2 px-4 rounded w-full"
        disabled
      >
        {"Input TXPR amount"}
      </button>
    );
  }
  if (parseEther(sellTokenAmount.toString()) >= sellTokenBalance.value) {
    return (
      <button
        type="button"
        className="bg-error mt-5 text-error-content hover:bg-error-focus font-bold py-2 px-4 rounded w-full"
        disabled
      >
        {"Insufficient USDT Balance"}
      </button>
    );
  }
  if (parseEther(sellTokenAmount.toString()) > sellTokenAllowance) {
    return (
      <>
        <button
          type="button"
          className="bg-primary mt-5 text-primary-content hover:bg-primary-focus font-bold py-2 px-4 rounded w-full"
          disabled={!approve || approveIsLoading}
          onClick={(e) => {
            e.preventDefault();
            approve?.();
          }}
        >
          {approveIsLoading
            ? "Increasing Allowance!!!"
            : "Increase USDT Allowance"}
        </button>
        {approveIsSuccess && (
          <Success
            description="Successfully increased USDT allowance!!!"
            title="Allowance Increased"
          />
        )}
        {approvePrepareIsError ||
          (approveIsError && (
            // <Error message={(approvePrepareError || approveError)?.message} />
            <Error message={"The transaction had an error"} />
          ))}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        className="bg-primary mt-5 text-primary-content hover:bg-primary-focus font-bold py-2 px-4 rounded w-full"
        onClick={(e) => {
          e.preventDefault();
          write?.();
        }}
        disabled={!write || isLoading}
      >
        {isLoading ? "Buying!!!" : "Buy with USDT"}
      </button>
      {isSuccess && (
        <Success
          description="Successfully bought TXPR tokens with USDT!!!"
          title="Tokens Bought"
        />
      )}
      {isPrepareError ||
        (isError && (
          // <Error message={(prepareError || error)?.message} />
          <Error message={"The transaction had an error"} />
        ))}
    </>
  );
};

export default BuyWithUsdt;
