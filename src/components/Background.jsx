import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen '></div>
     <div className=' absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 font-mono text-xl'>Lokesh's Notes App</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-slate-500 font-semibold'>
        Notes</h1>
    </>
  )
}

export default Background