import React from "react";
import { PopularItems } from "../../CardItems/CardItem";
import category from "../../../../category";

function PopularList() {

  
  return (
    <div className="px-6 my-4 sm:px-[100px] sm:pt-8 sm:pb-32">
      {category !== null && (
        <div className="flex mt-16 space-y-6 justify-center">
          <div className="flex w-full flex-wrap gap-y-8 justify-between sm:flex-wrap sm:gap-y-12">
            {category.map((item, index) =>
              index < 6 ? (
                <PopularItems key={item.Merchandize_category_id} card={item} />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularList;
