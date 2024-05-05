import React from 'react'
import {Link} from 'react-router-dom'
import useOnline from '../../utils/useOnline'

const Heading=()=>{
    const isOnline = useOnline()
    return (
        <div className=" flex justify-between items-center">
            <img className=" w-[100px]" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgyIpol4PBDm4zlf7IiKnw_Pvj5vt2FdmwQ&s"/>
            <ul className=" flex">
                <li className=' m-3'>{isOnline?'🟢':'🔴'}</li>
                <Link to='/'><li className=' m-3'>Home</li></Link>
                <Link to='/about'><li className=' m-3'>About</li></Link>
                <Link to='/contact'> <li className=' m-3'>Contact</li></Link>
                <Link to='/cart'><li className=' m-3'>Cart</li></Link>
                <li className=' m-3'>Login</li>
            </ul>
        </div>
    )
}
export default Heading