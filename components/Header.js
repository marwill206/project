import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = ({ handleNav, menuOpen, logoUrl }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`shadow-lg  bg-header flex items-center justify-between md:p-4 p-1 fixed w-full z-50 h-16 md:h-24 transition-transform-opacity duration-500  ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } `}
    >
      <div className="flex items-center">
        <div className=" p-2 ">
          <img
            className=" md:w-16 md:h-16 rounded-full w-9 h-9"
            src={logoUrl}
            alt=""
          />
        </div>
        <div className=" flex items-center font-helvetica flex-col md:text-2xl text-text md:ml-5">
          <div id="Vname">M A R I J N</div>
          <div>W I L L E M S</div>
        </div>
      </div>

      <button
        id="hamburger"
        className="md:hidden
        cursor-pointer text-4xl text-text "
        onClick={handleNav}
      >
        &#9776;
      </button>

      <div
        id="mobile-menu"
        className={
          menuOpen
            ? "fixed right-0 top-20 w-[40%] md:hidden shadow-xl bg-header flex justify-center items-center p-10 ease-out duration-500 h-32 rounded-tl-l rounded-bl-l"
            : "fixed right-[-100%] top-20 shadow-xl rounded-tl-l rounded-bl-l flex justify-center items-center p-10 ease-in duration-500 h-32"
        }
      >
        <nav className="flex flex-col text-text gap-1 ">
          <Link className="underline" href="/">
            About
          </Link>
          <Link className="underline" href="/project">
            Project's
          </Link>
          <Link className="underline" href="/contact">
            Contact
          </Link>
        </nav>
      </div>

      <div className=" flex-row gap-6 hidden text-3 md:flex">
        <Link
          className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
          href="/"
        >
          <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>
          <div className="relative z-10">About</div>
        </Link>
        <Link
          className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
          href="/project"
        >
          <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>

          <div className=""> Project's</div>
        </Link>
        <Link
          className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
          href="/contact"
        >
          <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>

          <div className=""> Contact</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
