import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [visibility, setVisibility] = useState('hidden')

    return (
        <>
             <nav className='flex flex-row justify-between bg-black font-bold'>
                <i className="material-icons p-3 text-white hover:text-yellow-400 hover:cursor-pointer block md:hidden" onClick={()=>{setVisibility(!visibility)}}>reorder</i>
                <ul className='hidden md:flex flex-row text-white h-12 text-lg space-x-10 '>
                    <li></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'><Link to="/">Home</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'><Link to="shop">Premium Laptops</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'><Link to="products">Budget Laptops</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'><Link to="contact">Contact</Link></li>
                </ul>
                <ul className=' flex flex-row text-white h-12 text-lg md:space-x-3 space-x-1'>
                    <li></li>
                    <li className='m-3'><input type="text" className='bg-white w-56 border-none px-2 font-thin italic' placeholder='Search items....'/></li>
                    <li><i className="material-icons hover:text-yellow-400 py-3 hover:cursor-pointer ">search</i></li>
                    <li><i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer ">account_circle</i>
                    </li>
                    <li><i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer">shopping_cart</i>
                    </li>
                </ul>
            </nav>
            
            <div className={visibility?'hidden':null}>
            <ul className='flex flex-col text-white p-2 text-lg h-[100vh] bg-black  absolute w-54 z-20'>
                    <li></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="/">Home</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="shop">Premium Laptops</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="products">Budget Laptops</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="contact">Contact</Link></li>
                </ul>
            </div> 
        </>
    )
}

export default Nav