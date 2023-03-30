import React from "react";

const JudgemnetIcon = ({ value }) => {
    const input = value.toLowerCase();
    if (input === "waiting") {
        return (
            <div className="py-2 rounded-full bg-yellow-500 text-white">
                {value}
            </div>
        );
    } else if (input === "ok") {
        return (
            <div className="py-2 rounded-full bg-green-500 text-white">
                {value}
            </div>
        );
    } else if (input === "ng") {
        return (
            <div className="py-2 rounded-full bg-red-500 text-white">
                {value}
            </div>
        );
    } else {
        return <div>{value}</div>;
    }
};

export default JudgemnetIcon;
