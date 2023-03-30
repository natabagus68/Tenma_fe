import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddPartDataMutation } from "../../../../app/services/partService";
import SearchDropDown from "../../../../common/components/SearchDropDown";

import Select from "react-tailwindcss-select";
const AddDataPart = () => {
    const [animal, setAnimat] = useState("");
    const navigate = useNavigate();
    const [addPart] = useAddPartDataMutation();
    const options = [
        { value: "fox", label: "🦊 Fox" },
        { value: "Butterfly", label: "🦋 Butterfly" },
        { value: "Honeybee", label: "🐝 Honeybee" },
    ];
    const formik = useFormik({
        initialValues: {
            custItemCD: "",
            partCode: "",
            itemGroupCD: "",
            itemGroupName: "",
            oldPartNumber: "",
            customerModel: "",
            customer: "",
            customerModelGroup: "",
            IdMatrial_MaterialName: "",
            materialDetails: "",
            materialColor: "",
            unitCD: "",
            productWeight: "",
        },
        onSubmit: (values) => {
            addPart({
                cust_item_cd: values.custItemCD,
                part_code: values.partCode,
                item_group_cd: values.itemGroupCD,
                item_group_name: values.itemGroupName,
                old_part_number: values.oldPartNumber,
                customer_model_id: values.customerModel,
                customer_id: values.customer,
                customer_model_group_id: values.customerModelGroup,
                material_id: values.IdMatrial_MaterialName,
                material_color: values.materialColor,
                unit_cd: values.unitCD,
                product_weight: values.productWeight,
            });
        },
    });
    const handleChange = (value) => {
        setAnimat(value);
        console.log(value);
    };
    return (
        <>
            <div>
                <Breadcrumbs items={["Part", "Add Data"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-52 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Add data.
                    </h1>
                </div>

                <div className="border-t-2 border-gray-100 py-8 pl-8 pr-52">
                    <form>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Cust. Item CD
                            </label>
                            <input
                                type="text"
                                name="custItemCD"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Part Code
                            </label>
                            <input
                                type="text"
                                name="partCode"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Item Group CD
                            </label>
                            <input
                                type="text"
                                name="itemGroupCD"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Item Group Name
                            </label>
                            <input
                                type="text"
                                name="itemGroupName"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Old Part Number
                            </label>
                            <input
                                type="text"
                                name="oldPartNumber"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model
                            </label>

                            <Select
                                value={animal}
                                onChange={handleChange}
                                isSearchable={true}
                                onSearchInputChange={(e) =>
                                    console.log(e.target.value)
                                }
                                options={options}
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer
                            </label>
                            <Select
                                value={animal}
                                onChange={handleChange}
                                isSearchable={true}
                                classNames="bg-white"
                                onSearchInputChange={(e) =>
                                    console.log(e.target.value)
                                }
                                options={options}
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model Group
                            </label>
                            <Select
                                value={animal}
                                onChange={handleChange}
                                isSearchable={true}
                                classNames="bg-white"
                                onSearchInputChange={(e) =>
                                    console.log(e.target.value)
                                }
                                options={options}
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                ID Material - Material Name
                            </label>
                            <input
                                type="text"
                                name="IdMaterial_MatrialName"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Details
                            </label>
                            <input
                                type="text"
                                name="materialDetails"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Color
                            </label>
                            <input
                                type="text"
                                name="materialColor"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Unit CD
                            </label>
                            <input
                                type="text"
                                name="unitCD"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Product Weight (gram)
                            </label>
                            <input
                                type="text"
                                name="productWeight"
                                onChange={formik.handleChange}
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex gap-2 text-left mt-10">
                            <button className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800">
                                save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("../");
                                }}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddDataPart;
