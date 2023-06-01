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
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Part", `${partForm.partId ? "Edit Data" : "Add Data"}`]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full py-6 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">{partForm.partId ? "Edit" : "Add"} Data</h1>
        </div>
        <div className="border-t border-[#D0D3D9] pt-4 pb-8 px-8">
          <form className="w-[80%]">
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400]">Cust. Item CD</label>
              <input type="text"
                value={partForm.part?.custItemId}
                onChange={(e) => partForm.onFormChange("custItemId", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input customer item cd"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Part Code</label>
              <input type="text"
                value={partForm.part?.partCode}
                onChange={(e) => partForm.onFormChange("partCode", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input part code"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Part Name</label>
              <input type="text"
                value={partForm.part?.partName}
                onChange={(e) => partForm.onFormChange("partName", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input part name"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Item Group CD</label>
              <input type="text" name="itemGroupCD"
                value={partForm.part?.itemGroupCode}
                onChange={(e) => partForm.onFormChange("itemGroupCode", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input group cd"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Item Group Name</label>
              <input
                type="text"
                name="item_group_cd"
                value={partForm.part?.itemGroupName}
                onChange={(e) => partForm.onFormChange("itemGroupName", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 text-md font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input item group name"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Old Part Number</label>
              <input type="text" name="old_part_number"
                value={partForm.part?.oldPartNumber}
                onChange={(e) => partForm.onFormChange("oldPartNumber", e.target.value) }
                className="w-full border rounded-lg outline-none px-4 py-2 font-[#B8B6B6] border-[#D0D3D9] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input old part number"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Customer Model</label>
              <select
                className={`${
                  partForm.part?.customerModelId == ""
                    ? "text-[#B8B6B6]"
                    : "text-[#514E4E]"
                } w-full border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-sm bg-white`}
                name="customer_model_id"
                value={partForm.part?.customerModelId || ""}
                onChange={(e) => partForm.onFormChange("customerModelId", e.target.value) }
              >
                <option value="" disabled>Select customer model</option>
                {partForm.customerModels.map((item) => (
                  <option value={item.id} key={item.id}> {item.name} </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Customer</label>
              <select
                className={`${
                  partForm.part?.customerId == ""
                    ? "text-[#B8B6B6]"
                    : "text-[#514E4E]"
                } w-full border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-sm bg-white`}
                name="customer_id"
                value={partForm.part?.customerId || ""}
                onChange={(e) => partForm.onFormChange("customerId", e.target.value) }
              >
                <option value="" disabled> Select customer </option>
                {partForm.customers.map((item) => ( <option value={item.id} key={item.id}> {item.name} </option>))}
              </select>
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400]">Customer Model Group</label>
              <select
                className={`${
                  partForm.part?.customerModelGroupId == ""
                    ? "text-[#B8B6B6]"
                    : "text-[#514E4E]"
                } w-full border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-sm bg-white`}
                name="customer_model_group_id"
                value={partForm.part?.customerModelGroupId || ""}
                onChange={(e) => partForm.onFormChange("customerModelGroupId", e.target.value) }
              > <option value="" disabled> Select customer model group </option>
                {partForm.customerModelGroups.map((item) => ( <option value={item.id} key={item.id}> {item.name} </option>))}
              </select>
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">ID Material - Material Name</label>
              <select
                className={`${
                  partForm.part?.material == ""
                    ? "text-[#B8B6B6]"
                    : "text-[#514E4E]"
                } w-full border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-sm bg-white`}
                name="material_id"
                value={partForm.part?.material || ""}
                onChange={(e) => partForm.onFormChange("material", e.target.value) }
              >
                <option value="" disabled> Select material </option>
                {partForm.materials.map((item) => ( <option value={item.id} key={item.id}> {item.name} </option>))}
              </select>
            </div>

            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Material Details</label>
              <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-4 py-2 tet-sm font-[400]">
                { partForm.materials.find((item) => item.id == partForm.part?.material)?.materialDetail || <span className="text-[#D0D3D9]">-</span> }
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400] text-[#514E4E]">Material Color</label>
              <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-sm">
                { partForm.materials.find( (item) => item.id == partForm.part?.material)?.color?.materialColor || <span className="text-[#D0D3D9]">-</span> }
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left my-2">
              <label className="font-[400]">Unit CD</label>
              <input type="text" name="unit_cd"
                value={partForm.part?.unitCd}
                onChange={(e) => partForm.onFormChange("unitCd", e.target.value) }
                className="w-full border border-[#D3D3D9] rounded-lg outline-none px-4 py-2 text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input unit cd (e.g. “pcs”)"
              />
            </div>
            <div className="flex flex-col gap-2 text-left my-2 text-[#514E4E]">
              <label className="font-[400]">Product Weight (gram)</label>
              <input
                type="text"
                name="product_weight"
                value={partForm.part?.productWeight}
                onChange={(e) => partForm.onFormChange("productWeight", e.target.value) }
                className="w-full border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-md mb-6 text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input product weight"
              />
            </div>
            <div className="flex gap-2 text-left">
              <button type="button" role="button"
                className="w-[180px] h-[46px] border bg-[#D0D3D9] border-[#D0D3D9] text-center rounded-md text-[#B8B6B6] font-[600] text-sm"
                onClick={(e) => partForm.onSubmit()}
              >Save</button>
              <button type="button" role="button"
                className="w-[180px] h-[46px] border border-[#D0D3D9] text-center rounded-md font-[600] text-[#514E4E] text-sm"
                onClick={(e) => partForm.onCancel()}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartFormView;