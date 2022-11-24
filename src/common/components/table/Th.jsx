import React from 'react';
import { Order } from './Order';

export const Th = ({ children, className, order = true, ...props }) => {
    return (
        <>
            <th className={ `px-8 py-4 border-r border-b-[3px] border-b-[#72777A] border-sky-base whitespace-nowrap ${className}` } { ...props }>
                <div className="w-full flex justify-between items-center">
                    { children }
                    { order && <Order /> }
                </div>
            </th>
        </>
    );
};
