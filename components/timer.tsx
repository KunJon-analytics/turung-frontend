"use client";

import React, { useState, useEffect } from "react";
import { useContractRead } from "wagmi";

import presaleContract from "../contracts/TokenPreSale.sol/TokenPreSale.json";
import { PRESALE_CONTRACT } from "@/contracts/addresses";
import Error from "./ui/error";

const Timer = () => {
  const { data, isError, isLoading } = useContractRead({
    address: PRESALE_CONTRACT,
    abi: presaleContract.abi,
    functionName: "presale",
    args: [BigInt(1)],
    watch: false,
  });

  // The state for our timer
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimeRemaining = (e: number) => {
    const now = new Date();
    const total = e - Math.floor(now.getTime() / 1000);
    const seconds = Math.floor(total % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 60 / 60) % 24);
    const days = Math.floor((total / 60 / 60 / 24) % 30);
    return {
      total,
      hours,
      minutes,
      seconds,
      days,
    };
  };

  const startTimer = (e: number) => {
    let { total, hours, minutes, seconds, days } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer((prev) => {
        return { ...prev, hours, minutes, seconds, days };
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        startTimer(Number(data[2]));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  if (isLoading || !data) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (isError) {
    return <Error message="An error occured while fetching the presale" />;
  }

  return (
    <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-2xl lg:text-5xl">
          <span style={{ "--value": timer.days } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-2xl lg:text-5xl">
          <span
            style={{ "--value": timer.hours } as React.CSSProperties}
          ></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-2xl lg:text-5xl">
          <span
            style={{ "--value": timer.minutes } as React.CSSProperties}
          ></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-2xl lg:text-5xl">
          <span
            style={{ "--value": timer.seconds } as React.CSSProperties}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
