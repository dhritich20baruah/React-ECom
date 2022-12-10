import React from 'react'
import image5 from './images/sofa.jpg'
import deal7 from './images/deal7.jpg'
import deal2 from './images/deal2.jpg'
import deal3 from './images/deal3.jpg'


const Home = () => {
    return (
        <>
           <section id="home">
            <div className='relative'>
                <img src={image5} alt="" className='w-[100%]'/>
                <div className='absolute text-white top-14 md:top-96 bg-indigo-600 right-[50%] text-xl md:text-4xl'>
                    <h1 className='italic font-serif'>Welcome to Maple</h1>
                    <hr />
                    <p className='font-bold'>This Festive Season <br />
                        <span className='text-orange-300'>Furnish your dream home.</span>
                    </p>
                    <p className='text-lg'>Limited OFFERS!! Hurry Up</p>
                </div>
            </div>
           </section>
           
           <section id="services" className='flex flex-row justify-evenly text-orange-600 text-2xl font-bold m-10'>
            <div><i className="material-icons m-4">airport_shuttle</i>Fast delivery</div>
            <div><i className="material-icons m-4">call</i>24X7 Customer support</div>
            <div><i className="material-icons m-4">credit_card</i>Secured payments</div>
           </section>
           
           <section id="featuredProduct" className='m-10'>
            <h1 className='text-center text-indigo-800 text-3xl font-mono font-bold'>FEATURED PRODUCTS</h1>
            <hr />
            <div className="flex flex-row">
                <div className='bg-slate-300 w-[30%]'>
                    <h3 className='italic text-xl text-indigo-600'>Pine wood sofa set</h3>
                </div>
                <img src={deal2} alt="" className='w-[30%]'/>
            </div>
            <div className="flex flex-row">
                <img src={deal3} alt="" className='w-[30%]'/>
            </div>
            <div className="flex flex-row">
                <img src={deal7} alt="" className='w-[30%]'/>
            </div>
           </section>
        </>
    )
}

export default Home