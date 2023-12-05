import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="container">
      <nav className="fixed block bottom-[4rem] left-[50%] transform translate-x-[-50%] z-10 w-max px-[2rem] py-[1.0rem] rounded-md space-x-4 bg-black/20 backdrop-blur-lg shadow-md animate__animated animate__zoomIn  ">
        <div className="flex items-center justify-center space-x-2">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active-link" : "nav-link"}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active-link" : "nav-link"}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#project"
            onClick={() => setActiveNav("#project")}
            className={activeNav === "#projects" ? "active-link" : "nav-link"}
          >
            <BsBook />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={
              activeNav === "#contact"
                ? "bg-[#835a31] p-[1rem] rounded-full font-[1.6rem]"
                : "hover:bg-[#cab39c] text-[#fff] font-[1.6rem] rounded-full p-[1rem]"
            }
          >
            <RiContactsLine />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
