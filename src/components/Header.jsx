import React, { useState } from "react";
import logo from "../assets/logo.svg";
import burgerMenu from '../assets/burger-menu.svg'
import closeMenu from '../assets/close-menu.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navBtn = () => {
    setIsOpen((prev) => !prev)
  }

  const navItems = [
    "what is idle Cash",
    "How it Works",
    "Earn More",
    "Why Poplar?",
  ];

  return (
    <>
    <div className="relative">
      <div className="flex justify-between items-center container my-14">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={`absolute top-[62px] left-0 w-full xl:w-auto gap-10 xl:relative flex flex-col xl:flex-row h-[calc(100vh-118px)] xl:h-[30px] items-center justify-center xl:top-[0px] ${isOpen? 'flex' : 'hidden xl:flex'}`}>  
          {navItems.map((item) => (
            <li key={item}>
              <a className="text-[#123149] text-lg hover:text-[#11CC7A] transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className=" py-5 px-8 border rounded-2xl border-[#123149] font-bold text-lg text-[#123149] xl:flex hidden leading-none w-auto"
        >
          Join the waitlist
        </a>

        <button onClick={navBtn} className="block xl:hidden cursor-pointer"><img src={isOpen? closeMenu : burgerMenu} alt="icon" /></button>
      </div>
      </div>
    </>
  );
}

export default Header;


// if false the 
