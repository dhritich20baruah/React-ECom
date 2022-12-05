import React from 'react'
import image5 from './images/img5.jpg'
import imagePremium from './images/imagePremium.jpg'
import imageBudget from './images/imageBudget.png'
import accessories from './images/imageAccessories.jpg'
import image1 from './images/img1.jpg'
import ProductCard from './ProductCard'

const Home = () => {
    return (
        <>
           <section id="home">
            <div className='relative'>
                <img src={image5} alt="" />
                <div className='absolute text-white top-14 md:top-36 right-36 text-xl md:text-4xl'>
                    <h1 className='italic font-serif'>Grand Festive Offers</h1>
                    <hr />
                    <p className='font-bold'>This Festive Season <br />
                        <span className='text-orange-300'>Buy Any Laptop</span> <br />
                        & Get Amazing Offers
                    </p>
                    <p className='text-lg'>Limited OFFERS!! Hurry Up</p>
                </div>
            </div>
           </section>
           <section id="slides" className='flex flex-row justify-evenly py-5 bg-gradient-to-b from-[#292828] to-black text-white font-bold'>
            <div className='flex flex-col justify-center'>
                <div><img src={imagePremium} alt="" className='w-56 h-56 object-contain'/></div>
                <h3 className='text-lg text-center'>Premium Laptops</h3>
                <button className='p-3 bg-red-600 hover:bg-orange-400 hover:cursor-pointer'>Shop Now</button>
            </div>
            <div className='flex flex-col justify-center'>
                <div><img src={imageBudget} alt="" className='w-56 h-56 object-contain'/></div>
                <h3 className='text-lg text-center'>Budget Laptops</h3>
                <button className='p-3 bg-red-600 hover:bg-orange-400 hover:cursor-pointer'>Shop Now</button>
            </div>
            <div className='flex flex-col justify-center'>
                <div><img src={image1} alt=""className='w-56 h-56 object-contain' /></div>
                <h3 className='text-lg text-center'>New Arrivals</h3>
                <button className='p-3 bg-red-600 hover:bg-orange-400 hover:cursor-pointer'>Shop Now</button>
            </div>
            <div className='flex flex-col justify-center'>
                <div><img src={accessories} alt="" className='w-56 h-56 object-contain'/></div>
                <h3 className='text-lg text-center'>Accessories</h3>
                <button className='p-3 bg-red-600 hover:bg-orange-400 hover:cursor-pointer'>Shop Now</button>
            </div>
           </section>
           
           <section id="latestProduct">
            <ProductCard/>
           </section>
        </>
    )
}

export default Home