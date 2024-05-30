import React, { useState, useEffect } from "react";
import plus from "../../../assets/svg/plus.svg";
import subtract from "../../../assets/svg/subtract.svg";
import pick from "../../../assets/svg/pickup.svg";
import delivery from "../../../assets/svg/delivery.svg";
import PopularList from "../../../components/Cards/CardList/Shops/PopularList"
import ProductList from "../../../components/Cards/CardList/Shops/ProductsList"
import Order from "./Order";
import NewArrivalList from "../../../components/Cards/CardList/Shops/NewArrivalList";
import { Link } from "react-router-dom";
import Categories from "../../../components/Categories/Categories";

export const ShopMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  
  /* A react hook that is used to fetch data from the server. */
 
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  const [view, setView] = useState(false);
  const ViewPage = () => {
    setView(!view);
  };
  const images = [
    "https://res.cloudinary.com/due7xlwsg/image/upload/v1677250955/fbn/shopBanner1_aamahr.jpg",
    "https://res.cloudinary.com/due7xlwsg/image/upload/v1677250956/fbn/shopBanner2_rspkph.jpg",
    "https://res.cloudinary.com/due7xlwsg/image/upload/v1685088994/shopBanner3_oivmac.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="relative pb-10">
      <Categories />
      <div>
        <div className="relative h-[180px] lg:h-[500px] w-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-center object-fill transition-opacity duration-500 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-2 bg-products lg:flex sm:px-[115px]">
        <div className="py-9 px-5 lg:py-48 lg:w-1/3">
          <h2 className="leading-loyalty text-center tracking-tighter capitalize text-button font-bold pb-2 text-[25px] flex mx-auto w-fit sm:pb-5 sm:text-5xl sm:text-left">
            products of the day
          </h2>
          <p className="leading-shop tracking-loyal w-fit font-medium text-base mx-auto hidden sm:text-sm sm:block sm:text-start">
            Based on products most viewed by other customers
          </p>
          <p className="font-medium text-sm leading-shop tracking-loyal text-center w-fit sm:mx-0 sm:text-left sm:hidden">
            Based on products most viewed by other customers
          </p>
        </div>
        <div className="lg:w-2/3">
          <ProductList />
        </div>
      </div>

      <div>
        <h2 className="font-bold w-full text-center justify-center flex mx-auto text-[165%] leading-loyalty tracking-tighter text-button pt-5 sm:w-fit sm:mx-auto sm:pt-0 sm:text-[42px]">
          Shop Popular Categories
        </h2>
        <PopularList />
      </div>

      <Order />

      <div>
        <div className="">
          <h2 className="flex justify-center px-12 text-center  text-button text-3/4 font-bold leading-[35px] tracking-tight sm:text-[42px]">
            New arrivals this week
          </h2>
          <h5 className="flex pb-2 justify-center text-[#666666] text-base font-medium leading-[170%] tracking-tight sm:pb-12">
            New product of the week
          </h5>
        </div>
        <div className="">
          <NewArrivalList />
        </div>
      </div>

      {/* onscroll accordion */}
      <div
        className={`fixed ${
          scrollDirection === "down" ? "hidden" : "top-56"
        } right-1 cursor-pointer transition-all duration-500`}
        onClick={ViewPage}
      >
        {!view ? (
          <div className="hidden sm:flex w-72">
            <div className="flex rounded border-solid border bg-add justify-between items-center py-2 px-2">
              <div className="ml-4 mr-10">
                <h2 className="font-bold text-lg leading-loyalty tracking-tight ">
                  Select your preferred mode of shopping
                </h2>
              </div>
              <img src={plus} alt="view shop" />
            </div>
          </div>
        ) : (
          <div className="w-72">
            <div className="flex rounded-t-lg border border-solid bg-add justify-between items-center py-2 px-2">
              <div className="ml-4 mr-10">
                <h2 className="font-bold text-lg leading-loyalty tracking-tight ">
                  Select your preferred mode of shopping
                </h2>
              </div>
              <img src={subtract} alt="view shop" />
            </div>
            <Link
              // to="/order-pick-up"
              className="flex no-underline border-l-2 border-r-2 bg-white justify-between items-center py-2 px-2"
            >
              <div className="ml-4 mr-10">
                <h2 className="font-bold text-lg leading-loyalty tracking-tight ">
                  Order Pickup
                </h2>
                <p className="font-medium text-delivery text-base leading-loyalty tracking-tight">
                  Shop and pickup your items
                </p>
              </div>
              <img src={pick} alt="item pick" />
            </Link>
            <Link
              // to="/order-delivery"
              className="flex no-underline border-2 rounded-b-lg border-solid bg-white justify-between items-center py-2 px-2"
            >
              <div className="ml-4 mr-10">
                <h2 className="font-bold text-lg leading-loyalty tracking-tight ">
                  Order Delivery
                </h2>
                <p className="font-medium text-delivery text-base leading-loyalty tracking-tight">
                  Have your items delivered to you
                </p>
              </div>
              <img src={delivery} alt="item deivery" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
