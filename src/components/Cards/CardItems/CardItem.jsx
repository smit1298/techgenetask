import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import location from "../../../assets/svg/location.svg";
import experienceLocate from "../../../assets/svg/experienceLocation.svg";
import singleLocation from "../../../assets/svg/singleLocation.svg";
import minus from "../../../assets/svg/minus.svg";
import plus from "../../../assets/svg/plus.svg";
import QuickBuy from "../../buttons/QuickBuy";
import { formatValue } from "../../config/helper";
import WishList from "../../buttons/WishList";





export const ProductsItem = ({ card }) => {
  return (
    <div className="flex card-deco my-2 pb-10 px-2 mx-auto flex-col w-[250px] sm:pb-8">
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <Link
          // to={`/single-item/${card?.Company_merchandise_item_id}`}
          className="w-[220px] no-underline h-[250px] mx-auto flex sm:h-fit"
        >
          <img
            className="w-[300px] pt-2 mx-auto pb-14 sm:pb-7 px-[11px] h-[300px] sm:pt-10"
            src={card?.Item_image}
            alt={card?.Item_name}
          />
        </Link>
        <div className="flec justify-end ml-[80%] w-fit">
          <WishList item={card} />
        </div>
      </div>
      <div className="px-[11px]">
        <h6 className="text-base truncate text-list pt-2 font-normal leading-loyalty tracking-loyal">
          {card?.Merchandize_item_name}
        </h6>
        <h3 className="font-bold text-button text-base leading-loyalty tracking-loyal">
          {formatValue(card?.Billing_price_in_points)} Coins
        </h3>
        <QuickBuy item={card} />
      </div>
    </div>
  );
};

export const PopularItems = ({ card }) => {
  return (
    <Link
      // to={`/single-category/${card?.Merchandize_category_id}`}
      className="w-[45%] h-[280px] no-underline bg-popular rounded cursor-pointer flex flex-col lg:w-[30%] md:h-[400px] lg:h-[482px] sm:pb-4"
    >
      <div className="w-full">
        <img
          className="w-fit px-2 h-[129px] my-2 mx-auto sm:w-74 sm:h-64 sm:my-4 "
          src={card?.Category_image}
          alt={card?.Category_name}
        />
      </div>

      <div className="w-full sm:h-[25%]">
        <h2 className="capitalize flex-flex-wrap font-bold  mx-2 py-2 text-base w-[100px] h-[65px] leading-loyalty tracking-tighter text-cateories sm:py-4 md:text-3xl  lg:text-5xl sm:mx-7 sm:w-fit lg:h-32">
          {card?.Category_name.toLowerCase()}
        </h2>
      </div>

      <div className="relative w-[40%] py-1 mx-1 sm:mx-6 lg:my-10">
        <div className="w-[115px] h-9 bg-popular border-2 rounded border-solid border-black sm:w-[120%] sm:h-9"></div>
        <div className="absolute bottom-2 left-1 w-[112px] h-10 flex justify-center items-center bg-coins border-2 rounded border-solid border-black sm:h-9 sm:w-[120%]">
          <div className="w-full">
            <p className="flex my-3 pl-2 capitalize font-bold text-xs sm:text-sm leading-loyalty">
              from {formatValue(card?.min_price_in_point)} Coins
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ArrivalItems = ({ card }) => {
  return (
    <div className="flex card-deco my-2 pb-10 px-2 mx-auto flex-col w-[250px] sm:pb-8">
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <Link
          // to={`/single-item/${card?.Company_merchandise_item_id}`}
          className="w-[220px] no-underline h-[250px] mx-auto flex sm:h-fit"
        >
          <img
            className="w-[300px] pt-2 mx-auto pb-14 sm:pb-7 px-[11px] h-[300px] sm:pt-10"
            src={card?.Item_image}
            alt={card?.Item_name}
          />
        </Link>
        <div className="flec justify-end ml-[80%] w-fit">
          <WishList item={card} />
        </div>
      </div>
      <div className="px-[11px]">
        <h6 className="text-base truncate text-list pt-2 font-normal leading-loyalty tracking-loyal">
          {card?.Merchandize_item_name}
        </h6>
        <h3 className="font-bold text-button text-base leading-loyalty tracking-loyal">
          {formatValue(card?.Billing_price_in_points)} Coins
        </h3>
        <QuickBuy item={card} />
      </div>
    </div>
  );
};

export const ShopCategoryItems = ({ card }) => {
  return (
    <div className="flex card-deco my-2 pb-10 px-2 flex-col w-full md:w-[50%] lg:w-[25%]  sm:pb-8">
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <Link
          to={`/single-item/${card?.Item_id}`}
          className="w-full no-underline h-[250px] flex sm:h-fit"
        >
          <img
            className="mx-auto object-cover object-center py-4 px-4 h-[250px]"
            src={card?.Item_image}
            alt={card?.Item_name}
          />
        </Link>
        <div className="flec justify-end ml-[80%] w-fit">
          <WishList item={card} />
        </div>
      </div>
      <div className="px-[11px] space-y-2">
        <h6 className="text-base truncate text-list pt-2 font-normal leading-loyalty tracking-loyal">
          {card?.Item_name}
        </h6>
        <h3 className="font-bold text-quick text-base leading-loyalty tracking-loyal">
          {formatValue(card?.Price ? card?.Price : card?.Item_price)} FirstCoins
        </h3>
        <QuickBuy item={card} />
      </div>
    </div>
  );
};

export const OrderPickUpItems = ({ card }) => {
  return (
    <div className="flex card-deco my-2 py-4 flex-col w-[45%] sm:py-4 sm:px-20 lg:px-2 sm:w-[250px]">
      <div className="border-solid border rounded gap-8 pb-2 border-[#eeeeee]">
        <Link
          to={`/single-item/${card?.Merchandize_category_id}`}
          className="w-[100%] no-underline h-[90%] mx-auto flex sm:w-[220px] sm:h-fit"
        >
          <img
            className="w-full truncate pt-4 mx-auto pb-4 px-[11px] h-[250px] sm:pb-7 sm:pt-10 sm:h-[300px]"
            src={card?.Item_image}
            alt={card?.Merchandize_item_name}
          />
        </Link>
        <div className="flec justify-end ml-[80%] w-fit">
          <WishList item={card} />
        </div>
      </div>
      <div className="px-[11px]">
        <h6 className="text-base truncate text-list pt-2 font-normal leading-loyalty tracking-loyal">
          {card?.Merchandise_item_description}
        </h6>
        <h3 className="font-bold text-quick text-base leading-loyalty tracking-loyal">
          {formatValue(card?.Billing_price_in_points)} FirstCoins
        </h3>
        <QuickBuy item={card} />
      </div>
    </div>
  );
};

export const HotelDestinationsItems = ({ card }) => {
  return (
    <div className="flex w-[250px] card-deco py-4 px-2 flex-col">
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <div className="flex">
          <img
            className="w-fit pt-10 pb-7 px-[11px] h-[300px]"
            src={require(`../../../assets/images/${card?.image}`)}
            alt={card?.name}
          />
        </div>
      </div>
      <div className="px-[11px] py-2">
        <h3 className="font-bold text-button text-base leading-loyalty tracking-loyal">
          {card?.location}
        </h3>
        <Link
          to="/hotel_single_room"
          className="capitalize font-bold text-black text-sm leading-loyalty tracking-loyal underline"
        >
          see hotels
        </Link>
      </div>
    </div>
  );
};

export const HotelSearchItems = ({ card }) => {
  return (
    <div className="flex rounded my-7 bg-white mx-44 p-5">
      <div className="flex gap-5 pr-16">
        <img
          className="rounded-sm w-[258px] h-[129px]"
          src={require(`../../../assets/images/${card?.image}`)}
          alt={card?.hotelName}
        />
        <div>
          <h3 className="capitalize truncate w-56 font-bold pb-1 text-lg leading-product">
            {card?.hotelName}
          </h3>
          <p className="capitalize truncate w-56 font-medium text-sm leading-product text-delivery">
            {card?.hotelAddress}
          </p>
          <span className="flex gap-2 pt-8 items-center">
            <p className="rounded text-white p-2 bg-button">{card?.rating}</p>
            <p className="capitalize font-medium text-base leading-product">
              {card?.grade}
            </p>
          </span>
        </div>
      </div>
      <div className="border-l-2 px-8 my-6 flex flex-col space-y-6">
        <p className="text-button font-bold text-sm leading-product">
          {formatValue(card?.Item_price)} FirstCoins
        </p>
        <Link
          to="/hotel-single-room"
          className="bg-add no-underline text-black rounded border-2 border-black py-2 px-6 font-bold text-base leading-loyalty"
        >
          Book A Room
        </Link>
      </div>
    </div>
  );
};

export const HotelSingleRoomsItems = ({ card }) => {
  return (
    <div className=" bg-[#f8f8f8]">
      <div className="bg-white my-9 py-3 px-3">
        <div className=" flex gap-6">
          <div className="w-1/4 space-y-8">
            <p className="capitalize font-bold text-lg leading-loyalty tracking-loyal">
              {card?.roomType}
            </p>
            <img
              className="h-[140px] w-[185px]"
              src={require(`../../../assets/images/${card?.image}`)}
              alt={card?.hotelName}
            />
          </div>
          <div className="w-1/4 pt-12">
            <h6 className="font-bold text-sm leading-loyalty pb-6">
              Occupancy
            </h6>
            <p className="capitalize font-medium text-sm leading-loyalty">
              {card?.occupancy}
            </p>
          </div>
          <div className="w-1/4 pt-12">
            <h6 className="font-bold text-sm leading-loyalty pb-6">
              Conditions
            </h6>
            <p className="capitalize font-medium text-sm leading-loyalty">
              {card?.conditions}
            </p>
          </div>
          <div className="w-1/4 pt-12">
            <h6 className="font-bold text-sm leading-loyalty pb-6">
              Rate per room/night
            </h6>
            <div className="flex flex-col gap-4 ">
              <h6 className="text-button font-bold text-lg leading-product">
                {formatValue(card?.Price)} FirstCoins
              </h6>
              <Link
                to="/hotel_checkout"
                className="capitalize no-underline text-black  bg-add px-11 w-fit py-2 rounded border-black border-2 font-bold leading-loyalty text-sm tracking-loyal "
              >
                redeem
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceItems = ({ card }) => {
  return (
    <Link
      to={`/single-experience-info/${card?.product_code}`}
      className="flex w-full sm:w-1/2 lg:w-1/4 justify-start card-deco py-4 px-8 flex-col"
    >
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <div className="w-full no-underline h-[250px] mx-auto flex sm:h-fit">
          <img
            className=" mx-auto object-cover object-center py-4 px-4 h-[250px]"
            src={card?.image}
            alt={card?.title}
          />
        </div>
      </div>
      <div className="px-[11px] space-y-2">
        <h6 className="text-base truncate text-list pt-2 font-normal leading-loyalty tracking-loyal">
          {card?.product}
        </h6>
        <div className="flex gap-3  items-center">
          <img src={experienceLocate} alt="experience location" />
          <h3 className="text-base truncate text-list my-0 font-normal leading-loyalty tracking-loyal">
            {card?.city}, {card?.country}
          </h3>
        </div>

        <h3 className="font-bold text-button text-base leading-loyalty tracking-loyal">
          {formatValue(card?.price)} FirstCoins
        </h3>
      </div>
    </Link>
  );
};

export const SingleExperienceInformationItems = ({ card }) => {
  return (
    <div>
      <div className="px-28 bg-[#f8f8f8]">
        <div className="flex gap-8 my-4">
          <div className="w-3/5 h-[352px]">
            <img className="w-full h-full" src={card?.image} alt="lagos" />
          </div>

          <div className="flex gap-8 w-2/5 h-80 ">
            <div className="flex flex-col gap-8 w-full h-full ">
              <div className="w-full h-1/2">
                <img className="w-full h-full" src={card?.image} alt="lagos" />
              </div>
              <div className="w-full h-1/2">
                <img className="w-full h-full" src={card?.image} alt="lagos" />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full h-full">
              <div className="w-full h-1/2">
                <img className="w-full h-full" src={card?.image} alt="lagos" />
              </div>
              <div className="w-full h-1/2">
                <img className="w-full h-full" src={card?.image} alt="lagos" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 pb-4">
          <div className="px-8 w-3/5 h-fit bg-white rounded">
            <div className="border-b py-4 ">
              <h6 className="py-2 font-bold capitalize text-2xl leading-loyalty tracking-loyal">
                {card?.product}
              </h6>

              <div className="flex gap-3">
                <img src={singleLocation} alt="calendar" />
                <p className="text-[#7e7e7e] leading-loyalty font-medium text-base tracking-loyal">
                  {card?.product}, {card?.city}, {card?.state}
                </p>
              </div>
            </div>

            <div className="py-8">
              <p className="font-medium text-base leading-loyalty tracking-loyal">
                {card?.description}
              </p>
            </div>

            <div>
              <p className="font-medium text-sm leading-loyalty tracking-loyal text-[#666666]">
                AVAILABLE TICKETS
              </p>
              <div className="flex justify-between border-b pb-3 items-center my-4">
                <div className="">
                  <h6 className="capitalize font-bold text-base leading-loyalty tracking-loyal  ">
                    {card?.type1}
                  </h6>
                  <p className="capitalize font-medium text-base leading-loyalty tracking-loyal text-[#767676]">
                    {formatValue(card?.Item_price)} FirstCoins
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="capitalize">qty</p>

                  <div className="flex gap-3 items-center">
                    <button className="">
                      <img src={minus} alt="minus" />
                    </button>
                    <input className="w-8 px-2" value={1} />
                    <button className=" ">
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-b pb-3 items-center my-4">
                <div className="">
                  <h6 className="capitalize font-bold text-base leading-loyalty tracking-loyal  ">
                    child
                  </h6>
                  <p className="capitalize font-medium text-base leading-loyalty tracking-loyal text-[#767676]">
                    2,600 cowries
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="capitalize">qty</p>

                  <div className="flex gap-3 items-center">
                    <button className="">
                      <img src={minus} alt="minus" />
                    </button>
                    <input className="w-8 px-2" value={1} />
                    <button className=" ">
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-b pb-3 items-center my-4">
                <div className="">
                  <h6 className="capitalize font-bold text-base leading-loyalty tracking-loyal  ">
                    senior citizen
                  </h6>
                  <p className="capitalize font-medium text-base leading-loyalty tracking-loyal text-[#767676]">
                    2,600 cowries
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="capitalize">qty</p>

                  <div className="flex gap-3 items-center">
                    <button className="">
                      <img src={minus} alt="minus" />
                    </button>
                    <input className="w-8 px-2" value={1} />
                    <button className=" ">
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="w-2/5 h-fit">
            <div className="px-8 bg-white rounded">
              <div className="flex justify-between  border-b py-4">
                <h6 className="font-bold text-lg leading-loyalty tracking-loyal capitalize">
                  summary
                </h6>
                <p className="">2 tickets</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="">2 x Adults</p>
                <p>4,800 cowries</p>
              </div>
              <div className="">
                <h6 className="my-2">Adult 1</h6>
                <div className="flex flex-col my-2">
                  <label className="capitalize my-1" htmlFor="">
                    full name
                  </label>
                  <input
                    className="capitalize pl-2"
                    type="text"
                    placeholder="enter your name"
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label className="capitalize my-2" htmlFor="">
                    phone number
                  </label>
                  <input
                    className="capitalize pl-2"
                    type="text"
                    placeholder="enter phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h6 className="my-2">Adult 2</h6>
                <div className="flex flex-col my-2">
                  <label className="capitalize my-1" htmlFor="">
                    full name
                  </label>
                  <input
                    className="capitalize pl-2"
                    type="text"
                    placeholder="enter your name"
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label className="capitalize my-2" htmlFor="">
                    phone number
                  </label>
                  <input
                    className="capitalize pl-2"
                    type="text"
                    placeholder="enter phone number"
                  />
                </div>
              </div>
              <div className="flex my-8  py-6 border-y">
                <p className="capitalize">2 x children</p>
                <p>{card?.Item_price} cowries</p>
              </div>
              <div className="flex justify-between">
                <h6 className="capitalize font-bold text-lg leading-loyalty tracking-loyal">
                  total
                </h6>
                <h6 className="capitalize font-bold text-lg leading-loyalty tracking-loyal">
                  {card?.Item_price} FirstCoins
                </h6>
              </div>
              <button className="bg-submit w-full rounded text-white py-3 my-4 font-bold text-base leading-loyalty capitalize tracking-loyal">
                process order
              </button>
            </div>
            <div className="py-4 space-y-4">
              <p className="font-medium text-sm tracking-loyal leading-">
                By placing an order, you agree to (provider)’s Terms and Privacy
                policy
              </p>
              <p className="font-medium text-sm tracking-loyal leading-">
                Information and update on this order will be sent to your
                FirstBank registered email address
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MealItems = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex card-deco my-2 pb-10 px-2 flex-col w-1/2 sm:w-[280px] sm:pb-8"
    >
      <div className="border-solid gap-8 border rounded border-[#eeeeee]">
        <div className="w-full items-center no-underline mx-auto flex sm:h-fit">
          <img
            className="w-[400px] items-center object-contain object-center pt-2 mx-auto pb-2 px-[11px]  sm:pt-10"
            src={card?.Partner_logo}
            alt={card?.Item_name}
          />
        </div>
      </div>
      <div className="">
        <h6 className="text-base capitalize truncate text-list pt-2 font-medium leading-loyalty tracking-loyal">
          {card?.Partner_name}

          {card?.Partner_id}
        </h6>
        <div>
          <div className="mt-6 flex mx-auto font-bold w-full text-xs lg:text-base py-1 justify-center bg-add rounded border-2 border-solid border-black">
            View Locations
          </div>
        </div>
      </div>
    </div>
  );
};
