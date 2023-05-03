const TableExcel = ({ ref }) => {
    return (
        <>
            <div ref={ref} className="flex gap-8">
                <div>
                    <table>
                        <tr>
                            <th>PT.TENMA CIKARANG INDONESIA</th>
                        </tr>
                        <tr>
                            <td>QA DEPARTEMENT</td>
                        </tr>
                        <tr>
                            <td>-</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td className="border-2 border-gray-50 pr-8 pl-2 font-bold">
                                PART NAME
                            </td>
                            <td
                                className="border-2 border-gray-50 pr-8 pl-2"
                                colSpan={2}
                            >
                                COVER PRINTER B
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                        </tr>
                        <tr>
                            <td className="border-2 border-gray-50 pr-8 pl-2 font-bold">
                                PART CODE
                            </td>
                            <td
                                className="border-2 border-gray-50 pr-8 pl-2"
                                colSpan={2}
                            >
                                1762724-00
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                        </tr>
                        <tr>
                            <td className="border-2 border-gray-50 pr-8 pl-2 font-bold">
                                MODEL
                            </td>
                            <td
                                className="border-2 border-gray-50 pr-8 pl-2"
                                colSpan={2}
                            >
                                COSTNER
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                        </tr>
                        <tr>
                            <td className="border-2 border-gray-50 pr-8 pl-2 font-bold">
                                MACHINE NO.
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2">
                                E02
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2 ">
                                Part weight QIS :
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                            <td className="border-2 border-gray-50 pr-8 pl-2">
                                gr
                            </td>
                        </tr>
                        <tr>
                            <td className="border-2 border-gray-50 pr-8 pl-2 font-bold">
                                INSPECTION DATE
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2">
                                03/17/2023
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2">
                                Lot Production :{" "}
                            </td>
                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>

                            <td className="border-2 border-gray-50 pr-8 pl-2"></td>
                        </tr>
                    </table>
                    {/* tabel cavity */}
                    <table>
                        <thead>
                            <tr>
                                <th>Cavity 1</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th
                                    colSpan={5}
                                    className="text-center bg-gray-400 py-2 px-3 border border-white"
                                >
                                    Standard
                                </th>
                                <th
                                    colSpan={2}
                                    className="text-center bg-gray-400 py-2 px-3 border border-white"
                                >
                                    Special Acept
                                </th>
                                <th
                                    rowSpan={2}
                                    className="text-center bg-gray-400 py-2 px-3 border border-white"
                                >
                                    Tools
                                </th>
                            </tr>
                            <tr>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Character
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Nominal
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Upper
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Lower
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Upper
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    Lower
                                </th>
                                <th className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    upper
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    APP
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    -
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    GOOD
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    -
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    -
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    -
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    -
                                </td>
                                <td className="text-center bg-gray-50 px-8 py-2 border border-white">
                                    E
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="w-80">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="w-full px-3 py-2 border-y-2 border-gray-50 ">
                                        shift
                                    </td>
                                    <td className="w-full px-3 py-2 border-y-2 border-gray-50 "></td>
                                    <td className="w-full px-3 py-2 border-y-2 border-gray-50 ">
                                        <div className="w-7 h-7 flex items-center justify-center font-sm text-center border border-black rounded-full">
                                            1
                                        </div>
                                    </td>
                                    <td className="w-full px-3 py-2 border-y-2 border-gray-50 "></td>
                                </tr>
                                <tr>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        PIC
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        FAJAR
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                </tr>
                                <tr>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        Terima Sample Jam
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        19:20
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                </tr>
                                <tr>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        Ukur Sample Jam
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        19:22
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                </tr>
                                <tr>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        Weight Part
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                    <td className="w-full px-3 py-2 border border-gray-50 ">
                                        1.9
                                    </td>
                                    <td className="w-full px-3 py-2 border border-gray-50 "></td>
                                </tr>
                                <tr>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-50"
                                    >
                                        Actual Result
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-50"
                                    >
                                        SA Result
                                    </th>
                                </tr>
                                <tr>
                                    <td className="border border-gray-50">
                                        GOOG
                                    </td>
                                    <td className="border border-gray-50"></td>
                                    <td className="border border-gray-50"></td>
                                    <td className="border border-gray-50"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableExcel;
