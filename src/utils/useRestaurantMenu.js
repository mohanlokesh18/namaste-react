import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
    const swiggyUrl = SWIGGY_MENU_API + resId;
    const respons = await fetch(proxyUrl + encodeURIComponent(swiggyUrl));
    const json = await respons.json();
    setData(json);
    console.log(data);
  };
  return data;
};
export default useRestaurantMenu;
