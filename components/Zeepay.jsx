import React from "react";
import myImage from "../public/images/myimage.png";
import Image from "next/image";
const Zeepay = () => {
  return (
    <>
      <div className="">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div className="">
              <div class="lg:w-4/5 mx-auto w-full flex flex-wrap justify-between">
                <div class="lg:w-1/2 lg:pr-10 lg:py-6 mb-6 lg:mb-0 ml-4">
                  <h1 class="title-font text-black text-2xl font-black tracking-wides">
                    Payout partner in Australia
                  </h1>
                  <p class="text-gray-900 title-font font-medium mb-4">
                    TangoPay mobile money partner in lovary coast
                  </p>
                </div>
                <div className="flex relative  justify-end top-[-55px]">
                  <img
                    src="/images/myimage.png"
                    alt="zeepay"
                    width="350px"
                    height="300px"
                    className="h-auto object-cover object-center rounded relative left-20 mb-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Zeepay;
