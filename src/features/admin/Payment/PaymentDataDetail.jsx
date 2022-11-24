import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DownloadIcon, HistoryIcon } from '../../../common/components/icons';
import { config } from '../../../common/utils';
import { AcceptDialog } from './AcceptDialog';
import { RejectDialog } from './RejectDialog';

export const PaymentDataDetail = () => {
    const { id } = useParams();
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Internal</a>/
                <a>Payment</a>/
                <Link to={ `${config.pathPrefix}payment-data` }>Data</Link>/
                <div className="text-gray-700">Details</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light w-full">
                <div className="bg-sky-lightest px-4 py-4 md:px-[48px] md:py-[21px] flex items-center flex-wrap gap-12 justify-between border-b border-sky-light">
                    <div className="text-green-500 font-600 text-2xl">
                        Payments Details
                    </div>
                    <Link to={`${config.pathPrefix}payment-data/${id}/history`} className="ml-auto flex gap-2 items-center">
                        <HistoryIcon />
                        <span>History</span>
                    </Link>
                    <button disabled className="flex gap-2 items-center">
                        <DownloadIcon />
                        <span>Download Invoice</span>
                    </button>
                </div>
                <div className="py-6 px-12 grid md:grid-cols-2 gap-10">
                    <div className="">
                        <div className="mb-12">
                            <div className="text-xl mb-2 font-semibold">Company Identity</div>
                            <div className="px-4 py-3">
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Company Name</span>
                                    <span>PT. Tambang Jaya</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Area</span>
                                    <span>Sumatera, Kalimantan, Kintamani, Terus, Sulawesi</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Total Pit</span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-xl mb-2 font-semibold">Status</div>
                            <div className="px-4 py-3">
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Status Type </span>
                                    <span>Pending</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Payment Method</span>
                                    <span>Manual Transfer</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Bank Source</span>
                                    <span>BCA</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Account Name</span>
                                    <span>PT. Tambang Jaya</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Account Number</span>
                                    <span>1234567890987654</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Date</span>
                                    <span>12/12/2022</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Total Payment</span>
                                    <span>Rp. 5.500.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-xl mb-2 font-semibold">Receipt</div>
                        <div className="w-[407px] h-[463px] animate-pulse bg-gray-100"></div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 px-12 mb-14 text-white">
                    <AcceptDialog />
                    <RejectDialog />
                    <Link to={`${config.pathPrefix}payment-data`} className="bg-gray-100 rounded-md py-3 px-14">Skip</Link>
                </div>
            </div>
        </>
    );
};
