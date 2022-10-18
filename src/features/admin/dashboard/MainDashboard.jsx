import React from 'react';
import { PlusIcon } from '../../../common/components/icons';

export const MainDashboard = () => {
    return (
        <div>
            <div className="flex gap-3 text-gray-500 font-lato mb-6">
                <a href="#">Menu</a>/
                <a href="#">Data</a>/
                <a href="#">Master Data</a>/
                <div className="text-gray-700">Employee Data</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light">
                <div className="bg-sky-lightest px-[48px] py-[28px] flex justify-between border-b border-sky-light">
                    <div className="text-green-500 font-rubik font-600 text-2xl">
                        Employee Data
                    </div>
                    <button className="flex items-center gap-2 rounded bg-green-500 px-3 py-1 text-white font-rubik">
                        <PlusIcon /> Add Data
                    </button>
                </div>
                <div className="py-6 px-12">
                    Data_
                </div>
            </div>
        </div>
    );
};
