import React from "react";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import humanNumber from "human-number";
import { formatEther } from "viem";

import { presaleContract } from "./buy-with-bnb";
import { presaleId } from "@/contracts/addresses";

interface Props {
  claimableAmount: bigint;
}

const ClaimAction = ({ claimableAmount }: Props) => {
  const { address } = useAccount();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...presaleContract,
    functionName: "claim",
    args: [address as `0x${string}`, presaleId],
    enabled: Boolean(claimableAmount),
  });

  const { write, error, data, isError } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <div className="stats text-center text-primary">
      <div className="stat">
        <div className="stat-title">Claim Tokens</div>
        <div className="stat-value">{`${humanNumber(
          Number(formatEther(claimableAmount))
        )}`}</div>
        <div className="stat-actions">
          <button
            className="btn btn-sm btn-primary"
            disabled={!write || isLoading}
            onClick={(e) => {
              e.preventDefault();
              write?.();
            }}
          >
            {isLoading ? "Claiming..." : " Claim TXPR"}
          </button>
          {isSuccess && (
            <button className="btn btn-sm btn-success" disabled>
              Claimed
            </button>
          )}
          {isPrepareError ||
            (isError && (
              <button className="btn btn-sm btn-error" disabled>
                Error
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimAction;
