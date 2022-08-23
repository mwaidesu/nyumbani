import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen hero bg-no-repeat bg-cover bg-right'>
        <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
            <div className='bg-black/50 rounded-3xl h-1/2 w-10/12 md:w-3/4'>
              <h1 className='pl-7 text-6xl text-white	'><span className='text-7xl text-yellow-500'>N</span>yumbani <span className='text-6xl text-yellow-500'>M</span>ove</h1>
              
              <h2 className='pl-7 text-white text-3xl'>The Best Logistic Service Provider</h2>
              <br/>
              <p className='text-white text-xl'>A flexible and dedicated Mover's Company dedicated to making your life easier when moving </p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero