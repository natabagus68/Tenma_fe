import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DownloadIcon, HistoryIcon } from '../../../common/components/icons';
import { config } from '../../../common/utils';

export const AreaAccessDetail = () => {
    const { id } = useParams();
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Internal</a>/
                <a>Payment</a>/
                <Link to={ `${config.pathPrefix}area-access` }>Area Access</Link>/
                <div className="text-gray-700">Details</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light w-full">
                <div className="bg-sky-lightest px-4 py-4 md:px-[48px] md:py-[21px] flex items-center flex-wrap gap-12 justify-between border-b border-sky-light">
                    <div className="text-green-500 font-600 text-2xl">
                        Details
                    </div>
                    <Link to={ `${config.pathPrefix}area-access/${id}/area` } className="ml-auto py-1 px-6 bg-green-500 rounded-md text-white">Go to Area</Link>
                </div>
                <div className="py-6 md:px-12 px-6 grid md:grid-cols-2 gap-10">
                    <div className="">
                        <div className="mb-12">
                            <div className="text-xl mb-2 font-semibold">Company Logo</div>
                            <div className="w-[96px] h-[96px] rounded-full border overflow-hidden bg-gray-100 animate-pulse"></div>
                        </div>
                        <div className="">
                            <div className="text-xl mb-2 font-semibold">Company Information</div>
                            <div className="md:px-4 py-3">
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Status</span>
                                    <span>: Active</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Company Code</span>
                                    <span>: XHWWHT12434</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Company Name</span>
                                    <span>: PT. Ragalion Revolusi Industri</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Total Area</span>
                                    <span>: 12</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Total User</span>
                                    <span>: 200</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Price/Area</span>
                                    <span>: Rp. 1.000.000</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Discount</span>
                                    <span>: 0%</span>
                                </div>
                                <div className="px-4 py-2 odd:bg-gray-50 grid grid-cols-2">
                                    <span>Price After Discount</span>
                                    <span>: Rp. 1.000.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
