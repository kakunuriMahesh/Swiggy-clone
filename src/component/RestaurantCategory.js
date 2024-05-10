
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import ItemCards from "./ItemCards";

const RestaurantCategory = (props) => {
  // const [showItem, setShowItem] = useState(false)
  const { items ,showItem,setShowIndex} = props;
  // console.log(props)


  const handleItems = ()=>{
    setShowIndex()
  }

  // console.log(props)

  return (
        <div className="flex flex-col items-center">
            <div className="bg-slate-300 m-2 p-1 px-1 w-3/4 rounded-md hover:bg-stone-300">
              <div onClick={handleItems} className="flex justify-between items-center">
                <h5 className="font-bold">
                  {items.title} ({items.itemCards.length})
                </h5>
                {showItem ? <IoIosArrowUp className="cursor-pointer font-bold" /> :<IoIosArrowDown className="cursor-pointer font-bold" />}
              </div>
              {showItem && <ItemCards items={items.itemCards} />}
            </div>
        </div>
      );
  
  };

  

export default RestaurantCategory;



// .....sec.....//



// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// import ItemCards from "./ItemCards";

// const RestaurantCategory = (props) => {
//   const [showItems, setShowItems] = useState(false)
//   const { items } = props;


//   const handleItems = ()=>{
//     setShowItems(!showItems)
//   }

//   // console.log(props)

//   return (
//         <div className="flex flex-col items-center">
//             <div className="bg-slate-300 m-2 p-1 px-1 w-3/4 rounded-md hover:bg-stone-300">
//               <div onClick={handleItems} className="flex justify-between items-center">
//                 <h5 className="font-bold">
//                   {items.title} ({items.itemCards.length})
//                 </h5>
//                 {showItems ? <IoIosArrowUp className="cursor-pointer font-bold" /> :<IoIosArrowDown className="cursor-pointer font-bold" />}
//               </div>
//               {showItems && <ItemCards items={items.itemCards} />}
//             </div>
//         </div>
//       );
  
//   };

  

// export default RestaurantCategory;



// .....first........//

// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// import ItemCards from "./ItemCards";

// const RestaurantCategory = (props) => {
//   const [showItems, setShowItems] = useState(false)
//   const { items } = props;


//   const handleItems = ()=>{
//     setShowItems(!showItems)
//   }

//   // console.log(props)

//   return (
//         <div className="flex flex-col items-center">
//             <div className="bg-slate-300 m-2 p-1 px-1 w-3/4 rounded-md hover:bg-stone-300">
//               <div onClick={handleItems} className="flex justify-between items-center">
//                 <h5 className="font-bold">
//                   {items.title} ({items.itemCards.length})
//                 </h5>
//                 {showItems ? <IoIosArrowUp className="cursor-pointer font-bold" /> :<IoIosArrowDown className="cursor-pointer font-bold" />}
//               </div>
//               {showItems && <ItemCards items={items.itemCards} />}
//             </div>
//         </div>
//       );
  
//   };

  

// export default RestaurantCategory;