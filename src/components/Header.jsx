import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import burgerMenu from '../assets/burger-menu.svg'
import closeMenu from '../assets/close-menu.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navBtn = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    }

  }, [isOpen])

  const navItems = [
    "what is idle Cash",
    "How it Works",
    "Earn More",
    "Why Poplar?",
  ];

  return (
    <>
    <div>
      <div className="flex justify-between items-center container my-14">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="hidden xl:flex gap-[40px]">  
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
          className=" py-5 px-8 border border-solid rounded-2xl border-[#123149] font-bold text-lg text-[#123149] xl:flex hidden leading-none w-auto"
        >
          Join the waitlist
        </a>

        <button onClick={navBtn} className="block xl:hidden cursor-pointer"><img src={isOpen? closeMenu : burgerMenu} alt="icon" /></button>
      </div>
      </div>

        <ul className={`${isOpen? "" : "hidden"} h-[calc(100vh-170px)] bg-white  flex-col items-center justify-center gap-[40px] text-center flex transition`}>
          {navItems.map((item) => (
            <li key={item}  className="cursor-pointer text-[#123149] text-2xl hover:text-[#11CC7A] transition">{item}</li>
          ))}
          <li className="mt-[20px]"><a
          href="#"
          className="py-5 px-8 border border-solid rounded-2xl border-[#123149] font-bold text-lg text-[#123149] leading-none w-auto"
        >
          Join the waitlist
        </a></li>
        </ul>
    </>
  );
}

export default Header;