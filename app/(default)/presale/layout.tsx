import { Metadata } from "next";

import PageIllustration from "@/components/page-illustration";

const { NEXT_PUBLIC_BASE_URL } = process.env;

export const metadata: Metadata = {
  title: "Turung Presale | Secure Your Tokens at Exclusive Rates",
  description:
    "Participate in the Turung presale and secure your tokens at exclusive rates before the official launch. Join us in revolutionizing offline businesses with digital smart stores and blockchain technology. Don't miss this limited-time opportunity",
  keywords: [
    "E-commerce",
    "Crypto Token",
    "Cryptocurrency",
    "Turung Presale",
    "Token Sale",
    "Buy TXPR",
    "Crypto Investment",
    "Blockchain",
    "Cryptocurrency News",
    "Crypto Community",
    "Digital Smart Stores",
    "Offline Businesses",
    "Crypto Payments",
    "Crypto Roadmap",
    "Binance Smart Chain",
    "Turupay",
    "Limited Time Offer",
  ],
  creator: "KunJon",
  metadataBase: new URL(NEXT_PUBLIC_BASE_URL),
  openGraph: {
    title: "Turung Presale | Secure Your Tokens at Exclusive Rates",
    description:
      "Participate in the Turung presale and secure your tokens at exclusive rates before the official launch. Join us in revolutionizing offline businesses with digital smart stores and blockchain technology. Don't miss this limited-time opportunity",
    url: NEXT_PUBLIC_BASE_URL,
    siteName: "Turung",
    locale: "en_US",
    type: "website",
  },
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">
        <PageIllustration />

        {children}
      </main>
    </>
  );
}
