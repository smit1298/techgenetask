import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "../../assets/icons";
import arrowLeft from "../../assets/svg/arrow-left.svg";
import user from "../../assets/svg/user.svg";
import {
  
  formatValue
} from "../config/helper";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link } from "react-router-dom";
import {
  AuctionIcon,
  AvatarModalIcon,
  ChangeIcon,
  DashboardIcon,
  DeliveryIcon,
  OrderIcon,
  SilverNavIcon,
  StatementIcon,
  TierIcon,
  TransferIcon
} from "../../assets/svg/icons";

const NavigationModal = ({ setShowModal, allowScroll }) => {
  const mobileModalArray = [];
  const [mainCategories, setMainCategories] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [shopCategories, setShopCategories] = useState(false);
  const [defaultPage, setDefaultPage] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [shopHeader, setShopHeader] = useState("shop");
  const [profilePage, setProfilePage] = useState(false);
  const [shopPage, setShopPage] = useState(true);
  let [counter, setCounter] = useState(1);
  const dataFetchedRef = useRef(false);

  const handleShopClick = (merchantcategoryid) => {
    var array = mainCategories[mainCategories.length - 1];
    var subcategories = array.find(
      (item) => item?.Merchandize_category_id === merchantcategoryid
    );
    var newArray = mainCategories.push(subcategories.sub_categories);
    setAllCategories(newArray);

    var parent = mainCategories[mainCategories.length - 2].find(
      (item) =>
        item.Merchandize_category_id ===
        subcategories.sub_categories[0].Parent_id
    );
    setShopHeader(parent.Merchandize_category_name);
    setCounter((counter += 1));
  };

 

  const handleShop = () => {
    setShopCategories(true);
    setDefaultPage(false);
  };

  const handleProfileShop = (event) => {
    setShopPage(true);
    setProfilePage(false);
  };

  const handleProfile = () => {
    setProfilePage(true);
    setShopPage(false);
  };

  const handleReverse = () => {
    if (mainCategories?.length <= 1) {
      return;
    }
    var newArray = mainCategories.pop();
    setAllCategories(newArray);

    if (mainCategories.length > 1) {
      var parentId = mainCategories[mainCategories.length - 1][0].Parent_id;
      var parent = mainCategories[mainCategories.length - 2].find(
        (item) => item.Merchandize_category_id === parentId
      );
      setShopHeader(parent.Merchandize_category_name);
    } else {
      setShopHeader("Shop");
    }
    setCounter((counter -= 1));
  };

  const handleVisibility = () => {
    setShowModal(false);
    allowScroll();
  };
  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleVisible2 = () => {
    setVisible2(!visible2);
  };

  const handleDashboard = () => {
    handleVisibility();
  };

  const handleTier = () => {
    handleVisibility();
  };

  const handleStatement = () => {
    //  setShowFilteredTable(true);
    handleVisibility();
  };

  const handleOrder = () => {
    handleVisibility();
  };

  const handleAuction = () => {
    handleVisibility();
  };

  const handleTransfer = () => {
    handleVisibility();
  };

  const handleDelivery = () => {
    handleVisibility();
  };

  const handlePassword = () => {
    handleVisibility();
  };

  const handlePin = () => {
    handleVisibility();
  };

 

  return (
    <div className="flex flex-col justify-between lg:hidden">
      <div className="flex bg-button px-6 pb-4 flex-col space-y-4">
        <div className="flex pt-8 justify-between">
          <>
            <p className="text-white font-bold leading-loyalty tracking-tight">
              <AvatarModalIcon /> Hi, Temitope
            </p>
            <Link
              className="text-white font-medium leading-loyalty tracking-tight underline"
              to="/logout"
            >
              Sign Out
            </Link>
          </>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <li className="flex text-white">
            0 Coins
          </li>

          {/* <div className="flex lg:hidden">
            {show ? (
              <div
                className="text-white"
                onClick={() => dispatch(hidePassword())}
              >
                <AiOutlineEye />
              </div>
            ) : (
              <div
                onClick={() => dispatch(showPassword())}
                className="text-white"
              >
                <AiOutlineEyeInvisible />
              </div>
            )}
          </div> */}
        </div>

        <div className="flex gap-2">
          <SilverNavIcon />
          <p className="text-white capitalize">Silver Member</p>
        </div>
      </div>

      {shopPage && (
        <div className="bg-white pt-3 px-6">
          {defaultPage ? (
            <>
              <ul className="pl-0 space-y-6">
                <li className="">
                  <div
                    onClick={handleShop}
                    className="text-black font-medium text-base leading-loyal tracking-tight"
                  >
                    Shop
                  </div>
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="text-black font-medium text-base leading-loyal
                tracking-tight"
                    aria-current="page"
                    onClick={handleVisibility}
                  >
                    Airtime & Bills
                  </Link>
                </li>

                <li className="flex flex-col">
                  <div
                    onClick={handleVisible}
                    className="text-black flex items-center justify-between font-medium text-base leading-loyal tracking-tight"
                  >
                    <p>Movies & Events</p>
                    <ChevronRight />
                  </div>
                  {visible ? (
                    <div className="flex flex-col pt-3">
                      <Link
                        onClick={handleVisibility}
                        to="/"
                        className="text-black font-medium py-2 text-base leading-loyal tracking-tight"
                      >
                        Movies
                      </Link>
                      <Link
                        onClick={handleVisibility}
                        to="/events"
                        className="text-black font-medium py-2 text-base leading-loyal tracking-tight"
                      >
                        Events
                      </Link>
                    </div>
                  ) : null}
                </li>
                <li className="">
                  <Link
                    to="/"
                    onClick={handleVisibility}
                    className="text-black font-medium text-base leading-loyal tracking-tight"
                  >
                    Experience
                  </Link>
                </li>
                <li className="flex flex-col">
                  <div
                    onClick={handleVisible2}
                    className="text-black flex items-center justify-between font-medium text-base leading-loyal tracking-tight"
                  >
                    <p>Flights & Hotels</p>
                    <ChevronRight />
                  </div>
                  {visible2 ? (
                    <div className="flex flex-col pt-3">
                      <Link
                        onClick={handleVisibility}
                        to="/"
                        className="text-black font-medium py-2 text-base leading-loyal tracking-tight"
                      >
                        Flights
                      </Link>
                      <Link
                        onClick={handleVisibility}
                        to="/hotel"
                        className="text-black font-medium py-2 text-base leading-loyal tracking-tight"
                      >
                        Hotels
                      </Link>
                    </div>
                  ) : null}
                </li>

                <li className="">
                  <Link
                    // href={
                    //   customerPortal +
                    //   getData(myStore)?.data?.token?.token?.id +
                    //   "&path=vouchers"
                    // }
                    className="text-black font-medium text-base leading-loyal
                tracking-tight"
                    aria-current="page"
                    onClick={handleVisibility}
                  >
                    Vouchers
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/"
                    className="text-black font-medium text-base leading-loyal
                tracking-tight"
                    aria-current="page"
                    onClick={handleVisibility}
                  >
                    Discount
                  </Link>
                </li>
                <li className="" onClick={handleVisibility}>
                  <Link
                    to="/meals"
                    className="text-black font-medium text-base leading-loyal tracking-tight"
                  >
                    Meals
                  </Link>
                </li>
              </ul>
              <Link
                to="/profile"
                className="text-black flex border-t-2 py-4 gap-3"
                onClick={handleProfile}
              >
                <img src={user} alt="user" />
                <div className="text-black font-medium text-base leading-loyal tracking-tight">
                  Profile
                </div>
              </Link>
            </>
          ) : (
            <ul className="pl-0 text-black ">
              {mainCategories != null ? (
                <>
                  <div className="flex">
                    {mainCategories?.length > 1 ? (
                      <img
                        onClick={handleReverse}
                        src={arrowLeft}
                        alt="back arrow"
                      />
                    ) : (
                      <div></div>
                    )}
                    {counter === 1 ? (
                      <img
                        onClick={() => setDefaultPage(true)}
                        src={arrowLeft}
                        alt="back arrow"
                      />
                    ) : null}
                    <div className="flex mx-auto">
                      <h3 className="flex text-lg w-fit mx-auto">
                        {shopHeader.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </>
              ) : null}
              {mainCategories != null
                ? mainCategories[mainCategories.length - 1].map((mobile) => {
                    return (
                      <li>
                        {mobile?.sub_categories?.length > 0 ? (
                          <div
                            onClick={() =>
                              handleShopClick(mobile?.Merchandize_category_id)
                            }
                            className="flex my-1.5 justify-between text-black font-medium text-base leading-loyal tracking-tight"
                          >
                            <p>
                              {mobile?.Merchandize_category_name.toUpperCase()}
                            </p>
                            <ChevronRight />
                          </div>
                        ) : (
                          <div className="flex my-1.5 justify-between text-black font-medium text-base leading-loyal tracking-tight">
                            <Link
                              onClick={handleVisibility}
                              to={`/single-category/${mobile?.Merchandize_category_id}`}
                              className="text-black"
                            >
                              {mobile?.Merchandize_category_name.toUpperCase()}
                            </Link>
                          </div>
                        )}
                      </li>
                    );
                  })
                : null}
            </ul>
          )}
        </div>
      )}

      {profilePage && (
        <div className="bg-white pt-3 px-6">
          <div className="flex justify-between py-3">
            <img onClick={handleProfileShop} src={arrowLeft} alt="back" />
            <h6 className=" w-fit capitalize">profile</h6>
            <div></div>
          </div>
          <ul className="pl-0 space-y-6">
            <li to="/profile" onClick={handleDashboard} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <DashboardIcon /> <h6>Account Dashboard</h6>
              </span>
            </li>
            <li onClick={handleTier} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <TierIcon /> <h6> Tier Status</h6>
              </span>
            </li>
            <li onClick={handleStatement} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <StatementIcon /> <h6>Statement</h6>
              </span>
            </li>
            <li onClick={handleOrder} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <OrderIcon /> <h6> Order History</h6>
              </span>
            </li>
            <li onClick={handleAuction} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <AuctionIcon /> <h6>Auction Bid History</h6>
              </span>
            </li>
            <li onClick={handleTransfer} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <TransferIcon /> <h6>Transfer Coin</h6>
              </span>
            </li>
            <li onClick={handleDelivery} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <DeliveryIcon /> <h6>Delivery Address</h6>
              </span>
            </li>
            <li onClick={handlePassword} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <ChangeIcon /> <h6>Change Password</h6>
              </span>
            </li>
            <li onClick={handlePin} className="">
              <span
                className="text-black flex gap-3 font-medium text-base leading-loyal
                tracking-tight"
                aria-current="page"
              >
                <ChangeIcon /> <h6>Reset Pin</h6>
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationModal;
