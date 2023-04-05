import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useMaterialForm } from "./material-form-view-model";

const MaterialFormView = () => {
    const materialForm = useMaterialForm();
    return (
        <>
            <div>
                <Breadcrumbs items={ ["Material", "Add Data"] } />
            </div>
            <div className="m-auto w-full border-2 border-gray-100  rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Add Data
                    </h1>
                </div>
                <div className="border-t-2 border-gray-100 pt-10 px-5 pb-80">
                    <form>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-600">ID Material</label>
                            <input
                                type="text"
                                value={ materialForm.material.idMaterial }
                                name={ 'idMaterial' }
                                onChange={ materialForm.onMaterialChange }
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label className="text-gray-600">Material</label>
                            <input
                                type="text"
                                value={ materialForm.material.name }
                                name={ 'name' }
                                onChange={ materialForm.onMaterialChange }
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label className="text-gray-600">
                                Material Detail
                            </label>
                            <input
                                type="text"
                                value={ materialForm.material.materialDetail }
                                name={ 'materialDetail' }
                                onChange={ materialForm.onMaterialChange }
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label className="text-gray-600">
                                Material Color
                            </label>
                            <select
                                type="text"
                                value={ materialForm.material.colorId }
                                name={ 'colorId' }
                                onChange={ materialForm.onMaterialChange }
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            >
                                <option value="" disabled>Select material color</option>
                                { materialForm.colors.data.map(item => (
                                    <option value={ item.id } key={ item.id }>{ item.idColor } - { item.materialColor }</option>
                                )) }
                            </select>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button onClick={ materialForm.onSave } className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800">
                                Save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
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
