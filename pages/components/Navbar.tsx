import Image from "next/image";
import Logo from "../../public/Images/Logo.png";

const Navbar = (props:any) => {
// let {navBg,textColor,darkMode,handleClick,cardBg}=props
let {navBg,darkMode,handleClick,cardBg}=props
  return (
    <>
        <div className={`${navBg} duration-700  flex justify-between ml-10 mr-10 rounded-b-2xl`}>
          <div className="flex items-center">
            <Image
              className="h-16 p-2 ml-3 rounded-2xl w-14"
              src={Logo}
              alt="logo"
            />
            <h1 className={`hidden sm:hover:${cardBg} duration-300 sm:hover:p-2 sm:hover:pr-4 sm:hover:pl-4 hover:rounded-xl hover:text-xl font-bold ml-4 sm:flex`}>SHAYAN <span className="hidden ml-2 sm:flex">AHMED</span></h1>
          </div>

          <div className="flex items-center mr-6">

<button className={`duration-500 rounded-xl  sm:pl-4 sm:pr-4 p-2 pl-4 pr-4 mr-4 font-semibold hover:pl-5 hover:pr-5 ${cardBg}`}>Resume</button>

            <button
              onClick={handleClick}
              className={`duration-500 rounded-xl p-1 hover:pl-2.5 hover:pr-2.5 bg-zinc-800`}
            >
              <Image
                src={darkMode}
                alt="dark-light mode"
                className="w-8 p-2 duration-150 hover:p-1"
              />
            </button>
          </div>
          
        </div>
    </>
  );
};

export default Navbar;
