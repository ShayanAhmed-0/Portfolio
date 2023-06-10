import React from 'react'
import Cards from './components/Cards'
import ReactJS from '../public/Images/skillslogo/react-2.svg'
import NextJS from "../public/Images/skillslogo/next-js.svg"
import JavaScript from "../public/Images/skillslogo/logo-javascript.svg"
import TypeScript from "../public/Images/skillslogo/typescript-2.svg"
import Java from "../public/Images/skillslogo/java-14.svg"
import C from "../public/Images/skillslogo/c-1.svg"
import Cpp from "../public/Images/skillslogo/cpp.svg"
import Bootstrap from "../public/Images/skillslogo/bootstrap-5-1.svg"
import Nodejs from "../public/Images/skillslogo/nodejs-icon.svg"
import Express from "../public/Images/skillslogo/express-109.svg"
import TailwindCss from "../public/Images/skillslogo/tailwind-css-2.svg"
import MySQL from "../public/Images/skillslogo/mysql-6.svg"
import MongoDB from "../public/Images/skillslogo/mongodb-icon-1.svg"

const Skills = (props:any) => {
  let {cardBg,cardShadow}=props
  return (
    <div>
      
        <div className='ml-4 sm:ml-6 flex-1 justify-center'>
<div className='mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:justify-between  space-y-3 pb-8'>
    <h1 className='hidden'></h1> 
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="JavaScript" logo={JavaScript}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="TypeScript" logo={TypeScript}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="ReactJS" logo={ReactJS}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="NextJS" logo={NextJS}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="MongoDB" logo={MongoDB}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="MySQL" logo={MySQL}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="NodeJS" logo={Nodejs}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="ExpressJS" logo={Express}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="TailwindCss" logo={TailwindCss}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="Bootstrap" logo={Bootstrap}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="C-language" logo={C}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="C Plus Plus" logo={Cpp}/>
      <Cards  cardBg={cardBg}cardShadow={cardShadow} nameSkill="Java" logo={Java}/>

</div>
        </div>
    </div>
  )
}

export default Skills
