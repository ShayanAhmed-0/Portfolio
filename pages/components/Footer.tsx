"use client"
import React, { useState } from 'react'

const Footer = (props:any) => {
  let {navBg,textColor}=props
  return (
    <div>
      <div
      className={`flex justify-center text-xl p-10 ${navBg} rounded-t-3xl ml-2 mr-2 duration-1000`}>
        <h1 >
        Thanks for visiting my Portfolio 
        <span>
      {navBg=="bg-black"?" ❤️ ":" 🖤 "}   
        </span>
        <span>
        SHAYAN
        </span>
        </h1>
      </div>
    </div>
  )
}

export default Footer
