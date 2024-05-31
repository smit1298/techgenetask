import React from "react";
// import AdBanner from "../../components/AdBanner/AdBanner";
import Categories from "../../components/Categories/Categories";
// import MainCart from "../../components/MainCart/MainCart";
// import CurrentPageNav from "../../components/Navbar/CurrentPageNav";
import "./CartItems.css";

const CartItems = () => {
  return (
    <>
      <div className="main-categories-container">
        <Categories />
        {/* <AdBanner /> */}
        {/* <CurrentPageNav /> */}
        {/* <MainCart /> */}
      </div>
    </>
  );
};

export default CartItems;
