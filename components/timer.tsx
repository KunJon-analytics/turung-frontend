"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { presaleId } from "@/contracts/addresses";
import client from "@/service/publicProvider";
import { presaleContract } from "./presale/buy-with-bnb";

const Timer = () => {
  const pathname = usePathname();
  const [data, setData] =
    useState<
      [
        `0x${string}`,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ]
    >();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getPresale = async () => {
      const data = await client.readContract({
        ...presaleContract,
        functionName: "presale",
        args: [presaleId],
      });
      setData(data);
      setisLoading(false);
    };

    getPresale();
  }, []);

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

  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="">
        <h1 className="text-2xl text-center mb-3 font-extralight">
          TXPR tokens presale ends*
        </h1>
        <div className="text-6xl text-center flex w-full items-center justify-center">
          <div className="text-2xl mr-1 font-extralight">in</div>
          <div className="w-16 lg:w-24 mx-1 p-2 bg-primary text-primary-content rounded-lg">
            <div className="font-mono leading-none">
              <span className="countdown font-mono text-4xl lg:text-5xl">
                <span
                  style={{ "--value": timer.days } as React.CSSProperties}
                ></span>
              </span>
            </div>
            <div className="font-mono uppercase text-xs lg:text-sm leading-none">
              Days
            </div>
          </div>
          <div className="w-16 lg:w-24 mx-1 p-2 bg-primary text-primary-content rounded-lg">
            <div className="font-mono leading-none">
              <span className="countdown font-mono text-4xl lg:text-5xl">
                <span
                  style={{ "--value": timer.hours } as React.CSSProperties}
                ></span>
              </span>
            </div>
            <div className="font-mono uppercase text-xs lg:text-sm leading-none">
              Hours
            </div>
          </div>
          <div className="w-16 lg:w-24 mx-1 p-2 bg-primary text-primary-content rounded-lg">
            <div className="font-mono leading-none">
              <span className="countdown font-mono text-4xl lg:text-5xl">
                <span
                  style={{ "--value": timer.minutes } as React.CSSProperties}
                ></span>
              </span>
            </div>
            <div className="font-mono uppercase text-xs lg:text-sm leading-none">
              Minutes
            </div>
          </div>
          <div className="text-2xl mx-1 font-extralight">&</div>
          <div className="w-16 lg:w-24 mx-1 p-2 bg-primary text-primary-content rounded-lg">
            <div className="font-mono leading-none">
              <span className="countdown font-mono text-4xl lg:text-5xl">
                <span
                  style={{ "--value": timer.seconds } as React.CSSProperties}
                ></span>
              </span>
            </div>
            <div className="font-mono uppercase text-xs lg:text-sm leading-none">
              Seconds
            </div>
          </div>
        </div>
        {pathname !== "/presale" && (
          <p className="text-sm text-center mt-3">
            *
            <Link
              href="/presale"
              className="underline text-primary hover:text-primary-focus"
            >
              Buy Now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Timer;
