// import React from "react";
// import { Link } from "react-router-dom";

// const RestaurantMenu = ()=>{
//     return(
//         <div>
//             <Link to='/'><button>return to homepage</button></Link>
//             RestaurantMenu
//         </div>
//     )
// }
// export default RestaurantMenu

// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id)
  const menu = useRestaurantMenu(id);
  if (menu == null) return <h1>Data Loading</h1>;
  console.log(menu)

  const { name, costForTwoMessage } = menu.data.cards[2].card.card.info;
  
  return (
    <div>
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      <button>
        {" "}
        <Link to="/">return</Link>
      </button>
    </div>
  );
};

export default RestaurantMenu;
