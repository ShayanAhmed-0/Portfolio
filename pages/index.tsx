import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './Hero'
// import Skills from './Skills'

import Lm from "../public/Images/darkmode.png";
import Dm from "../public/Images/brightness.png";
import { useState } from 'react'
// import AnimeCursor from "./components/AnimeCursor"
import AnimeCur from './components/AnimeCursor'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [navBg,setNavBg]=useState("bg-black")
  const [siteBg,setSiteBg]=useState("bg-vscode-bg")
  const [textColor,setTextColor]=useState("text-neutral-200")
  const [darkMode, setDarkMode] = useState(Dm);
  const [cardBg,setCardBg]=useState("bg-zinc-800")
  const [cardShadow,setCardShadow]=useState("bg-vscode-bg")
  const [mouseC,setMouseC]=useState("229, 231, 235")

  const switchMode = () => {
    if (darkMode == Dm) {
      setDarkMode(Lm);
      setNavBg("bg-slate-300 ")
      setTextColor("text-zinc-800")
      setSiteBg("bg-gray-200")
      setCardBg("bg-neutral-200")
      setCardShadow("shadow-gray-400")
      setMouseC("30,30,30")
    } else {
      setDarkMode(Dm);
      setNavBg("bg-black")
      setTextColor("text-neutral-200")
      setSiteBg("bg-vscode-bg")
      setCardBg("bg-zinc-800")
      setCardShadow("shadow-black")
      setMouseC("229, 231, 235")
    }
  }

  return (
    <>
    <div className='hidden sm:block'>
    <AnimeCur mouseC={mouseC}/>
    </div>
    
    <div className={`${siteBg} ${textColor}`}>
    <Navbar handleClick={switchMode} darkMode={darkMode} textColor={textColor} navBg={navBg} cardBg={cardBg}/>
<Hero cardBg={cardBg} cardShadow={cardShadow}/>
<Footer textColor={textColor} navBg={navBg}/>
    </div>
  
    </>
  )
}

