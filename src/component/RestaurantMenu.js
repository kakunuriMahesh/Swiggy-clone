import { useParams } from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  // console.log(showIndex)
  // console.log(id)
  const menu = useRestaurantMenu(id);
  if (menu == null) return <h1>Data Loading</h1>;
  // console.log(menu)

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;
  const categories = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const filterCate = categories.filter(
    (each) =>
      each.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(filterCate)

  return (
    <div>
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      {/* {console.log(showIndex)} */}

      {filterCate.map((each, index) => (

        <RestaurantCategory
          key={each.card.card.title}
          items={each.card.card}
          // showItem={index===4? true: false }
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// .....sec.....//

// import { useParams } from "react-router-dom";

// import useRestaurantMenu from "../../utils/useRestaurantmenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";

// const RestaurantMenu = () => {
//   const { id } = useParams();
//   const [showIndex, setShowIndex] = useState(null);
//   // console.log(id)
//   const menu = useRestaurantMenu(id);
//   if (menu == null) return <h1>Data Loading</h1>;
//   // console.log(menu)

//   const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;
//   const categories = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
//   const filterCate = categories.filter(
//     (each) =>
//       each.card.card["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );

//   // console.log(filterCate)

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h4>{costForTwoMessage}</h4>
//       {filterCate.map((each, index) => (
//         <RestaurantCategory
//         key={index}
//           items={each.card.card}
//           // showItem={index===4? true: false }
//          // showItem={index === showIndex ? true : false}
//          // setShowIndex={() => setShowIndex(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
