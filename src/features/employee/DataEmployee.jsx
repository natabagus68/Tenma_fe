import React from 'react';
import { Table } from '../../common/components/table/Table';

export const DataEmployee = () => {
    return (
        <>
            <div className="flex gap-2 font-lato text-gray-700 items-center mb-[27px]">
                <span className="">Show</span>
                <select name="" id="" className="bg-white rounded border px-1" defaultValue={ 10 }>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="">All</option>
                </select>
                <span className="">Entries</span>
                <div className="ml-auto">
                    <input type="text" className="border rounded-lg px-3 py-2 text-gray-700 border-sky-base placeholder-sky-base" placeholder="Search..." />
                </div>
            </div>
            <table className="border-l border-t border-sky-base w-full">
                <thead className="font-lato text-gray-700">
                    <tr>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">Name</span>
                                <Table.Order />
                            </div>
                        </th>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">NPK</span>
                                <Table.Order />
                            </div>
                        </th>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">Email</span>
                                <Table.Order />
                            </div>
                        </th>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">Position</span>
                                <Table.Order />
                            </div>
                        </th>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">Division</span>
                                <Table.Order />
                            </div>
                        </th>
                        <th className="px-8 py-4 border-r border-b border-sky-base">
                            <div className="w-full flex justify-between items-center">
                                <span className="">Action</span>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    );
};
