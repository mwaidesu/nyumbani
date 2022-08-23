import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen hero bg-no-repeat bg-cover bg-right'>
        <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
            <div className='bg-black/50 rounded-3xl h-1/2 w-10/12 md:w-3/4'>
              <h1 className='pl-7 text-6xl text-white	'><span className='text-7xl text-yellow-500'>N</span>yumbani <span className='text-6xl text-yellow-500'>M</span>ove</h1>
              
              <h2 className='pl-7 text-white text-3xl'>The Best Logistic Service Provider</h2>
              <br/>
              <p className='pl-3 text-white text-xl'>A flexible and dedicated Mover's Company dedicated to making your life easier when moving </p>
              <br/>

              <div className='pl-5 flex justify-evenly'>
                <button type='submit' className='bg-yellow-500 rounded p-3 hover:bg-white'>Sign Up</button>
                <button type='submit' className='bg-yellow-500 rounded p-3 gap-4 hover:text-red-700'>Log In</button>
              </div>
            </div>
        </div>

        
        
    </div>
  )
}

export default Hero