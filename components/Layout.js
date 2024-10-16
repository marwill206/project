import React, { useEffect, useState } from "react"
import Head from "next/head";



const Layout = ({ children }) => {
const [menuOpen,setMenuOpen] =  useState(false);

  const handleNav = ()=>{
   setMenuOpen(!menuOpen);

  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Marijn Willems</title>
      </Head>
      <header className="  bg-header flex items-center justify-between md:p-4 p-1 fixed z-50 w-full h-16 md:h-24 ">
        <div className="flex items-center">
          <div className=" p-2 ">
            <img
              className=" md:w-16 md:h-16 rounded-full w-9 h-9"
              src="https://mp.reshift.nl/zoom/847087193859A57FDA3AF226481C23A0-neusaap.jpg?w=1200"
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
        cursor-pointer text-4xl text-text"
        onClick={handleNav}
        >
          &#9776;
        </button>

        <div
          id="mobile-menu"
          className={
            menuOpen
            ? "fixed right-0 top-20 w-[40%] md:hidden h-screen bg-header p-10 ease-out duration-500 h-40 rounded"
            : "fixed right-[-100%] top-16 p-10 ease-in duration-500 h-screen h-40"
          }
        >
         
          <nav className="flex flex-col text-text gap-1 ">
            <a className="underline" href="">About</a>
            <a className="underline" href="">Project's</a>
            <a className="underline" href="">Contact</a>
          </nav>
        </div>

        <div className="flex flex-row gap-6 hidden md:flex">
          <a
            className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
            href=""
          >
            <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>
            <div className="relative z-10">About</div>
          </a>
          <a
            className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
            href=""
          >
            <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>

            <div className=""> Project's</div>
          </a>
          <a
            className="relative md:w-36 text-text hover:text-goodGreen md:h-16 flex items-center justify-center  pt-2 group transition-all duration-300 ease-in-out"
            href=""
          >
            <div className="absolute inset-0 border-t  border-text  group-hover:border-t-4 group-hover:border-goodGreen z-10 transition-all duration-200 ease-in-out"></div>

            <div className=""> Contact</div>
          </a>
    
        </div>
      </header>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
