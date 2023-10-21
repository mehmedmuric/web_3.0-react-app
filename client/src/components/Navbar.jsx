import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';


const NavbarItem = ({ title, classProps }) => {
  return(
    <li className={`${classProps} mx-4 cursor-pointer hover:text-blue-500`}>
      {title}
    </li>
  );
};


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex w-full md:justify-center justify-between items-center p-4">
      <div className="justify-center flex-initial items-center md:flex-[0.5]">
        <img src={logo} alt="nav_logo" className="w-32 cursor-pointer"/>
      </div>
      <ul className="text-white list-none justify-between items-center flex-row flex-initial md:flex hidden">
        {["Markets", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className="bg-[#2952e3] px-7 py-2 rounded-full mx-4 cursor-pointer hover:bg-[#2546bd]">Login</li>
      </ul>
      <div className="flex relative">
          {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)}/>
            : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <ul className="
              fixed 
              -right-2 z-10 p-3 w-[70vw] 
              h-screen shadow-2xl 
              md:hidden list-none
              flex flex-col justify-start items-end rounded-md 
              blue-glass text-white animate-slide-in
            ">
              <li className="w-full text-xl my-2 ">
                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
              </li>
              {["Markets", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="text-lg my-2"/>
              ))}
            </ul>
          )} 
      </div>
    </nav>
  );
}

export default Navbar;