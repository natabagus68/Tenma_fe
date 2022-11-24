import React from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, PenIcon, PlusIcon, TrashIcon } from '../../../common/components/icons';
import { Input, Toggle } from '../../../common/components/input';
import { Table } from '../../../common/components/table/Table';
import { config } from '../../../common/utils';

export const AreaAccess = () => {
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Internal</a>/
                <a>Payment</a>/
                <div className="text-gray-700">Area Access</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light w-full">
                <div className="bg-sky-lightest px-4 py-4 md:px-[48px] md:py-[21px] flex items-center flex-wrap gap-3 justify-between border-b border-sky-light">
                    <div className="text-green-500 font-600 text-2xl">
                        Access
                    </div>
                    <Link to={`${config.pathPrefix}area-access/create`} className="flex items-center gap-2 rounded bg-green-500 text-white px-3 py-2">
                        <PlusIcon />
                        Add Data
                    </Link>
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
                            <Table.Th width={ 173 }>Status</Table.Th>
                            <Table.Th>Company Code</Table.Th>
                            <Table.Th>Company Name</Table.Th>
                            <Table.Th>Total Area</Table.Th>
                            <Table.Th>Total User</Table.Th>
                            <Table.Th width={154}>Action</Table.Th>
                        </Table.Thead>
                        <tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Toggle activeText={ `Active` } inactiveText={ `Inactive` } />
                                </Table.Td>
                                <Table.Td>XHWWHT12434</Table.Td>
                                <Table.Td>3PT. Ragalion Revolusi Industri</Table.Td>
                                <Table.Td>12</Table.Td>
                                <Table.Td>120 </Table.Td>
                                <Table.Td>
                                    <div className="flex gap-2">
                                        <Link to={ `${config.pathPrefix}area-access/12123asdsadfsagasrf` } className="flex w-6 h-6 items-center justify-center gap-2 rounded bg-blue-500 text-white">
                                            <EyeIcon />
                                        </Link>
                                        <Link to={ `${config.pathPrefix}area-access/12123asdsadfsagasrf/edit` } className="flex w-6 h-6 items-center justify-center gap-2 rounded bg-orange-500 text-white">
                                            <PenIcon />
                                        </Link>
                                        <Link to={ `${config.pathPrefix}area-access/12123asdsadfsagasrf` } className="flex w-6 h-6 items-center justify-center gap-2 rounded bg-red-500 text-white">
                                            <TrashIcon />
                                        </Link>
                                    </div>
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
