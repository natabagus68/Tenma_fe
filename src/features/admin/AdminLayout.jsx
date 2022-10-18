import React from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerIcon, CaretIcon, DashboardIcon, DataIcon, SearchIcon, AppLogoText } from '../../common/components/icons';
import { NavItem } from '../../common/components';
import userAvatar from '../../assets/user.png';

export const AdminLayout = () => {
    return (
        <div>
            <div className="flex bg-green-500 w-screen relative z-10 shadow-lg _shadow-[0px_3px_10px_rgba(0_44_32_0.17)]">
                <div className="py-[15px] px-[48px] lg:w-[274px]">
                    <AppLogoText width={ `auto` } height={ `46px` } />
                </div>
                <div className="py-[15px] px-[48px] flex-1 flex items-center font-rubik">
                    <BurgerIcon className="cursor-pointer" />
                    <div className="relative">
                        <input type="text" className="ml-[56px] py-3 rounded-lg bg-green-600 text-white placeholder-green-300 px-4" placeholder="Search" />
                        <div className="absolute right-0 top-0 h-full pr-4 flex items-center">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="flex ml-auto gap-10 items-center">
                        <div className="hidden lg:flex gap-6">
                            <select defaultValue="" name="" id="" className="appearance-none rounded-lg bg-white py-3 px-4 min-w-[171px] text-center text-gray-200">
                                <option value="" disabled>All Area</option>
                            </select>
                            <select defaultValue="" name="" id="" className="appearance-none rounded-lg bg-white py-3 px-4 min-w-[171px] text-center text-gray-200">
                                <option value="" disabled>Select Station</option>
                            </select>
                            <select defaultValue="" name="" id="" className="appearance-none rounded-lg bg-white py-3 px-4 min-w-[171px] text-center text-gray-200">
                                <option value="" disabled>Select Location</option>
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <img className="w-[29px] h-[29px]" src={ userAvatar } alt="" />
                            <span className="text-white">sevtian usa</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative z-0">
                <div className="lg:w-[274px] bg-green-500 h-screen py-[48px] px-[32px]">
                    <div className="text-green-200 font-rubik font-semibold mb-[24px]">Home</div>
                    <div className="text-green-200 font-lato font-semibold mb-[24px]">
                        <div className="flex items-center mb-[8px] cursor-pointer">
                            <DashboardIcon className="mr-3" />
                            <div className="hidden lg:block">Dashboard</div>
                            <CaretIcon className="ml-auto" />
                        </div>
                        <div className="hidden h-0 overflow-hidden pl-[34px] text-green-200 font-lato font-semibold">
                            <div className="mb-[8px] text-green-50 cursor-pointer">Main Dashboard</div>
                            <div className="mb-[8px] cursor-pointer">Cost Dashboard</div>
                        </div>
                    </div>
                    <div className="text-green-200 font-rubik font-semibold mb-[24px]">Menu</div>
                    <NavItem label={ `Data` } icon={ <DataIcon className="mr-3 -mb-1" /> }>
                        <NavItem label={ `Master Data` }>
                            <NavItem to={ `employees` } label={ `Employee Data` } className="-ml-2" />
                            <NavItem label={ `Tank` } className="-ml-2" />
                        </NavItem>
                    </NavItem>
                </div>
                <div className="py-[37px] px-[48px] w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
