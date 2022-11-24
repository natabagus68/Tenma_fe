import React from 'react';

export const SelectArrowIcon = ({ width = 12, height = 6, ...props }) => {
    return (
        <svg width={ 12 } height={ 6 } { ...props } viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill="#0B7D5F" />
        </svg>
    );
};
