import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./ShimmerLoadingCards";
import { useParams } from "react-router-dom";
import Error from "./Error";

const RestaurantMenu = () => {
  const [swiggyMenuData, setSwiggyMenuData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
      // const swiggyUrl = SWIGGY_MENU_API + "606852";
      // const swiggyUrl = SWIGGY_MENU_API + "791696";
      const swiggyUrl = SWIGGY_MENU_API + resId;

      const data = await fetch(proxyUrl + encodeURIComponent(swiggyUrl));
      const json = await data.json();

      setSwiggyMenuData(json);
    } catch (error) {
      console.log(error);
      <Error />;
    }
  };

  if (swiggyMenuData.length === 0) return <Shimmer />;

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

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>
        ⭐ {avgRatingString}({totalRatingsString}) - {costForTwoMessage}
      </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Outlet: {areaName}</h3>
      <h3>⏱ Delivery Time: {sla.slaString}</h3>

      {itemCards.map((item) => (
        <div key={item?.card?.info?.id} className="menu-item">
          <h3>
            <b>{item?.card?.info?.name}</b>
          </h3>
          <h4>
            ₹
            {item?.card?.info.finalPrice / 100 ||
              item?.card?.info.price / 100 ||
              item?.card?.info.defaultPrice / 100}
          </h4>
          <span className="star">
            {item?.card?.info.ratings?.aggregatedRating?.rating
              ? "★" + item?.card?.info.ratings?.aggregatedRating?.rating
              : ""}
          </span>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
