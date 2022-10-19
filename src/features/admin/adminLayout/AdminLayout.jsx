import React from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerIcon, DashboardIcon, DataIcon, SearchIcon, AppLogoText, UserControlIcon } from '../../../common/components/icons';
import { NavItem, NavLabel } from '../../../common/components';
import userAvatar from '../../../assets/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './adminLayoutSlice';
import { Select } from '../../../common/components/input';

export const AdminLayout = () => {
    const { navOpen } = useSelector(state => state.adminLayout);
    const dispatch = useDispatch();
    return (
        <div className="max-w-full">
            <div className="sticky top-0 flex bg-green-500 w-screen z-10 shadow-lg _shadow-[0px_3px_10px_rgba(0_44_32_0.17)]">
                <div className="py-[15px] px-[48px] lg:w-[274px]">
                    <AppLogoText width={ `auto` } height={ `46px` } />
                </div>
                <div className="py-[15px] px-[48px] flex-1 flex items-center ">
                    <BurgerIcon onClick={ () => dispatch(toggle()) } className="cursor-pointer" />
                    <div className="relative">
                        <input type="text" className="ml-[56px] py-3 rounded-lg bg-green-600 text-white placeholder-green-300 px-4" placeholder="Search" />
                        <div className="absolute right-0 top-0 h-full pr-4 flex items-center">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="flex ml-auto gap-10 items-center">
                        <div className="hidden lg:flex gap-6">
                            <Select placeholder={ `All Area` } />
                            <Select placeholder={ `Select Station` } />
                            <Select placeholder={ `Select Location` } />
                        </div>
                        <div className="flex gap-3">
                            <img className="w-[29px] h-[29px]" src={ userAvatar } alt="" />
                            <span className="text-white">sevtian usa</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative z-0">
                <div className={ `${!navOpen ? `min-w-[274px] max-w-[274px] pl-[32px]` : `min-w-0 max-w-0 pl-0 overflow-hidden`} absolute left-0 md:relative transition-[max-width_min-width_padding] flex flex-col gap-4 bg-green-500 min-h-screen py-[48px] ` }>
                    <NavLabel className="my-0 mb-0">Home</NavLabel>
                    <NavItem label={ `Dashboard` } icon={ <DashboardIcon className="mr-3 -mb-1" /> }>
                        <NavItem label={ `Main Dashboard` } />
                        <NavItem label={ `Cost Dashboard` } />
                    </NavItem>
                    <NavLabel>Menu</NavLabel>
                    <NavItem label={ `Data` } icon={ <DataIcon className="mr-3 -mb-1" /> }>
                        <NavItem label={ `Master Data` }>
                            <NavItem to={ `employees` } label={ `Employee Data` } className="-ml-2" />
                            <NavItem label={ `Tank` } className="-ml-2" />
                        </NavItem>
                    </NavItem>
                    <NavItem label={ `User Control` } icon={ <UserControlIcon className="mr-3 -mb-1" /> }>
                        <NavItem to={ `accounts` } label={ `Account` } />
                        <NavItem to={ `` } label={ `Account Management` } />
                        <NavItem to={ `` } label={ `Access` } />
                    </NavItem>
                </div>
                <div className="py-[37px] px-[48px] flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
