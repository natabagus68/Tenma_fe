import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { PlusIcon } from '../../common/components/icons';

export const Employee = () => {
    return (
        <>
            <div>
                <div className="flex gap-3 text-gray-500 font-lato mb-6">
                    <a href="#">Menu</a>/
                    <a href="#">Data</a>/
                    <a href="#">Master Data</a>/
                    <div className="text-gray-700">Employee Data</div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light">
                    <div className="bg-sky-lightest px-[48px] py-[28px] flex justify-between border-b border-sky-light">
                        <div className="text-green-500 font-rubik font-600 text-2xl">
                            Employee Data
                        </div>
                        <button className="flex items-center gap-2 rounded bg-green-500 px-3 py-1 text-white font-rubik">
                            <PlusIcon /> Add Data
                        </button>
                    </div>
                    <div className="py-7 px-12 flex justify-start">
                        <NavLink to="data" className={ ({ isActive }) => `${isActive ? `border-b-2 text-green-500` : `text-gray-200`} font-rubik font-semibold text-lg border-green-500 min-w-[148px] pb-3 text-center` }>
                            Data
                        </NavLink>
                        <NavLink to="divisions" className={ ({ isActive }) => `${isActive ? `border-b-2 text-green-500` : `text-gray-200`} font-rubik font-semibold text-lg border-green-500 min-w-[148px] pb-3 text-center` }>
                            Division
                        </NavLink>
                        <NavLink to="positions" className={ ({ isActive }) => `${isActive ? `border-b-2 text-green-500` : `text-gray-200`} font-rubik font-semibold text-lg border-green-500 min-w-[148px] pb-3 text-center` }>
                            Position
                        </NavLink>
                    </div>
                    <div className="pb-7 px-12 justify-start">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
