import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/components';
import { config } from '../../../common/utils';

export const AreaAccessCreate = () => {
    const [areaAccess, setAreaAccess] = useState({
        name: '',
        total_area: '',
        total_user: '',
        company_code: '',
        status: 'Active',
        logo: '',
        price_per_area: '',
        discount: '',
        price_after_discount: '',
    });
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Internal</a>/
                <a>Payment</a>/
                <Link to={ `${config.pathPrefix}area-access` }>Area Access</Link>/
                <div className="text-gray-700">Add Data</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-sky-light w-full">
                <div className="bg-sky-lightest px-4 py-4 md:px-[48px] md:py-[21px] flex items-center flex-wrap gap-12 justify-between border-b border-sky-light">
                    <div className="text-green-500 font-600 text-2xl">
                        Add Data
                    </div>
                </div>
                <div className="py-6 md:px-12 px-6 grid gap-4">
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Company Name</div>
                        <Input className="w-full" value={ areaAccess.name } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, name: e.target.value })) } placeholder={ `Input company name` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Total Area</div>
                        <Input className="w-full" value={ areaAccess.total_area } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, total_area: e.target.value })) } placeholder={ `Input total area` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Total User</div>
                        <Input className="w-full" value={ areaAccess.total_user } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, total_user: e.target.value })) } placeholder={ `Input total user` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Company Code</div>
                        <Input className="w-full" value={ areaAccess.company_code } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, company_code: e.target.value })) } placeholder={ `Auto generate` } disabled />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Status</div>
                        <Input className="w-full" value={ areaAccess.status } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, status: e.target.value })) } placeholder={ `Active` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Logo</div>
                        <Input className="w-full" value={ areaAccess.logo } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, logo: e.target.value })) } placeholder={ `no file choosen` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Price/Area</div>
                        <Input className="w-full" value={ areaAccess.price_per_area } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, price_per_area: e.target.value })) } placeholder={ `Input price` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Discount</div>
                        <Input className="w-full" value={ areaAccess.discount } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, discount: e.target.value })) } placeholder={ `Input discount` } />
                    </div>
                    <div className="">
                        <div className="text-xl font-semibold mb-2">Price After Discount</div>
                        <Input className="w-full" value={ areaAccess.price_after_discount } onChange={ e => setAreaAccess(areaAccess => ({ ...areaAccess, price_after_discount: e.target.value })) } placeholder={ `Auto generate` } />
                    </div>
                    <div className="flex gap-4 mt-5">
                        <button className="bg-green-500 py-3 w-full md:w-[180px] text-white rounded">Save</button>
                        <Link to={ `${config.pathPrefix}area-access` } replace className="bg-gray-200 py-3 w-full md:w-[180px] text-white rounded text-center">Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
