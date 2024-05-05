import { Link } from "react-router-dom";
import { link } from "../../utils/constant";
const RestaurantCard = (props) => {
  // console.log(props)
  // const link =
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { name, cloudinaryImageId, avgRating, sla, cuisines, costForTwo } =
    props.item.info;
  // console.log(props.item.info.sla.deliveryTime)

  return (
    <div className="w-[250px] h-[450px] p-[10px] m-[20px] rounded-md hover:bg-red-100">
      <img
        className="w-[300px] h-[300px] rounded-md"
        src={link + cloudinaryImageId}
      />
      {name.length > 25 ? (
        <h3 className=" font-bold">{name.slice(0, 24) + "..."}</h3>
      ) : (
        <h3 className=" font-bold">{name}</h3>
      )}
      {/* <h3 className=" font-bold">{name}</h3> */}
      <div className="flex justify-between">
        <p className="text-xs">{sla.deliveryTime} Mnts</p>
        <p className="text-xs">{avgRating} 🌟 Rating</p>
      </div>
      {cuisines[1] === undefined ? (
        <p className=" text-xs">Area Not Found</p>
      ) : (
        <p>{cuisines[1]}</p>
      )}
      {/* <p>{cuisines[1]}</p> */}
      {console.log(typeof cuisines[1], cuisines[1])}
      <p className="font-bold">{costForTwo}</p>
    </div>
  );
};
export default RestaurantCard;
