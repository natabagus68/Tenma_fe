import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CaretIcon } from './../components/icons';

export const NavItem = ({ children, label, icon = null, className = null, to = null }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const toggle = e => {
        setOpen(open => !open);
    };
    return (
        <div className={ `${open || active ? `text-green-50` : `text-green-200`} hover:text-green-50 font-lato font-semibold ${className}` }>
            <NavLink to={ to } onClick={ toggle } className={ `${({ isActive }) => isActive ? 'text-green-50' : ''} flex items-center mb-[8px] cursor-pointer` }>
                { icon }
                <div className="hidden lg:block">{ label }</div>
                { children && <CaretIcon className={ `ml-auto ${open && 'rotate-90'} transition` } /> }
            </NavLink>
            { children && <div className={ `${(open || active) ? `block max-h-screen` : `hidden h-0`} transition-max-height overflow-hidden pl-[34px] text-green-200 font-lato font-semibold mb-[24px]` }>
                { typeof children == 'array' ? children.map(item => item) : children }
            </div> }
        </div>
    );
};
