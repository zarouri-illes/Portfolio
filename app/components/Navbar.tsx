"use client";

import { useEffect, useState } from "react";
import { nav } from "./const";
import { HiMenu } from "react-icons/hi"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsSticky(true)
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50">
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top- right-0 left-0bg-white" : ""}`}>

                <div className="flex items-center justify-between">
                    <div className="cursor-pointer">
                        <h1 className=" text-body text-xl font-extrabold">Zarouri Illes.</h1>
                    </div>

                    <div className="lg:flex items-center gap-3 hidden text-body">
                        {nav.map((item) => (<a href={item.link} className="block py-2 px-4 cursor-pointer text-lg font-semibold hover:opacity-60 hover:text-body transition-all duration-300">{item.name}</a>))}
                    </div>

                    <div className="lg:block hidden">
                        <a href="#contact"><button className="px-4 py-2 font-semibold border border-primary text-white rounded-[30px] bg-primary hover:opacity-60 transition-all duration-300">Contact</button></a>
                    </div>

                    <div onClick={toggleMenu} className="lg:hidden text-body text-3xl">
                        <HiMenu/>
                    </div>
                </div>

                {
                    isMenuOpen && <div className="mt-4 bg-primary rounded-lg text-white p-4">
                        {nav.map((item) => (<a href={item.link} className="block py-2 px-4 cursor-pointer text-lg hover:opacity-60 transition-all duration-300">{item.name}</a>))}
                    </div>
                }

            </nav>
        </header>
    );
  };

  export default Navbar;