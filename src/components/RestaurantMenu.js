import Shimmer from "./ShimmerLoadingCards";
import { useParams } from "react-router-dom";
import Error from "./Error";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestMenuCategories from "./RestMenuCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [addIndex, setAddIndex] = useState(null);

  const swiggyMenuData = useRestaurantMenu(resId);

  if (!swiggyMenuData) return <Shimmer />;

  const info = swiggyMenuData?.data?.cards?.find((c) => c?.card?.card?.info)
    ?.card?.card?.info;

  const regularCards = swiggyMenuData?.data?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards?.find((c) => c?.card?.card?.itemCards)?.card
    ?.card?.itemCards;

  if (!info || !itemCards) return <Error message="Invalid restaurant data" />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    totalRatingsString,
  } = info;

  const itemCategory = regularCards.filter((cat) => {
    return (
      cat?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  console.log(itemCategory);

  return (
    <div className=" m-5">
      <div className="flex flex-col justify-center items-center">
        <div className="text-left">
          <h1 className="font-bold text-2xl my-2">{name}</h1>
          <h3>
            {cuisines.join(", ")} - {costForTwoMessage}
          </h3>
          <h3 className="mx-0 text-gray-500 text-sm">Outlet: {areaName}</h3>
          <h3 className="mx-0 text-gray-500 text-sm">
            ⏱ Delivery Time: {sla.slaString}
          </h3>
        </div>
        <div>
          <img src={itemCategory?.card?.card?.image}></img>
        </div>
      </div>
      <div className="m-4">
        {itemCategory.map((item, index) => (
          <RestMenuCategories
            key={item?.card?.card?.title}
            categoryData={item?.card?.card}
            showItem={index === addIndex ? true : false}
            setIndexProp={() =>
              index !== addIndex ? setAddIndex(index) : setAddIndex(null)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
