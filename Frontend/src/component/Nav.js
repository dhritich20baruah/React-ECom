import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './images/pepperfryLogo.jpg'

const Nav = () => {
    const [visibility, setVisibility] = useState('hidden')

    return (
        <>
            <div className='flex flex-row justify-between md:px-10 bg-gray-100 py-3'>
                <ul className='md:flex flex-row space-x-7 text-lg hidden'>
                    <li></li>
                    <li>Sell on Pepperfry</li>
                    <li>Become a Franchisee</li>
                    <li>Buy in Bulk</li>
                    <li>Find a Studio</li>
                    <li>Find Design Inspiration</li>
                </ul>
                <div className='flex flex-row'>
                    <i className="material-icons p-3 text-black hover:text-yellow-400 hover:cursor-pointer block md:hidden" onClick={()=>{setVisibility(!visibility)}}>reorder</i>
                    <ul className='flex md:flex-row flex-col md:space-x-5 text-sm'>
                        <li className='capitalize'>Enter Pincode</li>
                        <li className='md:block hidden'><i className="material-icons text-gray-400 underline">create</i></li>
                        <li className='text-red-400 underline'>Find Pepperfry Studio</li>
                    </ul>
                </div>
                {/* SM SCREEN */}
                <div className='md:hidden block'>
                    <i className="material-icons p-1 hover:cursor-pointer ">search</i>
                    <i className="material-icons p-1 hover:cursor-pointer ">person_outline</i>
                    <i className="material-icons p-1 hover:cursor-pointer ">favorite_border</i>
                    <i className="material-icons p-1 hover:cursor-pointer">shopping_cart</i>
                </div>
            </div>
            {/* MD SCREEN */}
            <div className='md:block hidden'>
                <ul className=' flex flex-row text-gray-700 h-12 text-lg md:space-x-3 space-x-1 ml-20 my-5'>                   
                    <li><img src={logo} alt="" className='w-40'/></li>
                    <li className=''>
                        <input type="text" className='bg-gray-200 px-2 h-10 w-[60vw] border-none font-thin' placeholder='Your door to happiness opens with a search'/><i className="material-icons bg-gray-200 hover:cursor-pointer h-10 pt-1 px-2">search</i></li>
                    <li>
                        <div className='flex flex-row'>
                            <button className='font-bold text-sm border-black border-2 px-1 rounded-2xl my-2 mx-2'>HELP</button>                            
                            <i className="material-icons p-3 hover:cursor-pointer ">person_outline</i>
                            <i className="material-icons p-3 hover:cursor-pointer ">favorite_border</i>
                            <i className="material-icons p-3 hover:cursor-pointer">shopping_cart</i>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
            {/* MAIN NAV */}
             <nav className=''>                
                <ul className='hidden md:flex flex-row text-black h-12 text-md font-semibold ml-14 space-x-6 '>
                    <li></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="/">Furniture</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="about">Home Decor</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="shop">Lamp & Lighting</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="contact">Kitchen & Dinning</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="/">Furnishings</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="about">Matresses</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="shop">Appliances</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="contact">Pets</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="shop">Modular</Link></li>
                    <li className='hover:cursor-pointer hover:border-b-4 hover:border-orange-600 p-2'><Link to="contact">Gift Cards</Link></li>
                </ul>
            </nav>
            {/* SIDENAV */}
            <div className={visibility?'hidden':null}>
            <div className='h-[100vh] bg-white absolute w-[100%] z-20 top-0'>
                 <div className='flex flex-row align-middle'>
                    <i className="material-icons basis-1/6" onClick={()=>{setVisibility(!visibility)}}>arrow_back</i>
                    <div className='bg-orange-600 text-white w-10 h-10 rounded-full relative basis-1/6'><h2 className='centerDiv absolute'>AS</h2></div>
                    <div className='basis-1/6'>
                        <p>Hey<br/><span>My Account</span></p>
                    </div>
                    <div className='basis-1/6'>Wallet</div>
                    <div className='basis-1/6'><i className="material-icons">home</i><br/>Home</div>
                 </div>
                 <div>
                    <div></div>
                    <div></div>
                 </div>
            </div>
            </div> 
        </>
    )
}

export default Nav