import React from "react";
import { FcCircuit, FcAcceptDatabase } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center md:w-2/3 lg:w-1/2 px-4 md:px-0">
          <h1 className="font-bold mb-4 md:text-4xl lg:text-4xl mt-[30px] text-gap font whitespace-nowrap">
            Send Money to Australia
          </h1>
          <p className="mb-4 md:text-lg line-clamp-2 text-left mr-5">
            Send money to Australia with ease and confidence. Experience
            hassle-free transfers and reliable service with every transaction.
          </p>
          <div className="mb-2 md:text-lg">How it works</div>
          <div className="mb-4 md:text-lg">Based on 100+ reviews</div>
        </div>
        <div className="flex flex-col md:w-1/3 lg:w-1/2 justify-center px-4 md:px-0">
          <div className="w-[70%] ml-[10rem] p-4 bg-white border border-gray-200 rounded-lg shadow md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="flex w-full py-6 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                <span className="flex items-center">
                  <FcCircuit />
                  Lvory Coasts
                </span>
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                <select>
                  <option disabled selected></option>
                  <option>two</option>
                </select>
              </span>
            </a>
            <a
              href="#"
              class="flex py-6  items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span class="flex-1 ml-3 whitespace-nowrap">
                <span className="flex items-center">
                  <FcCircuit />
                  23,230,20
                </span>
              </span>
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                <FcAcceptDatabase />
              </span>
            </a>
            <a
              href="#"
              class="flex py-6  items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span class="flex-1 ml-3 whitespace-nowrap">
                <span className="flex items-center">
                  <FcCircuit />
                  Lvory Coasts
                </span>
              </span>
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                <FcAcceptDatabase />
              </span>
            </a>
            <div className="flex justify-between mx-1 my-3">
              <div>Fee</div>
              <div>No fees for first 3 months</div>
            </div>
            <div className="flex justify-between mx-1 my-3">
              <div>Rate</div>
              <div>1 GBP = 324.5 xOF</div>
            </div>
            <div className="flex justify-between mx-1 my-3 font-bold">
              <div>Total</div>
              <div>1,0000.00</div>
            </div>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
