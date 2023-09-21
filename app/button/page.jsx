import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" flex justify-center items-center bg-neutral-800">
      <div class="mt-[180px] mb-[200px]  ">
        <label
          for="password"
          class="block text-gray-700  font-bold mb-2 text-center text-2xl "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          class="shadow appearance-none border rounded   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        {/* <!-- Validation Error Message --> */}
        <p class="text-red-500 text-xs italic mt-1 text-center ">
          Password must be at least 8 characters long.
        </p>
        <div className="flex justify-center items-center mt-[20px]">
          <Link
            href=""
            class="text-white bg-indigo-500 border-0  py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
