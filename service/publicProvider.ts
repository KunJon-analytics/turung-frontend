import { createPublicClient, http } from "viem";
import { bsc, bscTestnet } from "viem/chains";

const transport = http(
  `https://bsc.getblock.io/${process.env.NEXT_PUBLIC_RPC_URL_KEY}/${
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? "testnet" : "mainnet"
  }/`
);

const client = createPublicClient({
  chain: process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? bscTestnet : bsc,
  transport,
});

export default client;
