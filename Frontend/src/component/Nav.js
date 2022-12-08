import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [visibility, setVisibility] = useState('hidden')

    return (
        <>
            <div>
                <ul className=' flex flex-row text-indigo-700 justify-between h-12 text-lg md:space-x-3 space-x-1 mx-4'>
                    
                    <li className="text-3xl font-bold">Maple</li>
                    <li className=''>
                        <input type="text" className='bg-white w-56 border-none px-2 font-thin italic' placeholder='Search items....'/><i className="material-icons hover:text-yellow-400 py-3 hover:cursor-pointer ">search</i></li>
                    <li>
                        <div>                            
                            <i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer ">account_circle</i>
                            <i className="material-icons p-3 hover:text-yellow-400 hover:cursor-pointer">shopping_cart</i>
                        </div>
                    </li>
                </ul>
            </div>
             <nav className='flex flex-row justify-center bg-indigo-700 font-bold'>
                <i className="material-icons p-3 text-white hover:text-yellow-400 hover:cursor-pointer block md:hidden" onClick={()=>{setVisibility(!visibility)}}>reorder</i>
                <ul className='hidden md:flex flex-row text-white h-12 text-lg space-x-10 '>
                    <li></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-indigo-700 p-2'><Link to="/">Home</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-indigo-700 p-2'><Link to="about">About</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-indigo-700 p-2'><Link to="shop">Shop</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-indigo-700 p-2'><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
            
            <div className={visibility?'hidden':null}>
            <ul className='flex flex-col text-white p-2 text-lg h-[100vh] bg-black  absolute w-54 z-20'>
                    <li></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="/">Home</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="about">About</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="shop">Shop</Link></li>
                    <li className='hover:cursor-pointer hover:bg-white hover:text-orange-700 p-1'><Link to="contact">Contact</Link></li>
                </ul>
            </div> 
        </>
    )
}

export default Nav