import React from "react";
import FlashCard from "./FlashCard";
import flatHill from "@/../public/assets/flashSales/flatHill.svg";
import widdingRing from "@/../public/assets/flashSales/widdingRing.svg";
import leatherWallet from "@/../public/assets/flashSales/leatherWallet.svg";
import appleWatch from "@/../public/assets/flashSales/appleWatch.svg";

const FlashSales = () => {
  return (
    <section className="px-4 sm:px-10 md:px-16 lg:px-24  my-6">
      <h2 className="text-primary text-3xl font-bold flex justify-center mb-8">
        Best Deals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <FlashCard
          title="Flat Hill Slingback"
          oldPrice={299}
          newPrice={163}
          image={flatHill}
        />
        <FlashCard
          title="Ocean Blue Ring"
          oldPrice={269}
          newPrice={245}
          image={widdingRing}
        />
        <FlashCard
          title="Brown Leathered Wallet"
          oldPrice={179}
          newPrice={144}
          image={leatherWallet}
        />
        <FlashCard
          title="Silverside Wristwatch"
          oldPrice={379}
          newPrice={336}
          image={appleWatch}
        />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-primary text-white py-2 px-10 hover:bg-gray-800">
          View All
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
