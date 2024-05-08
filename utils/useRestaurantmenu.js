import { useState,useEffect } from "react"
// import { menu_url } from '../utils/constant'
import { menu_url } from "./constant"


const useRestaurantMenu=(id)=>{
    // console.log(id)
    const [menu,setMenu]= useState(null)
    useEffect(()=>{
        const fetchMenu=async()=>{
          const data= await fetch(menu_url+id)
          const res= await data.json()
          setMenu(res)
        }
        fetchMenu()
      },[])
   
      return menu

}

export default useRestaurantMenu
