import React from "react";

interface Props {
  title: string;
  description: string;
  action?: (() => void) | undefined;
}

const Success = ({ title, description, action }: Props) => {
  return (
    <div className="alert shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-success shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div className="text-xs">{description}</div>
      </div>
      {action && (
        <button onClick={action} className="btn btn-sm">
          See
        </button>
      )}
    </div>
  );
};

export default Success;
