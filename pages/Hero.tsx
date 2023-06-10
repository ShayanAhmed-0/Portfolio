import React from "react";

import { createContext, useContext, useState } from 'react';
// import ThemeContext from "./components/Navbar"
import Image from "next/image";
import Dp from "../public/Images/Logo.png";
import Socials from "./components/Socials";
import Button from "./components/Button";
import TypewriterComponent from "typewriter-effect";
import Skills from "./Skills";

const Hero = (props:any) => {
  let {cardBg,cardShadow}=props
  let About =
    " I am professional Software Engineer working on web based technologies make Beautiful responive web applications.I am Travel enthusiast ✈ Love Gaming 🎮 and Coding 👨‍💻";
  return (
    <>
      {/* mobile site */}
      <div className="duration-1000">
        <div className=" md:hidden">
          <h1 className="flex justify-center text-3xl font-bold m-4">SHAYAN AHMED</h1>
          <h1 className="flex justify-center text-2xl m-4">WELCOME</h1>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src={Dp}
              width={80}
              height={20}
              alt="Mobile pp"
              className="rounded-full "
            />
          </div>
          <div className="m-4">
            <h1 className="flex justify-center text-3xl font-bold mb-4">
              About
            </h1>
            <h3 className="text-xl m-2 flex justify-center">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.typeString(`${About}`).start();
                }}
              />
            </h3>
            <div className=" mb-10">
            <h1 className="mt-10 text-2xl font-bold">SOCIALS</h1>
              <Socials />
            </div>
            
            <h1 className='mt-10 text-2xl font-bold flex justify-center'>SKILLS</h1>
            <Skills cardBg={cardBg}cardShadow={cardShadow}/>
          </div>
        </div>
{/* md size */}
        <div className="hidden md:block lg:hidden">
          <h1 className="flex justify-center text-2xl m-4">WELCOME</h1>
          <div className="grid grid-cols-2 gap-10">
            <Image
              src={Dp}
              width={1200}
              alt="pp"
              className="h-[550px] -mt-2 duration-700 rounded-xl m-2 sm:block hidden"
            />
            <div className="">
              <h1 className=" text-4xl font-bold flex  m-2">ABOUT</h1>
              <h3 className="text-xl m-2 ">
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter.typeString(`${About}`).start();
                  }}
                />
              </h3>
              <div className="sm:ml-4">
                <h1 className="mt-10 text-2xl font-bold">SOCIALS</h1>
                <div className="">
                <Socials />
                <div className="mt-9">
              
                </div>
                </div>
              </div>
            </div>
          </div>
          <div >
            
<h1 className='mt-10 text-2xl font-bold flex justify-center'>SKILLS</h1>
<Skills cardBg={cardBg}cardShadow={cardShadow}/>
          </div>
        </div>


{/* lg bp */}
<div className="hidden lg:block">
          <h1 className="flex justify-center text-2xl m-4">WELCOME</h1>
          <div className="grid grid-cols-2 gap-10">
            <Image
              src={Dp}
              height={800}
              width={900}
              alt="pp"
              className="h-[720px]  -mt-2 duration-700 rounded-xl m-2 sm:block hidden"
            />
            <div className="">
              <h1 className=" text-4xl font-bold flex  m-2">ABOUT</h1>
              <h3 className="text-xl m-2 ">
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter.typeString(`${About}`).start();
                  }}
                />
              </h3>
              <div className="sm:ml-4">
                <h1 className="mt-10 text-2xl font-bold">SOCIALS</h1>
                <div className="">
                <Socials />
                </div>
              </div>
            </div>
          </div>
          <div >
          
          </div>
                <div className="mt-9">
                <h1 className='mt-10 text-2xl font-bold flex justify-center'>SKILLS</h1>
                <Skills cardBg={cardBg}cardShadow={cardShadow}/>    
                </div>
        </div>



      </div>
    </>
  );
};
{
  /* <h3 className='text-xl'>
I am professional Software Engineer working on web based technologies make Beautiful responive web applications.
I am Travel enthusiast ✈ Love Gaming 🎮 and Coding 👨‍💻
</h3> */
}
export default Hero;
function ThemeContext(ThemeContext: any) {
  throw new Error("Function not implemented.");
}

