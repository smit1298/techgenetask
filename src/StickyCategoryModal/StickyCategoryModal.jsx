import React, { useState, useEffect } from "react";
import cancel from "../assets/svg/cancel.svg";
import { formatValue } from "../components/config/helper";
import { Link } from "react-router-dom";

const StickyCategoryModal = () => {
  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(false);
  };
  const data = [
    {
      name: "LAPTOPS",
      image:
        "http://rewardsboxnigeria.com/rims_2019/cart-images/medium/hp255g8amdryzen3silver_medium.jpg",
      Merchandize_category_id: "394",
      min_price_in_point: "212960"
    }
  ];

  return (
    <div>
      {visible && (
        <div className="bg-[#00d2ff] rounded-t-xl space-y-2 fixed top-69 left-4 bottom-10 cursor-pointer w-[242px] h-[330px]">
          {data && (
            <div>
              {data.map((stick) => (
                <div className="flex flex-col space-y-2 mx-auto">
                  <div
                    onClick={handleVisibility}
                    className="flex bg-black absolute right-0 w-fit rounded-full"
                  >
                    <img className="w-6" src={cancel} alt="" />
                  </div>

                  <Link
                    className="flex flex-col w-3/4 mx-auto space-y-4 py-3"
                    to={`/single-category/${stick.Merchandize_category_id}`}
                  >
                    <h6 className="font-semibold text-base tracking-loyal leading-loyalty items-center">
                      Why not get a &nbsp;
                      <span className="capitalize">
                        {stick.name.toLowerCase()}
                      </span>
                      ?
                    </h6>

                    <img
                      className="w-full lowercase rounded h-[166px] "
                      src={stick.image}
                      alt={stick.name}
                    />

                    <button className="bg-add py-2.5 border-solid border-black rounded border-2 font-bold text-base leading-loyalty tracking-loyal w-full">
                      From {formatValue(stick.min_price_in_point)} Coins
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StickyCategoryModal;
