import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ItemCards from "./ItemCards";
const RestaurantCategory = (props) => {
  const [drop, setDrop] = useState(false);
  const { items } = props;
//   console.log(items.length);
  return (
    <div>
      {items.map((each) => (
        <div className="bg-slate-300 m-2 p-1 px-1">
          <div className="flex justify-between items-center">
            <h5 className=" font-bold">{each.card.card.title} ({each.card.card.itemCards.length})</h5>
            <IoIosArrowDown
              className=" cursor-pointer font-bold"
              onClick={() => setDrop(!drop)}
            />
          </div>
          {drop?<ItemCards items={each.card.card.itemCards}/>:''}
          {/* {console.log(each.card.card)} */}
        </div>
      ))}
    </div>
  );
};
export default RestaurantCategory;

//..........//

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
