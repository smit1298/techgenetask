import React from "react";
import tree from "../../../assets/svg/tree.svg";
import locator from "../../../assets/svg/locator.svg";
import van from "../../../assets/svg/van.svg";
import house from "../../../assets/svg/house.svg";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="py-10 sm:py-0">
      <div className="flex justify-center pb-14">
        <h2 className="text-button font-bold leading-loyalty px-4 text-center text-2xl tracking-tighter lg:text-4xl">
          Choose How You get Your Items
        </h2>
      </div>
      <div className="flex flex-col justify-center gap-8 mx-6 mb-16 sm:flex-row lg:mx-60">
        <div className="relative bg-order px-9 flex lg:w-1/2">
          <div className="lg:w-3/4 py-3">
            <h2 className="text-[#222222] font-extrabold mt-6 mb-1 leading-loyalty text-2xl tracking-tighter sm:text-4xl">
              Order Pickup
            </h2>
            <p className="mb-2 r-40 leading-loyalty text-sm -tracking-wide text-delivery">
              Choose pickup items and have them waiting for you in your selected
              store
            </p>
            <Link
              to="/order-pick-up"
              className="no-underline text-[#222222] border-b-2 border-[#222222]"
            >
              See items
            </Link>
          </div>
          <div className="absolute top-28 w-14 h-14 right-10 flex">
            <img src={house} alt="pickup location" />
            <img src={locator} alt="pickup locator" />
          </div>
        </div>
        <div className="relative bg-order px-9 flex lg:w-1/2">
          <div className="lg:w-3/4 py-3">
            <h2 className="text-[#222222] font-extrabold mt-6 mb-1 leading-loyalty text-2xl tracking-tighter sm:text-4xl">
              Order Delivery
            </h2>
            <p className="mb-2 r-40 leading-loyalty text-sm -tracking-wide text-delivery">
              Choose your preferred items and have them
              delivered to your doorstep.
            </p>
            <Link
              to="/order-delivery"
              className="border-b-2 text-[#222222] no-underline border-[#222222]"
            >
              See items
            </Link>
          </div>
          <div className="absolute top-28 w-14 h-14 right-10 flex">
            <img src={van} alt="delivery locator" />
            <img src={tree} alt="delivery location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
