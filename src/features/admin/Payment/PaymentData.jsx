import React from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, SelectArrowIcon } from '../../../common/components/icons';
import { Input, Select } from '../../../common/components/input';
import { Table } from '../../../common/components/table/Table';
import { config } from '../../../common/utils';

export const PaymentData = () => {
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Internal</a>/
                <a>Payment</a>/
                <div className="text-gray-700">Data</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light w-full">
                <div className="bg-sky-lightest px-4 py-4 md:px-[48px] md:py-[21px] flex items-center flex-wrap gap-3 justify-between border-b border-sky-light">
                    <div className="text-green-500 font-600 text-2xl">
                        Payment
                    </div>
                    <div className="relative">
                        <Select className={ `border border-green-500 min-w-[191px]` } placeholder={ `Select Status` }>
                            <option value="status">status</option>
                        </Select>
                        <div className="absolute flex h-full mr-6 items-center top-0 right-0">
                            <SelectArrowIcon />
                        </div>
                    </div>
                </div>
                <div className="md:py-8 py-4 px-4 md:px-12">
                    <div className="flex flex-wrap gap-2 font-body text-gray-700 items-center mb-[27px]">
                        <Table.ShowFilter />
                        <div className="md:ml-auto">
                            <Input className={ `max-w-[191px]` } placeholder="search..." />
                        </div>
                    </div>
                    <Table>
                        <Table.Thead>
                            <Table.Th>Company</Table.Th>
                            <Table.Th>Area</Table.Th>
                            <Table.Th>Total Pit</Table.Th>
                            <Table.Th>Date</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </Table.Thead>
                        <tbody>
                            <Table.Tr>
                                <Table.Td>PT. Tambang Jaya</Table.Td>
                                <Table.Td>5</Table.Td>
                                <Table.Td>3</Table.Td>
                                <Table.Td>12/12/2022</Table.Td>
                                <Table.Td>
                                    <div className="text-orange-500">Pending</div>
                                </Table.Td>
                                <Table.Td>
                                    <Link to={`${config.pathPrefix}payment-data/12123asdsadfsagasrf`} className="flex max-w-min items-center gap-2 rounded-lg bg-green-500 text-white px-3 py-2">
                                        View
                                        <EyeIcon />
                                    </Link>
                                </Table.Td>
                            </Table.Tr>
                        </tbody>
                    </Table>
                    <div className="flex flex-wrap gap-4 items-center mt-6 overflow-auto">
                        <div className="span text-gray-700">Showing 1 to 10 of 57 entries</div>
                        <div className="flex md:ml-auto rounded-lg border border-[#CDCFD0] text-sky-dark">
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50">Previous</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0] bg-green-500 text-white">1</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0]">2</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0]">3</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0]">4</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0]">...</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50 border-r border-[#CDCFD0]">8</button>
                            <button className="px-3 py-2 hover:text-gray-400 hover:bg-gray-50">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
