import React from "react";
import Success from "../ui/success";
import Error from "../ui/error";

interface Props {
  isSuccess: boolean;
  isPrepareError: boolean;
  isError: boolean;
  prepareError?: Error | null;
  error?: Error | null;
}

const PresaleAlerts = ({
  isSuccess,
  isError,
  isPrepareError,
  prepareError,
  error,
}: Props) => {
  return (
    <>
      {isSuccess && (
        <Success
          description="Successfully bought TXPR!!!"
          title="TXPR Bought"
        />
      )}
      {isPrepareError ||
        (isError && <Error message={"The transaction had an error"} />)}
      {/* (isError && <Error message={(prepareError || error)?.message} />)} */}
    </>
  );
};

export default PresaleAlerts;
