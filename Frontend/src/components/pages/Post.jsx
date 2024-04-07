import React from 'react'
import Issue_card from '../issue_card'
import Navbar from '../navbar'
import Comment from '../comment'
import bgImage from "../../assets/doodle_background.svg"
const Post = () => {
  return (
    <>
    <div className="flex " style={{backgroundImage: `url(${bgImage})`}}>
          
    <div className="">
      <Navbar/>

    </div>
   <div className="flex flex-wrap justify-center">
   <Issue_card />
   <div className="flex flex-col justify-center w-full divide-y-2 divide-slate-500">
      
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      
      
  </div>
   </div>
  

  </div>
    </>
  )
}

export default Post