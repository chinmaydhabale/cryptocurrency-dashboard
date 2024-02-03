// SearchBar.jsx
import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="border p-2 pl-8 rounded-md"
            // onChange={(e) => onSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiSearch />

            </div>
        </div>
    );
};

export default SearchBar;

