import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="text-center mt-[30px] mb-[50px] ">
      <h1>Did not find your answer here? Just send us a message </h1>
      <div className="mt-[40px] mb-[20px]">
        <Link
          href="contact"
          className="bg-[#FAD02C] text-white text-base py-2 rounded-full px-5 mt-5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Contact;
