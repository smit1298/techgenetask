import React from "react";
import laptop1 from "../../assets/images/laptop1.png";
import cancel from "../../assets/svg/x-modal.svg";
import pick_modal from "../../assets/svg/pick_modal.svg";
import delivery_modal from "../../assets/svg/delivery_modal.svg";
import plus from "../../assets/svg/plus.svg";
import subtract from "../../assets/svg/subtract.svg";
import AddToCart from "../buttons/AddToCart";
import {
  formatValue
} from "../config/helper";
import { useState, useEffect, useRef } from "react";

const CartModal = ({ visible, onClose, item }) => {
  item.Merchandize_item_code = item?.Merchandize_item_code
    ? item?.Merchandize_item_code
    : item?.Item_code;
  const [branches, setBranches] = useState({});
  const [selectField, setSelectField] = useState("block");
  const [quantity, setQuantity] = useState(1);
  const [disbaleCartBtn, setDisableCartBtn] = useState("hidden");
  const cartRef = useRef(true);
  const [itemState, setItemState] = useState({
    ...item,
    Merchandize_item_code: item?.Merchandize_item_code || item?.Item_code,
    item_quantity: 1,
    Delivery_method: 2
  });
  const [isInCart, setIsInCart] = useState(0);
  const [pointer, setPointer] = useState("");
  const [pickupVisibility, setPickupVisibility] = useState("none");
  const [deliveryVisibility, setDeliveryVisibility] = useState("none");
  const [buttonLabel, setButtonLabel] = useState("none");

  const addBranch = () => {
    item = {
      ...item,
      branch_code: document.querySelector("#branches").value,
      item_quantity: quantity
    };
    setItemState(item);
  };

 
  

  if (!visible) return null;

  return (
    <div
      // onClick={onClose}
      className="fixed overflow-y-auto justify-end top-0 left-0 w-full h-full z-10 bg-[#808080] bg-opacity-10 backdrop-blur-sm flex"
    >
      <div className=" w-[450px]">
        <div className="bg-white h-full px-4 py-3">
          <div className="flex justify-between items-center">
            <p className="capitalize py-2 font-bold text-2xl">
              select attributes
            </p>
            <button className="h-fit">
              <img onClick={onClose} className="" src={cancel} alt="close" />
            </button>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex gap-3">
              <div className="border w-fit rounded border-solid">
                <img src={item?.Item_image} alt={item?.Merchandize_item_name} />
              </div>
              <div className="w-1/2 space-y-8">
                <h2 className="text-xl leading-loyalty tracking-loyal font-normal">
                  {item?.Merchandize_item_name
                    ? item?.Merchandize_item_name
                    : item?.Item_name}
                </h2>
                <p className="capitalize font-bold text-base leading-loyalty tracking-loyal">
                  {formatValue(
                    (item?.Billing_price_in_points
                      ? item?.Billing_price_in_points
                      : item?.Price
                      ? item?.Price
                      : item?.Item_price) * quantity
                  )}
                  Coins
                </p>
              </div>
            </div>
            <br />

            {/* <p className="py-3 text-submit font-medium text-sm leading-loyalty tracking-loyal">
              A microcopy specific to this item
            </p> */}

            <div className="flex gap-3 items-center">
              <label
                className="font-bold text-sm tracking-loyal text-cart leading-loyalty"
                htmlFor=""
              >
                Quantity
              </label>
              <div className="flex gap-3">
                <img
                  src={subtract}
                  alt="subtract"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // handleCount(quantity, setQuantity, "-");
                  }}
                />
                <input
                  className="w-[40px] px-2 text-center border-2 border-solid border-black rounded"
                  type="text"
                  value={quantity}
                />
                <img
                  src={plus}
                  alt="plus"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // handleCount(quantity, setQuantity, "+");
                  }}
                />
              </div>
            </div>

            <div className="py-3" style={{ display: "none" }}>
              <p className="font-bold text-sm text-cart pb-3 leading-loyalty tracking-loyal">
                Please select a size
              </p>
              <span className="uppercase flex gap-2 font-medium leading-loyalty tracking-tighter text-[#6a6a6a]">
                <p className="text-[#6a6a6a] bg-[#f5f5f5] p-3 rounded border border-solid">
                  s
                </p>
                <p className="text-[#6a6a6a] bg-[#f5f5f5] p-3 rounded border border-solid">
                  m
                </p>
                <p className="text-[#6a6a6a] bg-[#f5f5f5] p-3 rounded border border-solid">
                  l
                </p>
                <p className="text-[#6a6a6a] bg-[#f5f5f5] p-3 rounded border border-solid">
                  2xl
                </p>
              </span>
            </div>

            <div className="flex space-x-6 py-3">
              <div
                className="w-1/2 bg-[#f5f5f5] rounded p-6"
                style={{
                  display: pickupVisibility,
                  cursor: "pointer",
                  borderColor: ""
                }}
                // onClick={() => {
                //   alterRedemption(
                //     1,
                //     setDeliveryVisibility,
                //     itemState,
                //     setItemState,
                //     setSelectField
                //   );
                // }}
              >
                <p className="flex gap-3 font-bold text-base leading-loyalty tracking-loyal capitalize">
                  <img src={pick_modal} alt="pick" /> pickup
                </p>
                <p className="text-[#313131] font-medium text-base leading-loyalty tracking-loyal">
                  Items should be picked up within 12 days after ordering
                </p>
              </div>

              <div
                className="w-1/2 bg-[#f5f5f5] rounded p-3"
                style={{
                  display: deliveryVisibility,
                  cursor: "pointer",
                  borderColor: ""
                }}
                // onClick={() => {
                //   alterRedemption(
                //     2,
                //     setPickupVisibility,
                //     itemState,
                //     setItemState,
                //     setSelectField
                //   );
                // }}
              >
                <p className="flex gap-3 font-bold text-base leading-loyalty tracking-loyal capitalize">
                  <img src={delivery_modal} alt="pick" /> Delivery
                </p>
                <p className="text-[#313131] font-medium text-base leading-loyalty tracking-loyal">
                  Items should be delivered within 12 days after ordering
                </p>
              </div>
            </div>

            <div style={{ display: selectField }}>
              <select
                className="px-2 py-3 w-full border text-sm capitalize font-bold text-[#313131] border-solid  rounded-sm"
                label="Select pick up location"
                id="branches"
                onChange={addBranch}
                style={{ pointerEvents: pointer }}
              >
                <option>select location</option>
                {branches?.data?.length > 0 ? (
                  branches?.data?.map((branch, index) => (
                    <option
                      className="capitalize"
                      value={branch?.Branch_code}
                      key={index}
                    >
                      {branch?.Branch_name}
                    </option>
                  ))
                ) : (
                  <option style={{ color: "green" }}>
                    loading branches ...
                  </option>
                )}
              </select>
            </div>

            {isInCart?.status !== undefined && isInCart?.status === 1 ? (
              <div>
                <button className="mt-6 w-full text-base font-bold justify-center flex mx-auto py-3 px-[18px] bg-white rounded border-2 text-added border-solid border-added">
                  Added to cart
                </button>
              </div>
            ) : (
              <div className="disabled" ref={cartRef}>
                {(itemState?.Redemption_method == 1 ||
                  itemState?.Redemption_method == 3) &&
                itemState?.branch_code == undefined ? (
                  " "
                ) : (
                  <AddToCart item={itemState} label={buttonLabel} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
