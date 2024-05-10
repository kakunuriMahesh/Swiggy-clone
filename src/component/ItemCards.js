import React, { useContext } from "react";
import { link } from "../../utils/constant";

import userContext from "../../utils/userContext";

const ItemCards = (props) => {
  // console.log(props.drop)
  const {loggedInUser} = useContext(userContext)
  const { items } = props;
  return (
    <div className="">
      {items.map((eachItem) => (
        <div className="flex justify-between my-5 mx-3">
          <div>
            <p className=" text-sm">{loggedInUser}👁️</p>
            <p className=" text-sm font-bold w-[250px]">
              {eachItem.card.info.name}
            </p>
            <p>
              ₹
              {eachItem.card.info.price
                ? eachItem.card.info.price / 100
                : eachItem.card.info.defaultPrice / 100}
            </p>
            <p className="w-[200px] text-sm">
                {eachItem.card.info.description}
            </p>
            {/* {more ? eachItem.card.info.description : `${eachItem.card.info.description.slice(0, 100)}...`}
          {!more && (
            <button
              className="text-green-500 hover:underline focus:outline-none"
              onClick={toggleExpanded}
            >  
              Read more
            </button>
          )} */}
          </div>
          {/* { console.log(eachItem.card)} */}
          <div>
            {eachItem.card.info.imageId && (
              <div className="">
                <img
                  className=" w-[150px] rounded-lg border hover:border-black duration-300"
                  src={link + eachItem.card.info.imageId}
                  alt="itemImg"
                />
                  <button className="px-5 py-1 ml-9 rounded-lg bg-white text-green-600 shadow-lg relative -top-4 cursor-pointer hover:shadow-slate-500 duration-300">
                    ADD
                  </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;

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
