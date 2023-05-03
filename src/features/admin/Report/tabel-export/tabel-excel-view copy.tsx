const TableExcel = ({ ref }) => {
    return (
        <>
            <table border={1}>
                <tr>
                    <td>PT.TENMA CIKARANG INDONESIA</td>
                </tr>
                <tr>
                    <td>QA DEPARTEMENT</td>
                </tr>

                <tr>
                    <th className="border border-black px-8 h-3"> PART NAME</th>
                    <td className="border border-black px-8 h-3">
                        COVER PRINTER B
                    </td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td
                        className="border border-black px-8 h-3 text-center"
                        colSpan={3}
                    >
                        DAILY DIMENSION PART RESULT
                    </td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3"> PART CODE</th>
                    <td className="border border-black px-8 h-3">
                        1762724-00{" "}
                    </td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3">-</td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">shif</td>
                    <td className="border border-black px-8 h-3">1</td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3"> MODEL</th>
                    <td className="border border-black px-8 h-3">COSTNER</td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">Pic</td>
                    <td className="border border-black px-8 h-3">WINDANI</td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3">
                        {" "}
                        MACHINE NO.
                    </th>
                    <td className="border border-black px-8 h-3">E02</td>
                    <td className="border border-black px-8 h-3">
                        Part weight QIS :
                    </td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3">gr</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">No Label</td>
                    <td className="border border-black px-8 h-3">1</td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3">
                        INSPECTION DATE
                    </th>
                    <td className="border border-black px-8 h-3">03/17/2023</td>
                    <td className="border border-black px-8 h-3">
                        Lot Production :
                    </td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3">gr</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">
                        Terima Sample Jam
                    </td>
                    <td className="border border-black px-8 h-3">SUB 07.25</td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
                {/* tr cavity */}
                <tr>
                    <th className="px-8 h-3">Cavity 1</th>
                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>

                    <td className=" px-8 h-3"></td>
                    <td className=" px-8 h-3"></td>
                    <td className="border border-black px-8 h-3">
                        Terima Sample Jam
                    </td>
                    <td className="border border-black px-8 h-3">SUB 07.25</td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3" colSpan={4}>
                        Standard Measurement
                    </th>
                    <td className="border border-black px-8 h-3" colSpan={2}>
                        Special Accept
                    </td>
                    <td className="border border-black px-8 h-3" rowSpan={2}>
                        Tools
                    </td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">
                        Weight Part
                    </td>
                    <td className="border border-black px-8 h-3">455.5 </td>
                    <td className="border border-black px-8 h-3">gr</td>
                </tr>
                <tr>
                    <th className="border border-black px-8 h-3">Character</th>
                    <td className="border border-black px-8 h-3">Nominal</td>
                    <td className="border border-black px-8 h-3">Upper</td>
                    <td className="border border-black px-8 h-3">Lower</td>
                    <td className="border border-black px-8 h-3">Upper</td>
                    <td className="border border-black px-8 h-3">Lower</td>

                    <td className="border border-black px-8 h-3">-</td>
                    <td className="border border-black px-8 h-3">-</td>
                    <td
                        className="border border-black px-8 h-3 text-center"
                        colSpan={2}
                    >
                        Actual Result
                    </td>
                    <td
                        className="border border-black px-8 h-3 text-center"
                        colSpan={2}
                    >
                        SA Result
                    </td>
                </tr>
                <tr>
                    <td className="border border-black px-8 h-3">Appearance</td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3">GOOG</td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                    <td className="border border-black px-8 h-3"></td>
                </tr>
            </table>
        </>
    );
};

export default TableExcel;
