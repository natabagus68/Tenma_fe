import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import { useFormik } from "formik";
import { useAddPartDataMutation } from "../../../../../app/services/partService";
import Select from "react-tailwindcss-select";
import { useGetCustomerModelQuery } from "../../../../../app/services/customerModelService";
import { useGetCustomerQuery } from "../../../../../app/services/customerService";
import { useGetCustomerModelGroupQuery } from "../../../../../app/services/customerModelGroupService";
import { useGetMaterialQuery } from "../../../../../app/services/materialService";
const PartFormView = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            cust_item_cd: '',
            part_code: '',
            item_group_cd: '',
            item_group_name: '',
            old_part_number: '',
            customer_model_id: '',
            customer_id: '',
            customer_model_group_id: '',
            material_id: '',
            material_color: '',
            unit_cd: '',
            product_weight: '',
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
    const customerModel = useGetCustomerModelQuery({ page: 1, limit: 9999 });
    const customerModels = useMemo(() => (customerModel.data?.data || [])?.map(item => ({
        label: item.name,
        value: item.id
    })), [customerModel.data]);
    const customer = useGetCustomerQuery({ page: 1, limit: 9999 });
    const customers = useMemo(() => (customer.data?.data || [])?.map(item => ({
        label: item.name,
        value: item.id
    })), [customer.data]);
    const customerModelGroup = useGetCustomerModelGroupQuery({ page: 1, limit: 9999 });
    const customerModelGroups = useMemo(() => (customerModelGroup.data?.data || [])?.map(item => ({
        label: item.name,
        value: item.id
    })), [customerModelGroup.data]);
    const material = useGetMaterialQuery({ page: 1, limit: 9999 });
    const materials = useMemo(() => (material.data?.data || [])?.map(item => ({
        label: `${item.id_tool} - ${item.name}`,
        value: item.id
    })), [material.data]);
    return (
        <>
            <div>
                <Breadcrumbs items={ ["Part", "Add Data"] } />
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
                                name="cust_item_cd"
                                value={ formik.values.cust_item_cd }
                                onChange={ formik.handleChange }
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
                                name="part_cd"
                                value={ formik.values.part_cd }
                                onChange={ formik.handleChange }
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
                                value={ formik.values.item_group_cd }
                                onChange={ formik.handleChange }
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
                                value={ formik.values.item_group_cd }
                                onChange={ formik.handleChange }
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
                                value={ formik.values.old_part_number }
                                onChange={ formik.handleChange }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input old part number"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model
                            </label>
                            <select className={ `${formik.values.customer_model_id == '' ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white` } name="customer_model_id" value={ formik.values.customer_model_id } onChange={ formik.handleChange }>
                                <option value="" disabled>Select customer model</option>
                                { customerModels.map(item => (<option value={ item.value } key={ item.value }>{ item.label }</option>)) }
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer
                            </label>
                            <select className={ `${formik.values.customer_id == '' ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white` } name="customer_id" value={ formik.values.customer_id } onChange={ formik.handleChange }>
                                <option value="" disabled>Select customer</option>
                                { customers.map(item => (<option value={ item.value } key={ item.value }>{ item.label }</option>)) }
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Customer Model Group
                            </label>
                            <select className={ `${formik.values.customer_model_group_id == '' ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white` } name="customer_model_group_id" value={ formik.values.customer_model_group_id } onChange={ formik.handleChange }>
                                <option value="" disabled>Select customer model group</option>
                                { customerModelGroups.map(item => (<option value={ item.value } key={ item.value }>{ item.label }</option>)) }
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                ID Material - Material Name
                            </label>
                            <select className={ `${formik.values.material_id == '' ? 'text-gray-200' : 'text-gray-700'} w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md font-mono bg-white` } name="material_id" value={ formik.values.material_id } onChange={ formik.handleChange }>
                                <option value="" disabled>Select material</option>
                                { materials.map(item => (<option value={ item.value } key={ item.value }>{ item.label }</option>)) }
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Details
                            </label>
                            <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono">
                                -
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Material Color
                            </label>
                            <div className="w-full bg-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono">-</div>
                        </div>
                        <div className="flex flex-col gap-2 text-left my-2">
                            <label className="font-sans text-gray-700">
                                Unit CD
                            </label>
                            <input
                                type="text"
                                name="unit_cd"
                                value={ formik.values.unit_cd }
                                onChange={ formik.handleChange }
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
                                value={ formik.values.product_weight }
                                onChange={ formik.handleChange }
                                className="w-full border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                                placeholder="Input product weight"
                            />
                        </div>
                        <div className="flex gap-2 text-left mt-10">
                            <button className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800">
                                save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                onClick={ (e) => {
                                    e.preventDefault();
                                    navigate(-1);
                                } }
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
};

export default PartFormView;
