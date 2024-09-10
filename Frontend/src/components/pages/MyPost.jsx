import React, { useEffect } from 'react'
import Navbar from '../navbar'
import PhoneNavbar from '../PhoneSizeNavbar'
import Issue_card from '../issue_card'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersIssues } from '../../services/operations/issueAPI'
import { useNavigate } from 'react-router'

export default function MyPost() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
        
    useEffect(()=>{
        dispatch(getUsersIssues(navigate))
    },[])


    const myIssuesData=useSelector((state)=>state.issue?.myIssuesData)

  return (
    <>
        <div className="flex justify-between min-h-screen ">
            <div className="hidden lg:block">
                <Navbar/>
            </div>
            <div className="lg:hidden">
                <PhoneNavbar/>
            </div>
            <div className='flex flex-col mx-auto pt-4 pb-36 md:pb-20  justify-start items-center overflow-x-auto w-full'>
                {Array.isArray(myIssuesData) && myIssuesData.length > 0 ?(
                myIssuesData?.map((myIssue)=><Issue_card key={myIssue._id} issuedata={myIssue}/>)
                ):<div className="p-4 text-base md:text-xl"> You have not posted any issues</div>}
            </div>
        </div>
    </>
  )
}
