import moment from "moment";
import LogoTenma from "../../../../assets/tenma.png";

const TableExcel = ({ datas }) => {
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

                <main className="flex justify-between gap-3">
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
                            {datas?.cavities?.map((item, i) => {
                                return (
                                    <table className={i > 0 ? "mt-8" : ""}>
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
                                                    className="w-full border border-gray-100 bg-gray-50 px-5 text-start py-3"
                                                    colSpan={7}
                                                >
                                                    {item.name}
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
                                            {item?.measure_info.map((el) => {
                                                if (el.cavity_type === "3D")
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td
                                                                    rowSpan={
                                                                        el
                                                                            .std_measurement
                                                                            .special_accept_segments
                                                                            .length +
                                                                        1
                                                                    }
                                                                    className="border border-gray-100 px-2 bg-[#E7F8F0] text-center"
                                                                >
                                                                    3D
                                                                </td>
                                                            </tr>
                                                            {el.std_measurement.special_accept_segments.map(
                                                                (data) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.character
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.nominal_value
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.standard_upper
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.standard_lower
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.sa_upper
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.sa_lower
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data
                                                                                        ?.tool
                                                                                        ?.name
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                            )}
                                                        </>
                                                    );
                                            })}
                                            {item?.measure_info.map((el) => {
                                                if (el.cavity_type === "2D")
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td
                                                                    rowSpan={
                                                                        el
                                                                            .std_measurement
                                                                            .special_accept_segments
                                                                            .length +
                                                                        1
                                                                    }
                                                                    className="border border-gray-100 px-2 bg-[#E9EEF5] text-center"
                                                                >
                                                                    2D
                                                                </td>
                                                            </tr>
                                                            {el.std_measurement.special_accept_segments.map(
                                                                (data) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.character
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.nominal_value
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.standard_upper
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.standard_lower
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.sa_upper
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data?.sa_lower
                                                                                }
                                                                            </td>
                                                                            <td className="border border-gray-100  px-2 py-3 text-center">
                                                                                {
                                                                                    data
                                                                                        ?.tool
                                                                                        ?.name
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                            )}
                                                        </>
                                                    );
                                            })}
                                        </tbody>
                                    </table>
                                );
                            })}
                        </main>
                    </section>
                    <section className="w-1/2">
                        <main className="w-ful flex flex-col">
                            <table className="flex-1">
                                <thead>
                                    <tr>
                                        <th
                                            className="text-center py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                            colSpan={8}
                                        >
                                            DAILY DIMENSION PART RESULT
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            PIC
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : BUDI
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            SHIWFT
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : 1
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            No. Label
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : 1
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            Terima Sample Jam
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : 15:23
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            Ukur Sample Jam
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : 14:50
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-start py-2 border border-gray-100 bg-gray-50 w-1/3 px-3"
                                        >
                                            Weight Part
                                        </th>
                                        <td
                                            colSpan={2}
                                            className="text-start px-3 py-2 border border-gray-100 bg-gray-50 text-blue-500"
                                        >
                                            : 317 gr
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="text-center w-1/2 border border-gray-100 py-2 bg-[#E8F8FB]"
                                        >
                                            Actual Result
                                        </th>
                                        <th
                                            colSpan={2}
                                            className="text-center w-1/2 border border-gray-100 py-2 bg-[#FEF4E6]"
                                        >
                                            SA Result
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.cavities.map((item) => {
                                        return item.measure_info.map((el) => {
                                            return el.std_measurement.special_accept_segments.map(
                                                (ex) => {
                                                    console.log(ex);
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="py-2 px-3 text-center border border-gray-100S">
                                                                    {
                                                                        ex
                                                                            .cavity_results
                                                                            .actual_result
                                                                    }
                                                                </td>
                                                                <td className="py-2 px-3 text-center border border-gray-100S">
                                                                    {
                                                                        ex
                                                                            .cavity_results
                                                                            .actual_result_judgement
                                                                    }
                                                                </td>
                                                                <td className="py-2 px-3 text-center border border-gray-100S">
                                                                    {
                                                                        ex
                                                                            .cavity_results
                                                                            .sa_result
                                                                    }
                                                                </td>
                                                                <td className="py-2 px-3 text-center border border-gray-100S">
                                                                    {
                                                                        ex
                                                                            .cavity_results
                                                                            .sa_result_judgement
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>
                                                    );
                                                }
                                            );
                                        });
                                    })}
                                </tbody>
                            </table>
                        </main>
                    </section>
                </main>

                <section className="flex justify-between mt-8 gap-3">
                    <table className="w-1/2">
                        <thead>
                            <tr>
                                <th className="py-2 px-3 text-center border border-gray-200 bg-gray-50">
                                    Date
                                </th>
                                <th className="py-2 px-3 text-center border border-gray-200 bg-gray-50">
                                    History Problem
                                </th>
                                <th className="py-2 px-3 text-center border border-gray-200 bg-gray-50">
                                    Char
                                </th>
                                <th className="py-2 px-3 text-center border border-gray-200 bg-gray-50">
                                    Remark
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {datas?.progress_check_histories.map((item) => {
                                return (
                                    <tr>
                                        <td className="py-2 px-3 text-center border border-gray-200">
                                            {item.date}
                                        </td>
                                        <td className="py-2 px-3 text-center border border-gray-200">
                                            {item.problem}
                                        </td>
                                        <td className="py-2 px-3 text-center border border-gray-200">
                                            {item.char}
                                        </td>
                                        <td className="py-2 px-3 text-center border border-gray-200">
                                            {item.remark}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <table className="w-1/2">
                        <thead>
                            <tr>
                                <th className="border border-gray-100 bg-gray-50 py-2 px-3 text-center">
                                    Judgement
                                </th>
                                <th className="border border-gray-100 bg-gray-50 py-2 px-3 text-center">
                                    Checked
                                </th>
                                <th className="border border-gray-100 bg-gray-50 py-2 px-3 text-center">
                                    Prepare
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-100 py-2 px-3 text-center">
                                    Judgement
                                </td>
                                <td className="border border-gray-100 py-2 px-3 text-center">
                                    Checked
                                </td>
                                <td className="border border-gray-100 py-2 px-3 text-center">
                                    Prepare
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
};

export default TableExcel;
