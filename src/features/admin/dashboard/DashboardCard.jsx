import React from "react";

export const DashboardCard = ({ label, content, icon }) => {
    return (
        <div className="flex  gap-5 px-6 py-8 bg-white rounded-lg shadow-[0px_4px_30px_rgba(0,_0,_0,_0.11)]">
            {icon}
            <div className="">
                <div className="text-xl font-bold">{label}</div>
                <div className="text-xl text-gray-500">{content}</div>
            </div>
        </div>
    );
};
