import { useEffect, useState } from "react";
import { SEARCH_LOGO_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
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
    
    const url = "https://raw.githubusercontent.com/silenteyes18/namaste-react/refs/heads/main/src/utils/swaggiApiMockedData.json";
    const data = await fetch(url)    
    const jsonSwaggiRestaurantData = await data.json();
    console.log(jsonSwaggiRestaurantData);


    setRestaurantData(jsonSwaggiRestaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setIsLoading(false);

    }

    return isLoading? (<Shimmer/>) : (
        <div className="bodyContainer">
            <div className="searchContainer">
                <button onClick={filterRestaurant}>Top Restaurants👑</button>
                <button onClick={()=>setRestaurantData(jsonSwaggiRestaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}>❌</button>
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