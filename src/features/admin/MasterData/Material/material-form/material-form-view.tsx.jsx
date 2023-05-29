import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useMaterialForm } from "./material-form-view-model";

const MaterialFormView = () => {
    const materialForm = useMaterialForm();
    return (
        <>
            <div>
                <Breadcrumbs items={ ["Material", materialForm.id ? "Edit Data" : "Add Data"] } />
            </div>
            <div className="m-auto w-full border border-gray-100  rounded-lg pb-6">
                <div className="w-full py-7 px-8 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-open-sans">
                        { materialForm.id ? "Edit Data" : "Add Data" }
                    </h1>
                </div>
                <div className="border-t border-gray-100 pt-5 px-8 pb-80">
                    <form>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#514E4E] font-open-sans ">ID Material</label>
                            <input
                                type="text"
                                value={ materialForm.material.idMaterial }
                                name={ 'idMaterial' }
                                onChange={ materialForm.onMaterialChange }
                                placeholder={'Input id material'}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-800 font-open-sans font-600"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="text-[#514E4E] font-open-sans ">Material</label>
                            <input
                                type="text"
                                value={ materialForm.material.name }
                                name={ 'name' }
                                onChange={ materialForm.onMaterialChange }
                                placeholder={'Input material'}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-800 font-open-sans font-600"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="text-[#514E4E] font-open-sans ">
                                Material Detail
                            </label>
                            <input
                                type="text"
                                value={ materialForm.material.materialDetail }
                                name={ 'materialDetail' }
                                onChange={ materialForm.onMaterialChange }
                                placeholder={'Input material detail'}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-800 font-open-sans font-600"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="text-[#514E4E] font-open-sans ">
                                Material Color
                            </label>
                            <select
                                type="text"
                                value={ materialForm.material.colorId }
                                name={ 'colorId' }
                                onChange={ materialForm.onMaterialChange }
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-4 py-2 text-md text-gray-800 font-open-sans font-600"
                            >
                                <option value="" disabled><span className="bg-gray-100">Select material color</span></option>
                                { materialForm.colors.data.map(item => (
                                    <option value={ item.id } key={ item.id }>{ item.idColor } - { item.materialColor }</option>
                                )) }
                            </select>
                        </div>
                        <div className="flex gap-4 mt-7">
                            <button onClick={ materialForm.onSave } className="px-12 py-3 rounded-lg bg-[#1BBDD4] text-white items-center flex justify-center ">
                                Save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-[#667085] items-center flex justify-center "
                                type="button"
                                role="button"
                                onClick={ materialForm.onCancel }
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

export default MaterialFormView;
