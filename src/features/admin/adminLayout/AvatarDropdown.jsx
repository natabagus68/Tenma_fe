import { Popover } from '@headlessui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAuthenticatedUserQuery, useLogoutMutation } from '../../../app/services/authService';
import userAvatar from '../../../assets/user.png';
import { LogoutDialog } from './LogoutDialog';


export const AvatarDropdown = () => {
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    const dispatch = useDispatch();
    const [logout, { logoutIsLoading }] = useLogoutMutation();
    const [logoutOpen, setLogoutOpen] = useState(false);
    return (
        <>
            <Popover as="div" className="relative">
                <Popover.Button>
                    <div className="flex gap-3 cursor-pointer items-center">
                        <img className="w-[29px] h-[29px]" src={ userAvatar } alt="" />
                        <span className="text-white">{ auth.data.username }</span>
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute right-0">
                    <LogoutDialog logoutOpen={ logoutOpen } setLogoutOpen={ setLogoutOpen } />
                </Popover.Panel>
            </Popover>
            <LogoutDialog.Modal logoutOpen={ logoutOpen } setLogoutOpen={ setLogoutOpen } />
        </>
    );
};
