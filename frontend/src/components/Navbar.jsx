import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible,setVisible]=useState(false);
  return (
    <div className="flex items-center justify-between py-3 bg-black px-5">
      <div className="flex items-center">
        <Link to='/'>
        <h1 className="text-4xl text-white font-bold tracking-wide">zenith</h1>
        </Link>
        <span className="w-2 h-2 bg-red-600 rounded-full ml-2"></span>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm text-white">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-4 cursor-pointer filter invert" alt="search_icon"/>
        <div className="group relative">
          <img src={assets.profile_icon} alt="profile_icon" className="w-4 cursor-pointer filter invert"/>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-3 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart_icon" className="w-4 min-w-4 cursor-pointer filter invert"/>
          <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-white text-black aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu_icon" className='w-5 cursor-pointer sm:hidden filter invert' />
      </div>
      <div className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-black transition-all ${visible?'w-full':'w-0'}`}>
        <div className='flex flex-col text-gray-100'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} alt="dropdown_icon" className='h-4 rotate-180 ' />
            <p> Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collections</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
