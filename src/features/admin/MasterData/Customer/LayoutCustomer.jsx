import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import Pagination from "../../../../common/components/pagination/Pagination";

const LayoutCustomer = () => {
    const navigate = useNavigate();
    const url = window.location.href;
    function getLastSegmentOfUrl(url) {
        const segments = url.split("/");
        return segments[segments.length - 1];
    }
    return (
        <>
            <div>
                <Breadcrumbs items={["customer"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Customer
                    </h1>
                </div>

                <div className="w-full py-5 px-12 flex justify-between items-center border-t-2 boder-gray-100">
                    <div className="flex gap-5">
                        <Link
                            to={"/master-data/customer"}
                            className={`text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438] hover:scale-90 ${
                                getLastSegmentOfUrl(url) === "customer"
                                    ? "border-b-2 pb-2 border-[#F04438] text-[#F04438]"
                                    : null
                            }`}
                        >
                            Customer
                        </Link>
                        <Link
                            to={"/master-data/customer/customer-model"}
                            Model
                            className={`text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438] ${
                                getLastSegmentOfUrl(url) === "customer-model"
                                    ? "border-b-2 pb-2 border-[#F04438] text-[#F04438]"
                                    : null
                            }`}
                        >
                            Customer Model
                        </Link>
                        <Link
                            to={"/master-data/customer/customer-model-group"}
                            className={`text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438] ${
                                getLastSegmentOfUrl(url) ===
                                "customer-model-group"
                                    ? "border-b-2 pb-2 border-[#F04438] text-[#F04438]"
                                    : null
                            }`}
                        >
                            Customer Model Group
                        </Link>
                    </div>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            if (getLastSegmentOfUrl(url) === "customer") {
                                navigate("add-data-c1");
                            } else if (
                                getLastSegmentOfUrl(url) == "customer-model"
                            ) {
                                navigate("add-data-c2");
                            } else if (
                                getLastSegmentOfUrl(url) ==
                                "customer-model-group"
                            ) {
                                navigate("add-data-c3");
                            }
                        }}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <Outlet />
                </div>
                <div className="flex items-center justify-end mt-4 px-5">
                    <Pagination row={1} limit={10} />
                </div>
            </div>
        </>
    );
};

export default LayoutCustomer;
