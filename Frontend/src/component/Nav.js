import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
             <nav className='flex flex-row justify-between bg-indigo-800 font-bold'>
                <ul className=' flex flex-row text-white h-12 text-lg space-x-10'>
                    <li></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'>Home</li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'>Shop</li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'>Products</li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-2'>Contact</li>
                </ul>
                <ul className=' flex flex-row text-white h-12 text-lg space-x-3'>
                    <li></li>
                    <li className='m-3'><input type="text" className='bg-white w-56 border-none px-2 font-thin italic' placeholder='Search items....'/></li>
                    <li><i className="material-icons hover:text-yellow-400 py-3 hover:cursor-pointer ">search</i></li>
                    <li><i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer ">account_circle</i>
                    </li>
                    <li><i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer">shopping_cart</i>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav