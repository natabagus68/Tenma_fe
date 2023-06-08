import { Outlet, Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@common/components";
import { useState } from "react";
import CustContex from "./layout-customer-contex";
const LayoutCustomer = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  function getLastSegmentOfUrl(url) {
    const segments = url.split("/");
    return segments[segments.length - 1] !== ""
      ? segments[segments.length - 1]
      : segments[segments.length - 2];
  }

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Breadcrumbs items={["Customer"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-6">
        <div className="w-full py-4 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl font-sans text-[#514E4E]">
            Customer
          </h1>
        </div>
        <div className="w-full py-4 px-8 flex justify-between items-center border-t border-[#D0D3D9]">
          <div className="flex gap-5">
            <Link
              to={"/master-data/customer"}
              className={`text-[#514E4E] font-[400] hover:text-[#F04438] hover:border-b pb-2 hover:border-[#F04438]
              ${
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
              className={`text-[#514E4E] font-[400] hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438]
              ${
                getLastSegmentOfUrl(url) === "customer-model"
                  ? "border-b-2 pb-2 border-[#F04438] text-[#F04438]"
                  : null
              }`}
            >
              Customer Model
            </Link>
            <Link
              to={"/master-data/customer/customer-model-group"}
              className={`text-[#514E4E] font-[400] hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438]
              ${
                getLastSegmentOfUrl(url) === "customer-model-group"
                  ? "border-b-2 pb-2 border-[#F04438] text-[#F04438]"
                  : null
              }`}
            >
              Customer Model Group
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px] text-sm"
              onClick={(e) => {
                e.preventDefault();
                getLastSegmentOfUrl(url) === "customer"
                  ? navigate("add-data-c1")
                  : getLastSegmentOfUrl(url) === "customer-model"
                  ? navigate("add-data-c2")
                  : navigate("add-data-c3");
              }}
            >
              + Add Data
            </button>

            <input
              type="text"
              onChange={handleSearch}
              className="border border-gray-300 rounded-md py-2 px-3 outline-none text-gray-700"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <CustContex.Provider value={{ search, handleSearch }}>
            <Outlet />
          </CustContex.Provider>
        </div>
      </div>
    </>
  );
};

export default LayoutCustomer;

