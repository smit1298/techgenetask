import React from "react";
import { ArrivalItems } from "../../CardItems/CardItem";
import arrivals from "../../../../arrival";

function ArrivalList() {
  return (
    <div className="sm:px-[70px]">
      {arrivals?.data?.length !== 0 && (
        <div className="flex overflow-x-scroll scrollbar-hide px-3 mx-auto gap-4 sm:overflow-hidden sm:flex-wrap">
          {arrivals?.data?.map((item, index) =>
            index <= 3 ? <ArrivalItems key={index} card={item} /> : ""
          )}
        </div>
      )}
    </div>
  );
}

export default ArrivalList;
