import React from "react";

type Props = {
  phase: string;
  icon: React.JSX.Element;
  date: string;
  title: string;
  body: string;
};

const Phase = ({ phase, icon, date, title, body }: Props) => {
  return (
    <div className="relative flex justify-between">
      <div className="hidden py-3 w-15 md:block ">
        <h2 className="text-base font-medium">{`Phase ${phase}`}</h2>
      </div>
      <div className="flex flex-col items-center w-10 mr-4 md:w-24">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border border-primary rounded-full dark:border-primary">
            {icon}
          </div>
        </div>
        <div className="w-px h-full bg-secondary-focus"></div>
      </div>
      <div className="relative flex-1 mb-10 bg-base-300 rounded shadow lg:mb-8 ">
        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-primary lg:block drop-shadow-lg"></div>
        </div>
        <div className="relative z-20 p-6">
          <div className="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5 bg-primary rounded-md lg:rounded-br-md lg:rounded-tl-md">
            <span className="text-xs text-white">{date}</span>
          </div>
          <p className="mt-4 mb-2 text-xl font-bold lg:mt-8 ">{title}</p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Phase;
