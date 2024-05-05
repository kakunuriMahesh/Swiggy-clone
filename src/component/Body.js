import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import useOnline from "../../utils/useOnline";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const [originalRestaurantData, setOriginalRestaurantData] = useState([]);
  // const isOnline = useOnline()

  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const restaurants = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantData(restaurants);
        setOriginalRestaurantData(restaurants); // Store original data
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length === 0) {
      setFilterRestaurantData([]);
      setRestaurantData(originalRestaurantData); // Reset restaurant data to original data
    }
  };

  return (
    <div>
      <div className=" w-full flex justify-center m-3">
        <input
         className=" outline p-1 w-[400px] rounded-md mr-5"
          type="text"
          placeholder="Search by name..."
          onChange={handleSearch}
        />
        <button
        className=" bg-slate-500 text-white px-4 rounded-md hover:bg-black"
          onClick={() => {
            const filteredData = restaurantData.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterRestaurantData(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-wrap justify-center">
        {restaurantData.length === 0 ? (
          <Shimmer />
        ) : (
          filterRestaurantData.length === 0 ? (
            restaurantData.map((each) => (
              <Link to={'./restaurantmenu/'+each.info.id}><RestaurantCard key={each.info.id} item={each} /></Link>
            ))
          ) : (
            filterRestaurantData.map((each) => (
              <Link to={'./restaurantmenu/'+each.info.id}><RestaurantCard key={each.info.id} item={each} /></Link>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Body;
