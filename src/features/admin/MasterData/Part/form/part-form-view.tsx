import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { usePartForm } from "./part-form-view-model";
import { PartApiRepository } from "@data/api/part-api-repository";
import { CustomerModelApiRepository } from "@data/api/customer-model-api-repository";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { CustomerModelGroupApiRepository } from "@data/api/customer-model-group-api-repository";
import { MaterialApiRepository } from "@data/api/material-api-repository";
const PartFormView = () => {
    const partForm = usePartForm(
        new PartApiRepository(),
        new CustomerModelApiRepository(),
        new CustomerApiRepository(),
        new CustomerModelGroupApiRepository(),
        new MaterialApiRepository()
    );
    return (
        <>
            <div>
                <Breadcrumbs items={["Part", "Add Data"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-52 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        {partForm.partId ? "Edit data." : "Add data."}
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
                                value={partForm.part?.custItemId}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "custItemId",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input customer item cd"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Part Code
                            </label>
                            <input
                                type="text"
                                value={partForm.part?.partCode}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "partCode",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input part code"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Item Group CD
                            </label>
                            <input
                                type="text"
                                name="itemGroupCD"
                                value={partForm.part?.itemGroupCode}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "itemGroupCode",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input part name"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Item Group Name
                            </label>
                            <input
                                type="text"
                                name="item_group_cd"
                                value={partForm.part?.itemGroupName}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "itemGroupName",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input item group name"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Old Part Number
                            </label>
                            <input
                                type="text"
                                name="old_part_number"
                                value={partForm.part?.oldPartNumber}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "oldPartNumber",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input old part number"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model
                            </label>
                            <select
                                className={`${
                                    partForm.part?.customerModelId == ""
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                } w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white`}
                                name="customer_model_id"
                                value={partForm.part?.customerModelId || ''}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "customerModelId",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="" disabled>
                                    Select customer model
                                </option>
                                {partForm.customerModels.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer
                            </label>
                            <select
                                className={`${
                                    partForm.part?.customerId == ""
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                } w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white`}
                                name="customer_id"
                                value={partForm.part?.customerId || ''}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "customerId",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="" disabled>
                                    Select customer
                                </option>
                                {partForm.customers.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model Group
                            </label>
                            <select
                                className={`${
                                    partForm.part?.customerModelGroupId == ""
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                } w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white`}
                                name="customer_model_group_id"
                                value={partForm.part?.customerModelGroupId || ''}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "customerModelGroupId",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="" disabled>
                                    Select customer model group
                                </option>
                                {partForm.customerModelGroups.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                ID Material - Material Name
                            </label>
                            <select
                                className={`${
                                    partForm.part?.material == ""
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                } w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white`}
                                name="material_id"
                                value={partForm.part?.material || ''}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "material",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="" disabled>
                                    Select material
                                </option>
                                {partForm.materials.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Details
                            </label>
                            <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono">
                                {partForm.part?.materialDetails || "-"}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Color
                            </label>
                            <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono">
                                {partForm.part?.materialColor || "-"}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Unit CD
                            </label>
                            <input
                                type="text"
                                name="unit_cd"
                                value={partForm.part?.unitCd}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "unitCd",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input unit cd (e.g. “pcs”)"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Product Weight (gram)
                            </label>
                            <input
                                type="text"
                                name="product_weight"
                                value={partForm.part?.productWeight}
                                onChange={(e) =>
                                    partForm.onFormChange(
                                        "productWeight",
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input product weight"
                            />
                        </div>
                        <div className="flex gap-2 text-left mt-10">
                            <button
                                onClick={e => partForm.onSubmit()}
                                type="button"
                                role="button"
                                className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800"
                            >
                                save
                            </button>
                            <button
                                type="button"
                                role="button"
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                onClick={ (e) => partForm.onCancel() }
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

export default PartFormView;
