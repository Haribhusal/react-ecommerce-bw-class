import React from "react";

const HeroSection = () => {
  return (
    <section className="flex p-10 gap-10">
      <div className="left flex-[2] bg-purple-100 p-5 rounded-md">
        <h3 className="mb-3 pb-3 border-b-2 border-purple-300 font-bold text-purple-600">
          Product Categories
        </h3>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between">
            <div className="text">Beauty</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              34
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Fashion</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              12
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Lifestyle</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              9
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Electronics and Communication</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              19
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Beauty</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              34
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Fashion</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              12
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Lifestyle</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              9
            </span>
          </li>
          <li className="flex justify-between">
            <div className="text">Electronics and Communication</div>
            <span className="bg-purple-200 text-sm text-purple-700 px-3 border-[1px] border-purple-400 flex justify-center items-center rounded-md">
              19
            </span>
          </li>
        </ul>
      </div>
      <div className="right flex-[6]">
        <img
          src="https://picsum.photos/id/13/1000/350"
          className="w-full"
          alt="name"
        />
      </div>
    </section>
  );
};

export default HeroSection;
