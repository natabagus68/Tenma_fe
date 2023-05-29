import React from "react";

const JudgemnetIcon2 = ({ value = "" }) => {
    const input = value.toLowerCase();
    if (input === "waiting") {
        return (
            <div className="py-2 rounded-full bg-[#F9A63A] text-white  text-center inline px-3">
                {value}
            </div>
        );
    } else if (input === "ok") {
        return (
            <div className="py-2 rounded-full bg-[#41C487] text-white txt-center inline px-3">
                {value}
            </div>
        );
    } else if (input === "ng") {
        return (
            <div className="py-2 rounded-full bg-[#F36960] text-white text-center inline px-3">
                {value}
            </div>
        );
    } else {
        return <div>{value}</div>;
    }
};

export default JudgemnetIcon2;
