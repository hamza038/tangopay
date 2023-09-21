import React from "react";
import { FcInspection } from "react-icons/fc";
import Link from "next/link";

const NavBar = () => {
  return (
    <header
      className={`flex flex-col md:flex-row justify-evenly py-5 bg-white-500 items-center`}
    >
      <div
        id="childOne"
        className="flex flex-col md:flex-row items-center md:mr-8"
      >
        <div id="log" className="flex items-center mb-2 md:mb-0 md:mr-8">
          <img className="h-10 w-10" src="./images/Logo.png" alt="" />
          <Link href="/">
            <h3 className="text-2xl">TangoPay</h3>
          </Link>
        </div>
        <div id="parcel" className="flex items-center">
          <Link href="personal" className="text-l text-[#FAD02C]">
            Personal
          </Link>
          <span className="mx-2 text-[#FAD02C]">|</span>
          <Link href="/business" className="text-l">
            Business
          </Link>
        </div>
      </div>
      <div id="childTwo" className="flex mb-2 md:mb-0">
        <nav className="flex flex-wrap">
          <Link href="aboutus" className="mr-4">
            About us
          </Link>
          <Link href="friend" className="mr-4">
            Refer a Friend
          </Link>
          <Link href="help">Help</Link>
        </nav>
      </div>
      <div id="childThree" className="flex items-center">
        <div className="flex items-center mr-4 mb-2 md:mb-0">
          <FcInspection size={20} />
          <select className="border-none outline-none bg-white-500">
            <option>Pak</option>
            <option>Eng</option>
            <option>Ind</option>
          </select>
        </div>
        <div className="mr-5">
          <Link
            href="loginsystem"
            className="text-[#FAD02C] text-base py-1.5 px-4 border-solid border-2 border-yellow-600 rounded-full"
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="bg-[#FAD02C] text-white text-base py-2 rounded-full px-5"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
