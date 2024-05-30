import React, { useRef } from "react";
import { ProductsItem } from "../../CardItems/CardItem";
import left from "../../../../assets/svg/left.svg";
import right from "../../../../assets/svg/right.svg";
import products from "../../../../product";

function ProductsList() {

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  
  return (
    <div className="flex flex-col gap-2">
      <div className="hidden md:flex ml-[700px] w-fit gap-4 pt-9">
        <button>
          <img onClick={() => scroll(-40)} src={left} alt="left" />
        </button>
        <button>
          <img onClick={() => scroll(40)} src={right} alt="right" />
        </button>
      </div>

      <div
        className="flex max-w-[800px] overflow-x-scroll scrollbar-hide space-x-5"
        ref={ref}
      >
        {products?.data?.length !== 0 && (
          <div className="flex">
            {products?.data?.map((item, index) => (
              <ProductsItem key={index} card={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
