import  {useState } from "react";
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Slidebar = ({children}) => {


    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Chat", link: "/chat", src: "details" },
 
    ];

  return (
    <div className='flex w-full '>
     <div
        className={` ${
          open ? "w-80" : "w-24 "
        } bg-blue-900 h-screen pl-5 pt-3  relative duration-300 min-h-screen`}
      >
        
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
             
        <NavLink   
            to="/"
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
             `}
            >
        
              <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } ${open ? "w-14" : "w-10"} `}/>
              <h1 className={`text-white origin-left font-medium text-lg duration-200 ${
              !open && "scale-0"
            }`}>
               ADHARSH FOOD PRODUCTS
              </h1>
            
            </NavLink>
          {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } ${open ? "w-14" : "w-10"} `}
          />
  
      
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ADHARSH FOOD PRODUCTS
          </h1> */}
        
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink   
            to={Menu.link}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}  `}
            >
        
              <img src={`./src/assets/${Menu.src}.png`} className={` ${open ? "w-10" : "w-8"}`}/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            
            </NavLink>
          ))}
        </ul>
      </div>
      <main className=" flex w-full m-5 ">
        <div className="relative w-full pl-5 pt-3  rounded-xl">
          {children}
        </div>
        </main>
    </div>
  )
}

export default Slidebar
