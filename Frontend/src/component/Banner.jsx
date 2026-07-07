import React from "react";
import banner from "../assets/banner.jpg"; // Change the path according to your project

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-1 py-6 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col-reverse md:flex-row items-center">

        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-32 order-2 md:order-1">
          <div className="space-y-8">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem, et totam. Tempora amet atque expedita, quae corrupti
              totam sed pariatur corporis at veniam est voluptas animi!
            </p>

            {/* Email Input */}
            <div>
              <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555z" />
                  <path d="M0 4.697v7.104l5.803-3.551L0 4.697zM6.761 8.83L0 12.965A2 2 0 002 14h12a2 2 0 002-1.035L9.239 8.83 8 9.586 6.761 8.83zM16 11.801V4.697l-5.803 3.553L16 11.8z" />
                </svg>

                <input
                  type="email"
                  className="grow bg-transparent border-none outline-none dark:text-white"
                  placeholder="Email"
                />
              </label>
            </div>

            {/* Button */}
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300 cursor-pointer">
              Secondary
            </button>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-20 flex justify-center order-1 md:order-2">
          <img
            src={banner}
            alt="Books"
            className="w-[90%] md:w-[550px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;