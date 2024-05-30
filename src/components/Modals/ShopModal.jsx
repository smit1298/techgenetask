import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategeoryRightModal from "./CategeoryRightModal";
import { endpoints } from "../../utils/constant";
import { categoryStore, getData, storeData } from "../../config/helper";

const ShopModal = () => {
  const [shopCategories, setShopCategories] = useState(
    getData(categoryStore + "2")?.data
  );

  const [sideData, setSideData] = useState(null);
  const [visibleSideData, setVisibleSideData] = useState(false);
  const [active, setActive] = useState(null);

  const loadCategory = shopCategories?.Categories;

  const menuClick = (index) => {
    setSideData(loadCategory[index].sub_categories);
  };

  useEffect(() => {
    setSideData(
      getData(categoryStore + "2")?.data.Categories[0].sub_categories
    );
    setVisibleSideData(true);
  }, [setShopCategories]);

  return (
    <div className="ml-8">
      {shopCategories !== null && (
        <div className="flex">
          <div className="flex w-[30%] bg-white flex-col">
            <Link
              className={`flex text-left text-black -tracking-wide pr-20 py-3 px-2 font-medium text-sm leading-loyalty cursor-pointer capitalize`}
              to="/"
            >
              New
            </Link>

            {loadCategory?.map((item, index) => {
              return (
                <div
                  className={
                    "text-black font-medium text-base leading-loyalty -tracking-wide"
                  }
                  key={item?.Merchandize_category_id}
                  onClick={() => menuClick(index)}
                >
                  <div
                    className={`flex ${
                      active === item && "active" ? "bg-[#Ecf7fe]" : "bg-whitle"
                    }`}
                    onClick={() => setActive(item)}
                  >
                    <h3
                      className={` -tracking-wide pr-20 py-3 px-2 font-medium text-sm leading-loyalty cursor-pointer capitalize`}
                    >
                      {item?.Merchandize_category_name.toLowerCase()}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          {visibleSideData ? <CategeoryRightModal data={sideData} /> : null}
        </div>
      )}
    </div>
  );
};

export default ShopModal;
