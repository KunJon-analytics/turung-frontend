"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    bsc,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [bscTestnet] : []),
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://bsc.getblock.io/${process.env.NEXT_PUBLIC_RPC_URL_KEY}/${
          chain.id === 97 ? "testnet" : "mainnet"
        }/`,
        webSocket: `wss://bsc.getblock.io/${
          process.env.NEXT_PUBLIC_RPC_URL_KEY
        }/${chain.id === 97 ? "testnet" : "mainnet"}/`,
      }),
    }),
    publicProvider(),
  ]
);

const projectId = "0933d1cdb15d3db4aadbacb031ad2879";

const { wallets } = getDefaultWallets({
  appName: "Turung",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Turung",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        modalSize="compact"
        theme={darkTheme({
          ...darkTheme.accentColors.purple,
        })}
        initialChain={
          process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? bscTestnet : bsc
        }
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
