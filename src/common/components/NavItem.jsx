import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretIcon } from "./../components/icons";

export const NavItem = ({
    children,
    label,
    icon = null,
    className = null,
    to = null,
    active = null,
}) => {
    const [open, setOpen] = useState(false);
    const toggle = (e) => {
        if (children) setOpen((open) => !open);
    };
    return (
        <div
            className={`${
                open || active ? `text-black-50` : `text-black-200`
            } hover:text-black-50 font-body font-semibold ${className}`}
        >
            <NavLink
                to={to}
                onClick={toggle}
                className={({ isActive }) =>
                    `flex items-center cursor-pointer ${
                        (isActive && to !== null) || active == true
                            ? "text-black"
                            : ""
                    }`
                }
            >
                {icon}
                {<div className={`whitespace-nowrap`}>{label}</div>}
                {children && (
                    <CaretIcon
                        className={`ml-auto transition mr-10 ${
                            open && "rotate-90"
                        }`}
                    />
                )}
            </NavLink>
            {children && (
                <div
                    className={`${
                        open || active ? `max-h-screen` : `max-h-0`
                    } -mb-1 pt-2 flex flex-col gap-2 relative transition-[max-height] overflow-hidden pl-[34px] text-black-200 font-body font-semibold`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
