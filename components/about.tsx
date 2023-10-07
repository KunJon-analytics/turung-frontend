import React from "react";

const About = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 mb-4 text-primary">About Turung & TURUPay</h2>
            <p className="text-md lg:text-xl">
              Over 80% of offline businesses don't have an online store. Turung
              will be empowering the next generation of businesses with digital
              smart stores to sell online, accept crypto/fiat payments, and also
              process crypto-fiat liquidity through a decentralized payment
              system called Turupay.
            </p>
            <p className="text-md lg:text-xl mt-4">
              TURUpay is a decentralised payment system that converts crypto
              assets to fiat currencies through a single transaction to cut down
              the time and cost of multiple transactions.
            </p>
            <p className="text-md lg:text-xl mt-4">
              With over 10,000 crypto assets existing on different blockchains,
              TURUpay will make Turung the fastest-growing peer-to-peer platform
              to provide fiat liquidity for crypto purchases in the blockchain
              space. All transactions within the ecosystem will be powered by
              Turu transaction tokens (TXPR).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
