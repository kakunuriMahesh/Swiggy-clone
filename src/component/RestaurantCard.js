import { Link } from "react-router-dom";
import { link } from "../../utils/constant";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, sla, cuisines, costForTwo } =
    props.item.info;

  return (
    <div className="w-[250px] h-[250px] p-[10px] m-[20px] rounded-md hover:bg-red-100">
      <img
        className="w-[250px] h-[150px] rounded-md"
        src={link + cloudinaryImageId}
      />
      {name.length > 25 ? (
        <h3 className=" font-bold">{name.slice(0, 24) + "..."}</h3>
      ) : (
        <h3 className=" font-bold">{name}</h3>
      )}
      <div className="flex justify-between">
        <p className="text-xs">{sla.deliveryTime} Mnts</p>
        <p className="text-xs">{avgRating} 🌟 Rating</p>
      </div>
      {cuisines[1] === undefined ? (
        <p className=" text-xs">Area Not Found</p>
      ) : (
        <p>{cuisines[1]}</p>
      )}
      <p className="font-bold">{costForTwo}</p>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-green-400 text-black m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
