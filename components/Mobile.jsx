import React from "react";
const Mobile = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-fon">
        <div className="container mx-auto flex flex-col px-5  justify-center w-[40%] h-[70vh] items-center mt-20 pt-20 bg-gray-300">
          <img
            className="w-[8%] mb-10 object-cover object-center bg-red-100"
            src="./images/LOGO-01.png"
            alt="hero"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center mt-5">
            <h1 className="text-2xl font-bold mr-[30%]">Mobile Money</h1>
            <p className="mb-8 leading-relaxed w-[70%] mt-2 ml-[-30px]">
              Send Money to lvorycoastvia mobile money transfers and enjoy a
              quick and convenint way to tansfer funds .our mobile transfer
              service provide a seamless experience,allowing you to send money
              to your beneficiary Mobile Moneywit just a few taps on your phone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
