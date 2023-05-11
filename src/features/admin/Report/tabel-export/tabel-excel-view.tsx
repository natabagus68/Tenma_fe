import moment from "moment";
import LogoTenma from "../../../../assets/tenma.png";
const TableExcel = ({ datas }) => {
    return (
        <div>
            <div className=" w-[90%] m-auto  py-12 h-screen left-12  ">
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
                                    PART NAME
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    {datas.part.part_name}
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 pr-52 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    PART CODE
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    {datas.part.part_cd}
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 pr-52 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    MODEL
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    {datas.part?.customer_model?.name || ""}
                                </td>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 pr-52 border border-gray-200">
                                    -
                                </td>
                            </tr>
                            <tr>
                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    MACHINE NO.
                                </th>
                                <td className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    {datas.machine?.no || ""}
                                </td>

                                <th className="px-2 py-2 bg-[#F0F1F3]  text-sm text-left w-80 border border-gray-200">
                                    Part Weight QIS : {datas.part_weight_qis} gr
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
                                    Lot Production : {datas.lot_production}
                                </th>
                            </tr>
                        </thead>

                        {/* cavity */}
                        {datas.cavities.map((item) => {
                            return (
                                <div key={item.id}>
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
                                                {item.name}
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
                                                rowSpan={
                                                    item.cavity_type == "2D" &&
                                                    item.std_measurement
                                                        .special_accept_segments
                                                        .length + 1
                                                }
                                            >
                                                <p className="text-md rotate-[270deg]">
                                                    2D
                                                </p>
                                            </th>
                                        </tr>
                                        {/* 2D */}
                                        {item.cavity_type === "2D" &&
                                            item.std_measurement.special_accept_segments.map(
                                                (el) => {
                                                    return (
                                                        <tr key={el.id}>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {el.character}
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {el.nominal}
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {
                                                                    el.standard_upper
                                                                }
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {
                                                                    el.standard_lower
                                                                }
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {/* {el.cavity_results[0].} */}
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                0
                                                            </td>
                                                            <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                {el?.tool?.name}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}

                                        <tr>
                                            <th
                                                className="border border-gray-200 bg-[#F0F1F3] text-center py-5"
                                                rowSpan={
                                                    item.cavity_type == "3D" &&
                                                    item.std_measurement
                                                        .special_accept_segments
                                                        .length + 1
                                                }
                                            >
                                                <p className="text-md rotate-[270deg]">
                                                    3D
                                                </p>
                                            </th>
                                        </tr>
                                        {item.cavity_type === "3D" &&
                                            item.std_measurement.special_accept_segments.map(
                                                (el) => {
                                                    return (
                                                        <>
                                                            <tr key={el.id}>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    {
                                                                        el.character
                                                                    }
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    {el.nominal}
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    {
                                                                        el.standard_upper
                                                                    }
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    {
                                                                        el.standard_lower
                                                                    }
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    Upper
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    Lower
                                                                </td>
                                                                <td className="bg-[#ffff] text-left px-4 border border-gray-200">
                                                                    {
                                                                        el.tool
                                                                            .name
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </div>
                            );
                        })}
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
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">PIC</p>
                                    <p className="text-[#20519F]">
                                        : {datas.pic}
                                    </p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">SHIFT</p>
                                    <p className="text-[#20519F]">
                                        : {datas.shift}
                                    </p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">No. Label</p>
                                    <p className="text-[#20519F]">
                                        : {datas.label_no}
                                    </p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">
                                        Terima Sample Jam
                                    </p>
                                    <p className="text-[#20519F]">
                                        :{" "}
                                        {moment(
                                            datas.accept_sample_time
                                        ).format("LT")}
                                    </p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">Ukur Sample Jam</p>
                                    <p className="text-[#20519F]">
                                        :{" "}
                                        {moment(
                                            datas.measure_sample_time
                                        ).format("LT")}
                                    </p>
                                </div>
                                <div className="flex justify-between border border-gray-100 w-full px-4  py-1">
                                    <p className="font-bold">Weight Part</p>
                                    <p className="text-[#20519F]">
                                        : {datas.actual_part_weight} gr
                                    </p>
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
                                        {datas.cavities.map((el) => {
                                            el.std_measurement.special_accept_segments.map(
                                                (item) => {
                                                    return (
                                                        <tr key={el.id}>
                                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                                {
                                                                    item
                                                                        .cavity_results
                                                                        .actual_result
                                                                }
                                                            </td>
                                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                                {
                                                                    item
                                                                        .cavity_results
                                                                        .actual_result_judgement
                                                                }
                                                            </td>
                                                            <td className="px-2 py-2 border border-gray-200 text-center">
                                                                {
                                                                    item
                                                                        .cavity_results
                                                                        .sa_result
                                                                }
                                                            </td>
                                                            <td className="px-2 py-2 border border-gray-200 bg-white text-[#20519F] text-center">
                                                                {
                                                                    item
                                                                        .cavity_results
                                                                        .sa_result_judgement
                                                                }
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            );
                                        })}
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
                            {datas.progress_check_histories.map((el) => {
                                return (
                                    <tr key={el.id}>
                                        <td className="py-2 bg-white border border-gray-200 px-8">
                                            {el.date}
                                        </td>
                                        <td className="py-2 bg-white border border-gray-200 px-8">
                                            {el.problem}
                                        </td>
                                        <td className="py-2 bg-white border border-gray-200 px-8">
                                            {el.char}
                                        </td>
                                        <td className="py-2 bg-white border border-gray-200 px-8">
                                            {el.remark}
                                        </td>
                                    </tr>
                                );
                            })}
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
        </div>
    );
};

export default TableExcel;
