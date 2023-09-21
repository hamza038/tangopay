import React from "react";
import Card from "@/components/Card";
import Herosection from "@/components/Herosection";
import Mobile from "@/components/Mobile";
import Zeepay from "@/components/Zeepay";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <div>
      <Herosection />
      <Card />
      <Mobile />
      <Zeepay />
      <Download />
      <FAQ />
      <Contact />
    </div>
  );
};

export default page;
