import React, { useState, useRef } from "react";
import CartModal from "../Modals/CartModal";

const QuickBuy = ({item}) => {
  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;
   
    html.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.position = "relative"; /* [1] */
    body.style.overflow = "hidden"; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;
    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
    scrollBlocked.current = false;
  };

  const handleOnClose = () => {
    setShowModal(!showModal);
    setAdded(!added);
    allowScroll();
  };

  const Added = () => {
    setAdded(!added);
  };

  return (
    <div className="">
      <div onClick={Added}>
        {!added ? (
          <button
            onClick={() => {
              setShowModal(!showModal);
              blockScroll()
            }}
            className="mt-6 flex mx-auto font-bold w-full text-base py-1 justify-center bg-add rounded border-2 border-solid border-black"
          >
            Quick Buy
          </button>
        ) : (
          <button className="mt-6 flex mx-auto w-full text-base font-bold py-1 px-10 bg-white rounded border-2 text-added border-solid border-added">
            Added to cart
          </button>
        )}
      </div>
      <CartModal onClose={handleOnClose} visible={showModal} item={item}/>
    </div>
  );
};

export default QuickBuy;
