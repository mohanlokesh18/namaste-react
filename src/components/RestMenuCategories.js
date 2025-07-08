import { useState } from "react";
import { REST_IMG_PREFIX_URL } from "../utils/constants";

const RestMenuCategories = ({ categoryData, showItem, setIndexProp }) => {
  const items = categoryData?.itemCards;
  console.log(items);
  return (
    <div
      className="w-9/12 mx-auto my-4 shadow-lg rounded-md p-4 bg-gray-100 cursor-pointer"
      onClick={() => setIndexProp()}
    >
      <div className="flex justify-between text-lg">
        <b>{categoryData.title}</b>
        <span>{(showItem && "⬆️") || "⬇️"}</span>
      </div>
      {showItem &&
        items.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="flex">
              <div className="flex flex-col w-10/12">
                <hr className="my-4 border-gray-400" />
                <h3 className="m-2">{item?.card?.info?.name}</h3>
                <h3 className="mx-2 text-gray-700 pl-1">
                  ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </h3>
                <h3 className="mx-2 text-gray-500 text-sm pl-1">
                  {item?.card?.info?.description}
                </h3>
              </div>
              <div className="w-2/12">
                <hr className="my-4 border-gray-400 " />
                <button className="bg-black px-1 ml-[4%] mt-[6%] absolute rounded-md text-white">
                  +ADD
                </button>
                <img
                  className="h-[100px] w-full"
                  src={REST_IMG_PREFIX_URL + item?.card?.info?.imageId}
                ></img>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestMenuCategories;
