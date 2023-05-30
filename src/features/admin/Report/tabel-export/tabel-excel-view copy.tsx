import moment from "moment";
import LogoTenma from "../../../../assets/tenma.png";

const TableExcelCopy = ({ datas }) => {
    return (
        <>
            <div className="w-[80%] m-auto h-screen ">
                <div className="flex w-full pt-8 justify-between items-center">
                    <div className="w-[40%]">
                        <h1 className="text-4xl font-semibold">
                            PT. TENMA CIKARANG INDONESIA{" "}
                        </h1>
                        <h5 className="text-xl font-semibold">
                            AUTOMATIC MEASUREMENT SYSTEM
                        </h5>
                        <p className="text-[#514E4E] font-sans">
                            Blok L8, Delta Silicon Industrial Park, Jl. Kruing 3
                            No.5A, Sukaresmi, Cikarang Sel., Kabupaten Bekasi,
                            Jawa Barat 17550
                        </p>
                    </div>

                    <img src={LogoTenma} alt="logo tenma" width={350} />
                </div>

                <main className="flex justify-between">
                    <section className="w-1/2">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="border border-gray-100 bg-gray-50 text-start py-2 px-4">
                                        Part Name
                                    </th>
                                    <td className="border border-gray-100 bg-gray-50 text-start py-2 px-4 text-blue-500 ">
                                        {datas?.part?.part_name}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border border-gray-100 bg-gray-50 text-start py-2 px-4">
                                        PART CODE
                                    </th>
                                    <td className="border border-gray-100 bg-gray-50 text-start py-2 px-4 text-blue-500 ">
                                        {datas?.part?.part_cd}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border border-gray-100 bg-gray-50 text-start py-2 px-4">
                                        MODEL
                                    </th>
                                    <td className="border border-gray-100 bg-gray-50 text-start py-2 px-4 text-blue-500 ">
                                        {datas?.part?.customer_model?.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border border-gray-100 bg-gray-50 text-start py-2 px-4">
                                        MACHINE NO.
                                    </th>
                                    <td className="border border-gray-100 bg-gray-50 text-start text-blue-500 flex  ">
                                        <div className="px-4 py-2 w-1/3 border-r border-gray-100">
                                            <p className="text-blue-500">
                                                {datas?.machine?.no}
                                            </p>
                                        </div>
                                        <div className="px-4 py-2">
                                            <h1 className="font-semibold text-black">
                                                Part Weight QIS :{" "}
                                                {datas?.part_weight_qis} gr
                                            </h1>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border border-gray-100 bg-gray-50 text-start py-2 px-4">
                                        INSPECTION DATE
                                    </th>
                                    <td className="border border-gray-100 bg-gray-50 text-start text-blue-500 flex  ">
                                        <div className="px-4 py-2 w-1/3 border-r border-gray-100">
                                            <p className="text-blue-500">
                                                {datas?.created_at &&
                                                    moment(
                                                        datas?.created_at
                                                    ).format("L")}
                                            </p>
                                        </div>
                                        <div className="px-4 py-2">
                                            <h1 className="font-semibold text-black">
                                                Lot Production :{" "}
                                                {datas?.lot_production}
                                            </h1>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <main>
                            <table>
                                <thead>
                                    <tr>
                                        <th
                                            rowSpan={4}
                                            className="border border-gray-100 bg-gray-50 text-center px-2"
                                        >
                                            Type
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="w-full border-gray-100 bg-gray-50 px-5 text-start"
                                            colSpan={7}
                                        >
                                            cavity 1
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={4}
                                            className="text-center py-2 border border-gray-100 bg-[#B8B6B6]"
                                        >
                                            Standard
                                        </th>
                                        <th
                                            colSpan={2}
                                            className="border border-gray-100 bg-[#B8B6B6] py-2 text-center"
                                        >
                                            Standard Accept SUBMIT
                                        </th>
                                        <th
                                            className="text-center border border-gray-100 bg-[#B8B6B6]"
                                            rowSpan={2}
                                        >
                                            Tools
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Character
                                        </th>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Nominal
                                        </th>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Upper
                                        </th>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Lower
                                        </th>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Upper
                                        </th>
                                        <th className="border border-gray-100 bg-gray-50 text-center py-2 px-3">
                                            Lower
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            rowSpan={4}
                                            className="border border-gray-100 px-2 bg-[#E7F8F0] text-center"
                                        >
                                            3D
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            adata
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                        <td className="border border-gray-100  px-2 py-3 text-center">
                                            data
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>
                    </section>
                    <section></section>
                </main>
            </div>
        </>
    );
};

export default TableExcelCopy;
