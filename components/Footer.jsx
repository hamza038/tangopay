import React from "react";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer class="text-white body-font bg-gray-200">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img className="h-10 w-10" src="./images/Logo.png" />
              <span class="ml-3 text-xl">TangoPay</span>
            </a>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                More
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    BIC/swift code
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Branches</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">FAQ</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Personal</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">News</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Partners</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Help us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Refer A Friend
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 class="title-font uppercase      text-gray-900 tracking-widest text-sm mb-3 font-bold">
                Social media
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Terms of services
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Free bussines Tool
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Growth Funds</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              copyright © 2023 TangoPay.All Rights Reserved
            </a>

            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillLinkedin } from "react-icons/ai";
// import { BsArrowUpRight } from "react-icons/bs";

// import Link from "next/link";
// import Image from "next/image";
// import { images } from "@/next.config";

// const Footer = () => {
//   return (
//     <div className="footer-container  ">
//       <div className="footer-area flex flex-wrap relative  ">
//         <div className="sec1  flex-wrap justify-evenly  flex bg-stone-950 h-[650px] w-[950px]">
//           <div className="  ">
//             {/* <1 className='font-bold text-white'>Logo<1> */}
//             <div className="logo">
//               <img
//                 className=" mt-[100px] h-50 w-24  "
//                 src="/images/heapware-logo.png"
//                 alt=""
//               />
//             </div>
//             <p className="mt-[51px] w-96 text-stone-300">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. A
//               voluptate voluptates distinctio, officiis excepturi consequuntur
//               laborum temporibus hic saepe perspiciatis!
//             </p>
//             <div className="  mt-[20px] text-slate-200 flex ">
//               <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
//                 <AiFillInstagram />
//               </div>
//               <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
//                 <FaFacebook />
//               </div>
//               <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl ">
//                 <FaTwitter />
//               </div>
//               <div className=" text-2xl mx-3 hover:transition duration-300 ease-in hover:text-sky-400 hover:text-3xl">
//                 <AiFillLinkedin />
//               </div>
//             </div>
//           </div>
//           <div className="f-2 flex-wrap mt-[140px]">
//             <h2 className="font-bold text-white">Information</h2>
//             <div className="mt-[67px]">
//               <ul className="text-stone-300 ">
//                 <li className="my-2 hover:text-white hover:font-bold">
//                   <Link href="/">About Company</Link>
//                 </li>
//                 <li className="my-2 hover:text-white hover:font-bold">
//                   <Link href="/casestudy">Case Study</Link>
//                 </li>
//                 <li className="my-2 hover:text-white hover:font-bold">
//                   <Link href="/career">Career</Link>
//                 </li>
//                 <li className="my-2 hover:text-white hover:font-bold">
//                   <Link href="/blog">Blog</Link>
//                 </li>
//                 <li className="my-2 hover:text-white hover:font-bold">
//                   <Link href="/contact">Contact</Link>{" "}
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="f-3 mt-[140px] ">
//             <h2 className="font-bold text-white">Contact us </h2>
//             <div className="mt-[65px]">
//               <ul className="text-stone-300">
//                 <li className=" my-3  hover:text-white">
//                   Valentin, Street Road 24,
//                   <br /> New York, USA - 67452
//                 </li>
//                 <li className="my-2  hover:text-white hover:underline">
//                   <a href="tel:02574328301" class="phone">
//                     +02) 574 - 328 - 301{" "}
//                   </a>
//                 </li>
//                 <li className="my-2  hover:text-white">
//                   <a href="mailto:info@buildyexample.com">
//                     info@buildyexample.com
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-stone-800 mt-[100px]">
//             ____________________________________________________________________________________________________________
//           </div>
//           <div className="f-5 flex justify-center mr-[150px] mt-[70px] mb-[100px] ">
//             <h2 className="text-stone-300 mb-[40px] ">
//               © 2022 - 2025 | Alrights reserved by Wealcoder
//             </h2>
//             <div class=" flex-grow w-full   ">
//               <input
//                 type="email"
//                 placeholder="Enter your email here..."
//                 id="email"
//                 name="email"
//                 class="w-full bg-sky-600 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="f-4  text-center w-[300px] bg-stone-800   ">
//           <h2 className="font-bold  text-2xl mt-[100px] text-white">
//             Have a project in your mind{" "}
//           </h2>
//           <Link
//             href="/contact"
//             className="hover:bg-sky-700 hover:text-white hover:border-sky-700  hover:transition duration-700 ease-in-out flex justify-center items-center  ml-20 mt-20 rounded-full h-40 w-40 border-2 text-stone-300 "
//           >
//             Contact us <span> {<BsArrowUpRight />}</span>
//           </Link>
//           <h3 className="text-white font-bold mt-[100px] ">
//             {" "}
//             09: 00 AM - 10 : 30 PM
//           </h3>
//           <h4 className="text-stone-300 mb-[40px]">Saturday- Thursday</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
