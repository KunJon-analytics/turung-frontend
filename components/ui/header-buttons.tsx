import React, { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import { FaMoon, FaSun } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type Props = {
  listStyle: string;
  isMobile?: boolean | undefined;
};

const HeaderButtons = ({ listStyle, isMobile }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<null | string>(null);

  useEffect(() => {
    themeChange(false);
    console.log(currentTheme);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);
  return (
    <ul className={`${listStyle} ${isMobile ? "flex ml-3" : ""}`}>
      <li className="mr-3">
        <ConnectButton />
      </li>
      <li className={isMobile ? "justify-end mt-1" : ""}>
        <button
          data-set-theme="dark"
          data-act-class="ACTIVECLASS"
          onClick={() => {
            setCurrentTheme("dark");
          }}
          className={
            "fill-current text-primary bg-base-300 rounded-full w-7 h-7 " +
            (currentTheme === "light" ? "swap-on" : "hidden")
          }
        >
          <FaMoon className="m-1" />
        </button>
      </li>
      <li className={isMobile ? "justify-end mt-1" : ""}>
        <button
          data-set-theme="light"
          data-act-class="ACTIVECLASS"
          onClick={() => {
            setCurrentTheme("light");
          }}
          className={
            "fill-current text-primary bg-base-300 rounded-full w-7 h-7 " +
            (currentTheme === "dark" ? "swap-on" : "hidden")
          }
        >
          <FaSun className="m-1" />
        </button>
      </li>
    </ul>
  );
};

export default HeaderButtons;
