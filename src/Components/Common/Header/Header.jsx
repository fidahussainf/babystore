import React from "react";

import TopOffer from "./TopOffer";

function Header() {
  return (
    <div>
      <TopOffer />
      <div className="px-5 flex py-5  justify-between items-center">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="rounded-full flex justify-between items-center bg-primary pr-3 pl-6 h-[60px] w-[70%]">
          <div className="flex items-center border-r border-gray-500 px-2 border-opacity-50  gap-2">
            <span className="font-medium text-sm">All Category</span>
            <img src="./images/downicon.png" alt="downicon" />
          </div>

          <div className="flex-1 font-medium text-[#1A171880] text-opacity-50 text-sm ml-2">
            What are you looking for?
          </div>
          <div className="cursor-pointer">
            <img src="./images/search.png" alt="search" />
          </div>
        </div>

        <div className="flex cursor-pointer items-center gap-4">
          <div className="">
            <img src="./svg/Heart.svg" alt="heart" />
          </div>
          <div className="">
            <img src="./svg/User.svg" alt="User" />
          </div>
          <div className="">
            <img src="./svg/Basket.svg" alt="basket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
