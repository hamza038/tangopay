import React from "react";
import { ImEarth } from "react-icons/im";
import { GrCompliance } from "react-icons/gr";
import { AiOutlineLaptop } from "react-icons/ai";
const Page = () => {
  return (
    <div>
      <div className="bg-yellow-400 min-h-screen flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col justify-center md:w-2/3 lg:w-1/2 px-4 md:px-0">
          <h1 className="text-2xl font-bold mb-4 md:text-4xl lg:text-5xl">
            TangoPay
          </h1>
          <p className="mb-4 md:text-lg">
            Send money to Australia with ease and confidence. Experience
            hassle-free transfers and reliable service with every transaction.
          </p>
          <div className="mb-2 md:text-lg">How it works</div>
          <div className="mb-4 md:text-lg">Based on 100+ reviews</div>
        </div>
        <div className="flex flex-col md:w-1/3 lg:w-1/2 justify-center px-4 md:px-0">
          <img
            className="w-full md:ml-20"
            src="/images/world-image-2.jpg"
            alt=""
          />
        </div>

        {/* <!-- Third column for additional content (you can add content here) --> */}
        <div className="flex flex-col md:w-1/3 lg:w-1/2 justify-center px-4 md:px-0">
          {/* <!-- Add your content here --> */}
        </div>
      </div>

      <div className="bg-amber-600 text-center text-2xl md:font-bold">
        <h1 className="p-4">
          Welcome To Tangopay: Revolutionizing Money For The Digital Age!
        </h1>
      </div>

      {/* About us */}

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-800">
            About US
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center flex justify-center items-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
