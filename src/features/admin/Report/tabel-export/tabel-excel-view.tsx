import LogoTenma from "../../../../assets/tenma.png";
const TableExcel = () => {
    return (
        <>
            <div className=" w-[70%] m-auto  py-12 h-screen left-12  ">
                <div className="flex justify-between items-top">
                    <div className=" flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            PT. TENMA CIKARANG INDONESIA{" "}
                        </h1>
                        <h3 className="text-2xl font-mono">
                            AUTOMATIC MEASUREMENT SYSTEM
                        </h3>
                        <p className="text-left w-1/2 text-gray-700">
                            Blok L8, Delta Silicon Industrial Park, Jl. Kruing 3
                            No.5A, Sukaresmi, Cikarang Sel., Kabupaten Bekasi,
                            Jawa Barat 17550
                        </p>
                    </div>
                    <div>
                        <img src={LogoTenma} alt="logo" width={300} />
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <table className="scale-90 -ml-14">
                        <thead>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    PART NUMBER
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    PART CODE
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    MODEL
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    MACHINE NO.
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>

                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    Part Weight QIS : 21 gr
                                </th>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    INSPECTION DATE
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    -
                                </td>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    Lot Production : 12
                                </th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th
                                    className="border border-gray-200 bg-[#F0F1F3] text-center py-5"
                                    rowSpan={3}
                                >
                                    <p className="text-md rotate-[270deg]">
                                        Type
                                    </p>
                                </th>
                                <th className="w-full border border-gray-200 bg-[#F0F1F3] text-left pl-3">
                                    Cavity
                                </th>
                                <th className="w-full border border-gray-200 bg-[#F0F1F3] text-left pl-3"></th>
                            </tr>
                            <tr>
                                <td
                                    colSpan={4}
                                    className="bg-[#B8B6B6] text-center border border-gray-200 "
                                >
                                    Standart
                                </td>
                                <td
                                    colSpan={2}
                                    className="bg-[#B8B6B6] text-center border border-gray-200"
                                >
                                    Special Accept SUBMIT
                                </td>
                                <td
                                    rowSpan={2}
                                    className="bg-[#B8B6B6] text-center border border-gray-200"
                                >
                                    Tools
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Character
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Nominal
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th
                                    className="border border-gray-200 bg-[#F0F1F3] text-center py-5"
                                    rowSpan={3}
                                >
                                    <p className="text-md rotate-[270deg]">
                                        2D
                                    </p>
                                </th>
                            </tr>
                            {/* 2D */}
                            <tr>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Character
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Nominal
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    tool
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Character
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Nominal
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    tool
                                </td>
                            </tr>
                            {/* 3D */}
                            <tr>
                                <th
                                    className="border border-gray-200 bg-[#F0F1F3] text-center py-5"
                                    rowSpan={3}
                                >
                                    <p className="text-md rotate-[270deg]">
                                        3D
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Character
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Nominal
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    tool
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Character
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Nominal
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Upper
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    Lower
                                </td>
                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                    tool
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <div className="w-full text-center bg-[#F0F1F3] border border-gray-100">
                            <h2 className="text-[#20519F] font-bold">
                                DAILY DIMENSION PART RESULT
                            </h2>
                        </div>
                        {/* one cavity */}

                        <div className="flex">
                            {/* one content */}
                            <div className="bg-[#F0F1F3] w-full">
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">PIC</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">SHIFT</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">No. Label</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">
                                        Terima Sample Jam
                                    </p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">Ukur Sample Jam</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">Weight Part</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td
                                                colSpan={2}
                                                className="bg-sky-400  text-center w-full"
                                            >
                                                Actual Result
                                            </td>
                                            <td
                                                colSpan={2}
                                                className="bg-[#dda557]  text-center w-full"
                                            >
                                                SA Result
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                32
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-[#F0F1F3] w-full">
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">PIC</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">SHIFT</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">No. Label</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">
                                        Terima Sample Jam
                                    </p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">Ukur Sample Jam</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4 gap-1 py-1">
                                    <p className="font-bold">Weight Part</p>
                                    <p className="text-[#20519F]">: BUDI</p>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td
                                                colSpan={2}
                                                className="bg-sky-400  text-center w-full"
                                            >
                                                Actual Result
                                            </td>
                                            <td
                                                colSpan={2}
                                                className="bg-[#dda557]  text-center w-full"
                                            >
                                                SA Result
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                32
                                            </td>
                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                32
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* problem table */}
                <div className="w-full flex justify-between mt-12">
                    <table>
                        <thead>
                            <tr>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Date
                                </th>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    History Problem
                                </th>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Char
                                </th>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Remark
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 bg-white border border-gray-200 px-8">
                                    Date
                                </td>
                                <td className="py-2 bg-white border border-gray-200 px-8">
                                    History Problem
                                </td>
                                <td className="py-2 bg-white border border-gray-200 px-8">
                                    Char
                                </td>
                                <td className="py-2 bg-white border border-gray-200 px-8">
                                    Remark
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Judgement
                                </th>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Checked
                                </th>
                                <th className="py-2 bg-gray-50 border border-gray-200 px-8">
                                    Prepare
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* body */}
                            <tr>
                                <td className="py-2  border-x border-gray-200 px-8">
                                    Judgement
                                </td>
                                <td className="py-2  border-x border-gray-200 px-8">
                                    Checked
                                </td>
                                <td className="py-2  border-x border-gray-200 px-8">
                                    Prepare
                                </td>
                            </tr>
                            {/* footer */}
                            <tr>
                                <td className="py-2  border-b border-l border-gray-200 px-8"></td>
                                <td className="py-2  border border-gray-200 bg-gray-50 px-8"></td>
                                <td className="py-2  border border-gray-200 bg-gray-50 px-8"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TableExcel;
