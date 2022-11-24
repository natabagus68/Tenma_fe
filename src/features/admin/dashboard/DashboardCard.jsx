import React from 'react';

export const DashboardCard = ({label, content, icon}) => {
    return (
        <div className="flex justify-between gap-6 px-6 py-8 bg-white rounded-lg shadow-[0px_4px_30px_rgba(0,_0,_0,_0.11)]">
            <div className="">
                <div className="text-lg font-semibold">{label}</div>
                <div className="text-3xl text-gray-300 font-bold">{content}</div>
            </div>
            {icon}
        </div>
    );
};
