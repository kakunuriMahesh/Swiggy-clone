import { useParams } from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id)
  const menu = useRestaurantMenu(id);
  if (menu == null) return <h1>Data Loading</h1>;
  // console.log(menu)

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;
  const categories= menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  const filterCate = categories.filter(each=>each.card.card['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  // console.log(filterCate)
  
  return (
    <div>
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      <RestaurantCategory items={filterCate}/>
      <button>
        {" "}
        {/* <Link to="/">return</Link> */}
      </button>
    </div>
  ); 
};

export default RestaurantMenu;
