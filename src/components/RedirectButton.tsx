"use client"
import { redirect } from 'next/navigation'
import React from 'react'

export const RedirectButton = ({redirectServer, tabName, redirectButtonScale}:{redirectServer:string, tabName: string, redirectButtonScale: number}) => {
   const handleButtonClick=()=>{
      const redirectUrl=`${redirectServer}?action=switchToSmartScreenTab&tab=${tabName}`
      redirect(redirectUrl)

  }

  return (
      <button
          className=""
             onClick={handleButtonClick}
        >
          <img className="fixed bottom-4 right-4 w-16 h-16 max-w-full object-contain" src='/kobilplusv2.png' alt="Kobil Plus logo"
            style={{ width:`calc(var(--spacing) * 16 * ${redirectButtonScale})`,height:`calc(var(--spacing) * 16 * ${redirectButtonScale})`}}
          ></img>
        </button> 
  )
}
