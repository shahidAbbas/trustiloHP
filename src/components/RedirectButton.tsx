"use client"
import { redirect } from 'next/navigation'
import React from 'react'

export const RedirectButton = ({redirectServer, tabName}:{redirectServer:string, tabName: string}) => {
   const handleButtonClick=()=>{
      const redirectUrl=`${redirectServer}?action=switchToSmartScreenTab&tab=${tabName}`
      redirect(redirectUrl)

  }

  return (
      <button
          className=""
             onClick={handleButtonClick}
        >
          <img className="fixed bottom-5 right-4 w-16 h-16 max-w-full object-contain" src='/kobilplusv2.png' alt="Kobil Plus logo"></img>
        </button> 
  )
}
