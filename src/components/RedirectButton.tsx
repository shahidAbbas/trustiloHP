"use client"
import { redirect } from 'next/navigation'
import React from 'react'

export const RedirectButton = ({redirectServer,kobilSid}:{redirectServer:string,kobilSid:string}) => {
   const handleButtonClick=()=>{
   
      redirect(`${redirectServer}?sID=${kobilSid}&redirectToPage=/chatscreen`)

  }

  return (
      <button
          className="mt-4 px-6 py-2 border border-[#1C69D4]
             text-[16px] leading-6 font-medium text-[#1C69D4] font-barlow
             rounded-[4px] bg-[#1C69D440]"
             onClick={handleButtonClick}
        >
          Redirect
        </button> 
  )
}
