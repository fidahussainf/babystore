import React from "react";
import { FaShippingFast, FaCreditCard, FaHeadset } from "react-icons/fa";

function FeaturesSection() {
  return (
    <div className="flex bg-[#1C2A54] justify-between items-center gap-4">
          <div className=" text-white p-4 rounded-lg w-1/3 flex items-center justify-center h-20">
            <FaShippingFast className="text-3xl mr-2" />
            <div>
              <h4 className="font-semibold text-xl">Free Shipping</h4>
            </div>
          </div>
          <div className=" text-white p-4 rounded-lg w-1/3 flex items-center justify-center h-20">
            <img src="./images/currency.png" className="text-3xl mr-2" />
            <div>
              <h4 className="font-semibold text-xl">2x Cashback</h4>
            </div>
          </div>
          <div className=" text-white p-4 rounded-lg w-1/3 flex items-center justify-center h-20">
            <FaHeadset className="text-3xl mr-2" />
            <div>
              <h4 className="font-semibold text-xl">24/7 Support</h4>
            </div>
          </div>
        </div>
  );
}

export default FeaturesSection;
