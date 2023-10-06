"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useBalance, useAccount } from "wagmi";
import { multicall } from "@wagmi/core";
import { formatEther } from "viem";
import { useDebounce } from "usehooks-ts";

import {
  PRESALE_CONTRACT,
  TXPR_CONTRACT,
  USDT_CONTRACT,
} from "@/contracts/addresses";
import TokenPreSale from "@/contracts/TokenPreSale.sol/TokenPreSale.json";
import TXPR from "@/contracts/TXPR.sol/TXPR.json";
import BuyWithBnb from "./buy-with-bnb";
import BuyWithUsdt from "./buy-with-usdt";

const presaleContract = {
  address: PRESALE_CONTRACT,
  abi: TokenPreSale.abi,
};

const txprContract = {
  address: TXPR_CONTRACT,
  abi: TXPR.abi,
};

const Exchange = () => {
  const [sellToken, setSellToken] = useState("BNB");
  const [amount, setAmount] = useState<number>();
  const [tsxprQuantity, setTsxprQuantity] = useState<number>();
  const { address } = useAccount();
  const buyTokenAmount = useDebounce(tsxprQuantity, 2000);

  const handleSellTokenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const token = e.target.value;
    setSellToken(token);
  };

  const { data: bnbBalance } = useBalance({
    address,
    watch: true,
  });

  const { data: usdtBalance } = useBalance({
    address,
    watch: true,
    token: USDT_CONTRACT,
  });

  const getHelperResults = async () => {
    const buyHelperResults = await multicall({
      contracts: [
        {
          ...presaleContract,
          functionName: "bnbBuyHelper",
          args: [BigInt(1), BigInt(tsxprQuantity as number)],
        },
        {
          ...presaleContract,
          functionName: "usdtBuyHelper",
          args: [BigInt(1), BigInt(tsxprQuantity as number)],
        },
      ],
    });
    let returnedAmount: bigint | undefined;
    if (sellToken === "BNB") {
      returnedAmount = buyHelperResults[0].result;
    } else {
      returnedAmount = buyHelperResults[1].result;
    }
    if (returnedAmount) {
      setAmount(Number(formatEther(returnedAmount)));
    }
  };

  useEffect(() => {
    if (tsxprQuantity) {
      getHelperResults();
    }
  }, [buyTokenAmount, sellToken]);

  return (
    <div className="flex flex-col w-full items-center">
      <form>
        <div>
          <h2 className="text-primary mb-2 text-2xl lg:text-3xl">Buy TXPR</h2>
          <section className="flex justify-between items-center flex-row w-full min-w-full bg-base-200 border-[1px] border-transparent hover:border-base-300 min-h-[96px] sm:p-8 p-4 rounded-[20px]">
            <label htmlFor="buy-token" className="sr-only"></label>

            <Image
              src={"/images/logo.svg"}
              alt={"TXPR token"}
              className="h-9 w-9 mr-2 rounded-md"
              height={9}
              width={9}
            />
            <select
              name="buy-token-select"
              id="buy-token-select"
              value={"TXPR"}
              className="mr-2 w-50 sm:w-full bg-transparent h-9 rounded-md"
            >
              <option value={"TXPR"} className="bg-base-300">
                TXPR
              </option>
            </select>
            <label htmlFor="buy-amount" className="sr-only"></label>
            <input
              id="buy-amount"
              type="number"
              value={tsxprQuantity}
              className="w-full bg-transparent outline-none border-[1px] border-base-content rounded-md h-9"
              onChange={(e) => {
                setTsxprQuantity(Number(e.target.value));
              }}
            />
          </section>
          <section className="flex justify-between mt-3 items-center flex-row w-full min-w-full bg-base-200 border-[1px] border-transparent hover:border-base-300 min-h-[96px] sm:p-8 p-4 rounded-[20px]">
            <label htmlFor="sell-select" className="sr-only"></label>
            <Image
              src={sellToken === "BNB" ? "/images/bnb.png" : "/images/usdt.png"}
              alt={`${sellToken} logo`}
              className="h-9 w-9 mr-2 rounded-md"
              height={9}
              width={9}
            />
            <div className="h-9 sm:w-full sm:mr-2">
              <select
                value={sellToken}
                name="sell-token-select"
                id="sell-token-select"
                className="mr-2 w-50 sm:w-full bg-transparent h-9 rounded-md"
                onChange={handleSellTokenChange}
              >
                <option value={"BNB"} className="bg-base-300">
                  BNB
                </option>
                <option value={"USDT"} className="bg-base-300">
                  USDT
                </option>
              </select>
            </div>
            <label htmlFor="sell-amount" className="sr-only"></label>
            <input
              id="sell-amount"
              readOnly={true}
              disabled
              type="number"
              value={amount}
              className="w-full outline-none bg-transparent border-[1px] border-base-content rounded-md h-9"
            />
          </section>
        </div>

        {sellToken === "BNB" ? (
          <BuyWithBnb
            sellTokenBalance={bnbBalance}
            sellTokenAmount={amount}
            buyTokenAmount={buyTokenAmount}
            side={sellToken}
          />
        ) : (
          <BuyWithUsdt
            sellTokenBalance={usdtBalance}
            sellTokenAmount={amount}
            buyTokenAmount={buyTokenAmount}
            side={sellToken}
          />
        )}
      </form>
    </div>
  );
};

export default Exchange;
