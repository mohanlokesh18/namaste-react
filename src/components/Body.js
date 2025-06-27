import { useEffect, useState } from "react";
import { SEARCH_LOGO_URL } from "../utils/constants";
import restaurantList from "../utils/mockedData";
import RestaurantCard from "./RestaurantCard"
import swaggiData from "../utils/swaggiApiMockedData.json"
import Shimmer from "./ShimmerLoadingCards";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        setTimeout(()=>{
            fetchData();
        },1000)
    },[])

    const filterRestaurant = () => {
        const filterRest = restaurantData.filter((topRest) => topRest.info.avgRating >= 4.5);
        setRestaurantData(filterRest);
    }

    const fetchData = async () => {
    // const url = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8794598&lng=77.648473&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // // const url = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8794598&lng=77.648473&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    // const data = await fetch(url)    
    // const jsonData = await data.json();
    // console.log(jsonData);
    // const url = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://corsproxy.io/?https://food-villa-backend.vercel.app/api/restaurants");



    setRestaurantData(swaggiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setIsLoading(false);

    }

    return isLoading? (<Shimmer/>) : (
        <div className="bodyContainer">
            <div className="searchContainer">
                <button onClick={filterRestaurant}>Top Restaurants👑</button>
                <button onClick={()=>setRestaurantData(swaggiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}>❌</button>
                <label><img className="searchImg" alt="search icon" src={SEARCH_LOGO_URL}></img></label>
                <input className="inputBox" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value);}}></input>
            </div>
            <div className="restContainer">
                {restaurantData.filter((rest)=>rest.info.name.toLowerCase().includes(searchQuery.toLowerCase())).map((rest)=> <RestaurantCard key={rest.info.id} resData={rest}/>)}
            </div>
        </div>
    )
}

export default Body;