import React from 'react';

export const Td = ({ children, className, ...props }) => {
    return (
        <>
            <td className={ `border-r border-b border-sky-base text-gray-700 py-3 px-8 whitespace-nowrap ${className}` } { ...props }>{ children }</td>
        </>
    );
};
