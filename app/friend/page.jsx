import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { BiMessageAltCheck } from "react-icons/bi";
import { BsGiftFill } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="bg-yellow-400 min-h-screen flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="md:w-2/3 lg:w-1/2 flex flex-col flex-wrap justify-center px-4 md:px-0">
          <h1 className="text-2xl font-bold mb-4 md:text-4xl lg:text-4xl">
            Refer A friend to TangoPay
            <br /> and Earn $10
          </h1>
          <p className="mb-4 md:text-lg">
            Get a $10 reward after your friends send at least $100 on their
            first transfer
          </p>
          <div className="mt-[20px] mb-[20px]">
            <Link
              href="loginsystem"
              className="bg-white text-amber-600 font-bold text-base py-2 rounded-full px-5 mt-5"
            >
              Sign up to Refer A Friend
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/2 mt-[170px] ml-[50px]">
          <img src="images/refer-friend.png" alt="" />
        </div>
      </div>

      {/* Cards */}
      <div className="">
        <h1 className="text-3xl text-center font-bold mt-[80px]">
          HOW It Works
        </h1>
        <div class="container px-5 py-24 mx-auto ml-[100px] ">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 ">
              <div class="bg-yellow-400 rounded-full w-[90px] h-[90px] flex justify-center  items-center">
                <BiMessageAltCheck size={40} />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Send your referal code
              </h2>
              <p class="text-base leading-relaxed mt-2">
                share your referal codefrom the apply <br /> e-mail,whatsapp or
                social media
              </p>
            </div>

            {/* seceond card */}
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 ">
              <div class="bg-yellow-400 rounded-full w-[90px] h-[90px] flex justify-center items-center">
                <MdVerifiedUser size={40} />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Yours friend Sign up
              </h2>
              <p class="text-base leading-relaxed mt-2">
                They must be sign up using <br /> your code
              </p>
            </div>
            {/* third card */}
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="bg-yellow-400 rounded-full w-[90px] h-[90px] flex justify-center items-center">
                <BsGiftFill size={40} />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Invite even more friend
              </h2>
              <p class="text-base leading-relaxed mt-2">
                There are no limit on how <br /> many friends you can invite
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* download app */}

      <div className="bg-yellow-400 mx-2 md:mx-16 my-4 md:my-20 rounded-xl pl-[10px] ">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Download our app
              </h1>
              <p className="mb-8 leading-relaxed w-80">
                Download our app and send money anywhere, anytime from your
                mobile device at your ease
              </p>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
              <div className="flex flex-col md:flex-row justify-center">
                <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-black focus:outline-none mb-4 md:mb-0 md:mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none text-white">
                    <span className="text-xs mb-1">GET IT ON</span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-black focus:outline-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none text-white">
                    <span className="text-xs mb-1">Download on the</span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto md:ml-0">
              <img src="./images/logo5.png" alt="" />
            </div>
          </div>
        </section>
      </div>
      {/* FAQ */}
      <div id="accordion-collapse" data-accordion="collapse">
        <h1 className="text-center text-2xl font-bold mb-[30px] ">FAQ</h1>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <div className="text-center mt-[30px] ">
        <h1>Did not find your answer here? Just send us a message </h1>
        <div className="mt-[20px] mb-[20px]">
          <Link
            href="contact"
            className="bg-[#FAD02C] text-white text-base py-2 rounded-full px-5 mt-5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
