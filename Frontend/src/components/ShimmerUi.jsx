import React from 'react'
import ShimmerCard from './ShimmerCard'
import ShimmerProject from './ShimmerProject'

export default function ShimmerUi({route}) {
  if(route==="issue"){
    return (
      <div className='w-full'>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
          <ShimmerCard/>
      </div>
    )
  }else{
    return(
      <>
        <ShimmerProject/>
        <ShimmerProject/>
        <ShimmerProject/>
        <ShimmerProject/>
      </>
    )
  }
}
