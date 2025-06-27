import { REST_IMG_PREFIX_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {
        resData
    } = props;
    return (
        <div className="restcard">
                    <img className="restImg" alt="restImg" src={REST_IMG_PREFIX_URL+resData.info.cloudinaryImageId}></img>
                    <label><b>{resData.info.name}</b></label>
                    <label>{resData.info.avgRating}⭐</label>
                    <label className="cuisines">{resData.info.cuisines.join(', ')}</label>
                    <label>{resData.info.sla.deliveryTime} mins</label>
        </div>
    )
}

export default RestaurantCard;