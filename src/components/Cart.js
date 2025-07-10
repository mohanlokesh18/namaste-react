import { useDispatch, useSelector } from "react-redux";
import { REST_IMG_PREFIX_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  const totalCost = cartItems.reduce((acc, item) => {
    const price =
      item?.card?.info?.finalPrice ??
      item?.card?.info?.price ??
      item?.card?.info?.defaultPrice;
    return acc + (price || 0);
  }, 0);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-9/12 mx-auto my-4 shadow-lg rounded-md p-4 bg-gray-100">
      <h1 className="flex justify-center font-bold text-red-400">
        {cartItems.length === 0 ? "Cart is empty, please add items." : ""}
      </h1>
      {cartItems.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col w-10/12">
            <hr className="my-4 border-gray-400" />
            <h3 className="m-2">{item?.card?.info?.name}</h3>
            <h3 className="mx-2 text-gray-700 pl-1">
              ₹{" "}
              {(item?.card?.info?.finalPrice ??
                item?.card?.info?.price ??
                item?.card?.info?.defaultPrice) / 100}
            </h3>
            <h3 className="mx-2 text-gray-500 text-sm pl-1">
              {item?.card?.info?.description}
            </h3>
          </div>
          <div className="w-2/12">
            <hr className="my-4 border-gray-400 " />
            <button
              className="bg-black px-1 ml-[4%] mt-[6%] absolute rounded-md text-white border-[1px] border-white"
              onClick={() => addToCart(item)}
            >
              +ADD
            </button>
            <img
              className="h-[100px] w-full"
              src={REST_IMG_PREFIX_URL + item?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
      <div>
        <span>
          <b>Final Price: ₹ {totalCost / 100}</b>
        </span>
      </div>
    </div>
  );
};
export default Cart;
