import React from "react";

const JudgemnetIcon = ({ value, changer }) => {
    const input = value.toLowerCase();

    return (
        <select
            onChange={changer}
            value={value}
            className={`py-2 rounded-full ${
                input === "waiting"
                    ? "bg-yellow-500"
                    : input === "ok"
                    ? "bg-green-500"
                    : input == "ng"
                    ? "bg-red-500"
                    : ""
            }  text-white  text-center inline px-3 outline-none`}
        >
            <option value="Waiting">Waiting</option>
            <option value="OK">OK</option>
            <option value="NG">NG</option>
        </select>
    );
};

export default JudgemnetIcon;
