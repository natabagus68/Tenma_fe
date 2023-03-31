import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../common/components";

const AddSegmentData = () => {
    const navigate = useNavigate();
    const [segment, setSegment] = useState([
        {
            url: "",
            text: "",
        },
    ]);
    const [segmentText, setSegmentText] = useState("");
    const handleSegment = (e, i) => {
        const value = e.target.value;
        setSegment((prev) => {
            const object = {
                url: value,
                text: value,
            };
            return prev.map((item, prevKey) => (prevKey == i ? object : item));
        });
    };
    // const handleBrowsInputText = (e) => {
    //     const value = e.target.value;
    //     setSegmentText(value);
    // };
    return (
        <>
            <div>
                <Breadcrumbs
                    items={["Daily Progress Check", "Details 3D", "Add Data"]}
                />
            </div>
            <div className="m-auto w-full border-2 border-gray-100  rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Add Segment Data
                    </h1>
                </div>
                <div className="border-t-2 border-gray-100 pt-10 px-5 pb-80">
                    <form>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-600">Tools Code</label>
                            <input
                                type="text"
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        {/* browse */}
                        {segment.map((e, i) => {
                            return (
                                <div className="flex flex-col mt-5 gap-3">
                                    <label className="text-gray-600">
                                        Segment
                                    </label>
                                    <div class="inline-flex bg-gray-100 rounded-md border border-gray-200  w-[80%] ">
                                        <label
                                            htmlFor={`file${i}`}
                                            className="inline bg-gray-200 py-2 px-4 text-gray-600 select-none"
                                        >
                                            Browser
                                        </label>
                                        <input
                                            type="file"
                                            id={`file${i}`}
                                            className="hidden"
                                            onChange={(e) =>
                                                handleSegment(e, i)
                                            }
                                        />
                                        <input
                                            type="text"
                                            onChange={(e) =>
                                                handleSegment(e, i)
                                            }
                                            value={e.text}
                                            placeholder="no file choosen"
                                            className=" border-transparent bg-white rounded-r-md w-full py-1 text-gray-600 px-4 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        <div className="mt-5">
                            {segment.length > 0 && segment[0].url.length > 0 ? (
                                <button
                                    className="px-4 py-3 rounded-md bg-[#1BBDD4] text-center text-white"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSegment([
                                            ...segment,
                                            { url: "", text: "" },
                                        ]);
                                    }}
                                >
                                    + Add Segment
                                </button>
                            ) : null}
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800">
                                Save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("../");
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddSegmentData;
