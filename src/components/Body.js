import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constants";
import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./ShimmerLoadingCards";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
    const url = SWIGGY_RESTAURANT_API;
    const data = await fetch(proxyUrl + encodeURIComponent(url));
    const jsonSwaggiRestaurantData = await data.json();
    console.log(jsonSwaggiRestaurantData);
    console.log(restaurantData);

    setRestaurantData(
      jsonSwaggiRestaurantData?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setResponseData(
      jsonSwaggiRestaurantData?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setIsLoading(false);
  };

  const filterRestaurant = () => {
    const filterRest = restaurantData.filter(
      (topRest) => topRest.info.avgRating >= 4.5
    );
    setRestaurantData(filterRest);
  };

  const PromotedRest = PromotedRestaurantCard(RestaurantCard);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="mt-5 p-2 ">
      <div className="m-1 p-1 flex gap-1 h-[44px]">
        <button
          className=" w-full p-1 border-2 border-gray-300 rounded-md"
          onClick={filterRestaurant}
        >
          Top Restaurants👑
        </button>
        <button
          className=" p-1 border-2 border-gray-300 rounded-md"
          onClick={() => setRestaurantData(responseData)}
        >
          ❌
        </button>

        <input
          className="ml-2 border-2 border-green-200 rounded-md p-1 w-[100%]"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
        <label className="bg-green-200 flex items-center p-1 rounded-md">
          Search
        </label>
      </div>
      <div className="flex flex-wrap items-stretch justify-around m-2 pt-5">
        {restaurantData
          .filter((rest) =>
            rest?.info?.name?.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((rest) => (
            <Link key={rest?.info?.id} to={`/restaurant/${rest.info.id}`}>
              {rest.info.avgRating >= 4.5 ? (
                <PromotedRest resData={rest} />
              ) : (
                <RestaurantCard resData={rest} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
