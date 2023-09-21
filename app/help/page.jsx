import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="font-sans text-black bg-yellow-400 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center mb-[40px]">How can we Help You?</h1>

        <div className="border rounded overflow-hidden flex">
          <input type="text" className="px-4 py-2" placeholder="Search..." />
          <button className="flex items-center justify-center px-4 border-l">
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl mt-[40px] md:font-bold text-center">
          Results for"Transfers"
        </h1>
        <div className="ml-[70px] mt-[100px] i">
          <h1 className=" md:font-bold ml-[370px]">
            Why was my transfer cancelled
          </h1>
          <h4 className="text-center">
            Some time tangopay cancel your transfer.They are the few reason why
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px] ">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px]">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px]">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px]">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px]">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
          <h1 className="md:font-bold mt-[30px] ml-[370px]">
            Why was many transfers cancel?
          </h1>
          <h4 className="text-center">
            sometimes, tangopay will cancel your transfer.there are a few
            reasons
          </h4>
        </div>
      </div>
      <div class="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline mt-[30px] mb-[30px]">
        <button class="rounded-lg px-4 py-2 bg-yellow-400 rounded-full text-white">
          Show More
        </button>
      </div>
    </div>
  );
};
export default Page;
