import React from 'react'
import background from "../../assets/doodle_background.svg"

const Error = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen' style={{backgroundImage: `url(${background})`}}>

    <div className='content-center rounded-full bg-kaddu-200 w-[80%] h-[200px] md:w-1/2 md:h-1/2 flex flex-col justify-center items-center p-4 '>
        <div className='text-5xl md:text-8xl md:my-10 my-2'><h1>ERROR </h1></div>
        <div><h2>Some Kind of Error has Occured .Please Refresh</h2></div>
    </div>
    </div>
    </>
  )
}
 
export default Error