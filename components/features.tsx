import Feature from "./feature";
import { FaExchangeAlt, FaWallet, FaPeopleArrows } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-primary">Benefits</h2>
            <p className="text:md lg:text-xl">
              In a consumer-driven world, blending traditional businesses with a
              Turung smart store unleashes superpowers, transforming them into
              mini-banks with many benefits including:
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <Feature
              title="Customers"
              description="Build and manage customer base more efficiently."
              delay="200"
              icon={
                <FaPeopleArrows className="w-12 lg:w-16 h-12 lg:h-16 mb-4 text-primary" />
              }
            />
            <Feature
              title="Cross Platforms"
              description="Accept both crypto and fiat for products and services."
              delay="0"
              icon={
                <FaExchangeAlt className="w-12 lg:w-16 h-12 lg:h-16 mb-4 text-primary" />
              }
            />
            <Feature
              title="Rewards"
              description="Get rewards to process crypto fiat liquidity."
              delay="100"
              icon={
                <FaWallet className="w-12 lg:w-16 h-12 lg:h-16 mb-4 text-primary" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
