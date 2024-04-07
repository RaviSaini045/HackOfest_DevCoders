import React from 'react'
import background from "../../assets/doodle_background.svg"

const Error = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen' style={{backgroundImage: `url(${background})`}}>

    <div className='content-center rounded-full bg-kaddu-200 w-1/2 h-1/2 flex flex-col justify-center items-center '>
        <div className='text-8xl my-10'><h1>ERROR </h1></div>
        <div><h2>Some Kind of Error has Occured .Please Refresh</h2></div>
    </div>
    </div>
    </>
  )
}
 
export default Error