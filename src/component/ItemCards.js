import React from "react";
import { link } from "../../utils/constant";
const ItemCards = (props) =>{
    // console.log(props.drop)
    const {items} = props
    return(
        <div>
            {
                items.map(eachItem => 
                    <div className="flex justify-between my-5">
                        <div>
                            <p className=" text-sm font-bold w-[350px]">{eachItem.card.info.name}</p>
                            <p>₹{eachItem.card.info.price?eachItem.card.info.price/100:eachItem.card.info.defaultPrice/100}</p>
                        </div>
                        {/* { console.log(eachItem.card.info)} */}
                        <div>
                            {eachItem.card.info.imageId && <img className="w-[150px] h-[150px]" src={link+eachItem.card.info.imageId} alt="itemImg"/>}
                            <button className="px-5 py-1 ml-9 rounded-lg bg-white text-green-600 shadow-lg absolute">ADD</button>
                        </div>
                    </div>
                )

            }
        </div>
    )
}
export default ItemCards


//.....//

// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import ItemCards from "./ItemCards";

// const RestaurantCategory = (props) => {
//   // State to track the open/close state for each category
//   const [openCategories, setOpenCategories] = useState({});

//   const toggleCategory = (categoryId) => {
//     setOpenCategories((prevState) => ({
//       ...prevState,
//       [categoryId]: !prevState[categoryId] // Toggle the state for the clicked category
//     }));
//   };

//   const { items } = props;

//   return (
//     <div>
//       {items.map((each) => (
//         <div key={each.card.card.title} className="bg-slate-300 m-2 p-1 px-1">
//           <div className="flex justify-between items-center">
//             <h5 className="font-bold">{each.card.card.title} ({each.card.card.itemCards.length})</h5>
//             <IoIosArrowDown
//               className="cursor-pointer font-bold"
//               onClick={() => toggleCategory(each.card.card.title)} // Pass the category title/id to toggleCategory
//             />
//           </div>
//           {openCategories[each.card.card.title] && <ItemCards items={each.card.card.itemCards} />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantCategory;
