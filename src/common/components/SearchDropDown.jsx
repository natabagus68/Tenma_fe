import React, { useState } from "react";

const SearchDropDown = () => {
    const [drop, setDrop] = useState(false);
    return (
        <div>
            <input
                type="search"
                name="search"
                className="w-full border rounded-md px-3 py-2 font-gray-600 outline-none    "
                onClick={(e) => {
                    setDrop(!drop);
                }}
                autoComplete="off"
            />
            <div
                className={
                    drop
                        ? "hidden duration-1000"
                        : "w-full mt-2 rounded-xl max-h-52 overflow-y-scroll border shadow-2xl"
                }
            >
                <ul>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                    <li className="py-3 px-3 border-b  text-gray-600">data</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchDropDown;
