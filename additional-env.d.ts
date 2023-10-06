declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NODEMAILER_PW: string;
      NODEMAILER_EMAIL: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_ENABLE_TESTNETS: string;
      NEXT_PUBLIC_PRESALE_CONTRACT: `0x${string}`;
      NEXT_PUBLIC_TXPR_CONTRACT: `0x${string}`;
      NEXT_PUBLIC_USDT_CONTRACT: `0x${string}`;
      NEXT_PUBLIC_ACTIVE_PRESALE: string;
      NEXT_PUBLIC_RPC_URL_KEY: string;
    }
  }
}

export {};
