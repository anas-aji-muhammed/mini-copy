import React from 'react';
import { FiSearch } from "react-icons/fi";

function SearchBar({ onSearchChange }) {
  return (
    <div className='mt-20 relative w-full h-20 bg-white flex items-center gap-6 rounded-lg'>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <FiSearch className="text-2xl"/> {/* Adjust icon size as needed */}
            </button>
        </span>
        {/* Adjusted padding to align text vertically in the center */}
        <input className='pl-10 pr-2 pt-6 pb-6 w-full text-2xl rounded-lg' placeholder='Search' onChange={e => onSearchChange(e.target.value)} />
    </div>
  );
}

export default SearchBar;
