import { REST_IMG_PREFIX_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="w-[250px] h-[420px] flex flex-col justify-between cursor-pointer shadow p-3 rounded-lg hover:bg-gray-100 mb-8 bg-white">
      <img
        className="rounded-lg"
        alt="restImg"
        src={REST_IMG_PREFIX_URL + resData.info.cloudinaryImageId}
      />
      <div className="mt-3 flex flex-col flex-grow cursor-pointer">
        <label className="font-bold cursor-pointer">{resData.info.name}</label>
        <label className=" cursor-pointer">{resData.info.avgRating}⭐</label>
        <label className="cursor-pointer text-sm text-gray-500 truncate overflow-hidden">
          {resData.info.cuisines.join(", ")}
        </label>
        <label className=" cursor-pointer">
          🛵{resData.info.sla.deliveryTime} mins
        </label>
      </div>
    </div>
  );
};

export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute rounded-md p-[1px] px-0.5 mt-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// export { promotedRestaurantCard };
export default RestaurantCard;
