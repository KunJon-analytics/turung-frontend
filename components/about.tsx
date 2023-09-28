import React from "react";

const About = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 mb-4">About Turung & TURUPay</h2>
            <p className="text-xl">
              Over 60% of offline businesses don't have an online store, Turung
              smart-store will be empowering the next generation of businesses
              to sell online, accept crypto/fiat payments and also process
              crypto-fiat liquidity through a decentralised payment system
              called Turupay.
            </p>
            <p className="text-xl mt-1">
              TURUpay is a decentralised payment system that enables the
              conversion of crypto assets to fiat currencies through a single
              transaction. With over 10,000 crypto assets in the blockchain
              space, with TURUpay-Turung will become the largest platform to
              provide fiat liquidity for crypto assets in the blockchain space.
              All transactions within the ecosystem will be powered by Turu
              transaction tokens (TXPR).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
