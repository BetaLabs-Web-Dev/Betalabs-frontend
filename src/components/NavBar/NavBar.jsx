import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const HoverEffectRose = "hover:text-custom-red  hover:scale-105 hover:-translate-y-1 transition-transform duration-200 ease-in-out";
    const HoverEffectWhite = "hover:text-white  hover:scale-105 hover:-translate-y-1 transition-transform duration-200 ease-in-out";
  return (
    <div className='flex justify-between p-8 font-poppins'>
        <div className="text-base font-medium tracking-[0.3rem] text-custom-red">
            <a href='/' className={HoverEffectWhite}>BETA LABS</a>
        </div>
        <div className="text-white ml:hidden lg:hidden">
            <MenuIcon />
        </div>
        <div className="hidden font-medium text-white ml:flex lg:flex ml:gap-3.5 ml:text-xl lg:gap-7 lg:text-2xl">
            <a href='/home' className={HoverEffectRose}>
                Home
            </a>
        
            <a href='/events' className={HoverEffectRose}>
                Events
            </a>
            <a href='/aboutus' className={HoverEffectRose}>
                About Us
            </a>
            <a href='/contactus' className={HoverEffectRose}>
                Contact Us
            </a>
            <a href='Gallery' className={HoverEffectRose}>
                Gallery
            </a>
        </div>
        <div className="hidden ml:flex lg:flex ml:gap-7 lg:gap-14">
            <div className="flex ml:gap-2 lg:gap-4 ">
                <button className='text-white'><SearchIcon sx={{fontSize:"1.8rem"}}  /></button>
                <button style={{ transform: "scaleX(-1)"}} className=' text-custom-red'><SortIcon sx={{fontSize:"1.8rem"}} /></button>
            </div>
                <div className="flex gap-1 text-base text-custom-red">  
                    <button className={HoverEffectWhite}>En</button>
                    <div className="self-end text-custom-red"><FiberManualRecordRoundedIcon sx={{fontSize:"0.8rem"}} /></div>
                    <button className={HoverEffectWhite}>Hi</button>
                </div>
            </div>
            </div>  
  )
}

export default NavBar