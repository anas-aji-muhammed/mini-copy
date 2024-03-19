import React from 'react';
import { MdOutlineCopyAll } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

function Navbar() {
  return (
    <div className='flex flex-row justify-between w-full border-b-2 border-[#e8e8e8] px-5 md:px-8 pb-4 items-center'>
        <div className="flex flex-row items-baseline gap-2">
            <MdOutlineCopyAll className='text-xl md:text-2xl' />
            <h1 className='text-xl md:text-2xl'>miniCopy</h1>
            <span className='text-xl md:text-2xl'>|</span>
            <h2 className='text-sm md:text-base text-grey-text'>Daily dose of inspiration</h2>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <span className='text-sm md:text-base'>Instagram</span>
            <span className='text-sm md:text-base'>|</span>
            <SiInstagram className='text-xl md:text-2xl' />
        </div>
    </div>
  );
}

export default Navbar;
