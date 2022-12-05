import React from 'react'

const ProductCard = () => {
  return (
    <>
    <div className='flex flex-col justify-center'>
                <div><img src="" alt=""className='w-56 h-56 object-contain' /></div>
                <h3 className='text-lg text-center'>New Arrivals</h3>
                <button className='p-3 bg-red-600 hover:bg-orange-400 hover:cursor-pointer'>Shop Now</button>
    </div>
    </>
  )
}

export default ProductCard