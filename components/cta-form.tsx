"use client";

import React, { useState } from "react";
import axios from "axios";

const CTAForm = () => {
  const [wallet, setWallet] = useState("");
  const [sending, setSending] = useState(false);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whitelistForm = event.currentTarget;

    if (!whitelistForm.checkValidity()) {
      event.stopPropagation();
    }
    try {
      setSending(true);
      const formState = { address: wallet };
      const response = await axios.post("/api/whitelist", formState);
      console.log(response.data);
      if (response.data === "Success") {
        setWallet(
          "Wallet address added successfully, we will contact you soon"
        );
      }
      if (response.data === "Error") {
        setWallet("Invalid wallet address");
      }
      setSending(false);
    } catch (error) {
      console.log(error);
      setWallet("Invalid wallet address");
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-gray-100 text-xs rounded-3xl border border-gray-200 flex items-center justify-between"
    >
      <input
        type="email"
        value={wallet}
        required
        onChange={(e) => {
          setWallet(e.target.value);
        }}
        placeholder="Enter your email to join whitelist"
        className="bg-transparent border-none focus:border-none py-1 text-gray-600 px-4 focus:outline-none w-full"
      />{" "}
      <button
        disabled={sending}
        type="submit"
        className="py-2 px-4 bg-primary text-primary-content rounded-r-3xl hover:bg-primary-focus inline-flex items-center focus:outline-none"
      >
        {sending ? "Joining..." : "Join TXPR whitelist"}
      </button>
    </form>
  );
};

export default CTAForm;
