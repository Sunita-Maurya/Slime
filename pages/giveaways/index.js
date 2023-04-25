import GiveawaysHeader from "@/components/GiveawaysHeader";
import React from "react";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
const Giveaways = () => {
  return (
    <div className="mb-8 ">
      <div className="headerbg">
        <Navbar />
        <GiveawaysHeader />
      </div>
      <Tabs />
    </div>
  );
};

export default Giveaways;
