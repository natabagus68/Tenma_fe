import React from "react";

const JudgemnetIcon = ({ value, changer }) => {
    const input = value.toLowerCase();

    return (
        <select
            onChange={changer}
            value={input}
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
            {/* {value} */}
            <option value="waiting">Waiting</option>
            <option value="ok">OK</option>
            <option value="ng">NG</option>
        </select>
    );
};

export default JudgemnetIcon;
