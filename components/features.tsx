import Feature from "./feature";
import { FaExchangeAlt, FaWallet, FaPeopleArrows } from "react-icons/fa";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Benefits</h2>
            <p className="text-xl">
              Living in a consumer-based society, integrating traditional
              business with a physical presence on Turung smartstore gives them
              the superpowers to effectively operate as mini banks with the
              following benefits.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <Feature
              title="Cross Platforms"
              description="Accept both crypto and fiat for products and services."
              delay="0"
              icon={<FaExchangeAlt className="w-16 h-16 mb-4" />}
            />
            <Feature
              title="Rewards"
              description="Get rewards to process crypto fiat liquidity."
              delay="100"
              icon={<FaWallet className="w-16 h-16 mb-4" />}
            />

            <Feature
              title="Customers"
              description="Build and manage customer base more efficiently."
              delay="200"
              icon={<FaPeopleArrows className="w-16 h-16 mb-4" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
