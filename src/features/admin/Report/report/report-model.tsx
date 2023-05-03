import { config } from "@common/utils";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
export function useReport() {
    let reportRepo = new ReportApiRepository();
    const [id, setId] = useState<string>("");
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const [pic, setPic] = useState<Pic[]>([]);
    const [exportDate, setExportDate] = useState({
        dateFrom: "",
        dateTo: "",
    });
    const [report, setReport] = useState<PaginatedData<Report>>(
        PaginatedData.create({
            page: 1,
            limit: 10,
            lastPage: 1,
            data: [],
        })
    );
    const [reportParam, setReportParam] = useState({
        pic: "",
        judgement: "",
        q: "",
        dateFrom: new Date(),
        dateTo: new Date(),
    });
    const [exportModalShow, setExportModalShow] = useState(false);
    const fetchReport = () => {
        reportRepo
            .get({
                pic: reportParam.pic,
                judgement: reportParam.judgement,
                q: reportParam.q,
                page: 1,
                limit: 10,
            })
            .then((result) => setReport(result));
    };
    const fetchPic = () => {
        reportRepo.getPic().then((res) => setPic(res));
    };
    const onReportParamChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        setReportParam((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onDetail = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: Report["id"]
    ) => {
        e.preventDefault();
        navigate(`${config.pathPrefix}report/${id}/detail`);
    };
    const onDownload = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: Report["id"]
    ) => {
        e.preventDefault();
        setId(id);
        setExportModalShow(true);
    };
    const onExport = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setExportModalShow(false);
    };
    const onCancelExport = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setExportModalShow(false);
        setId("");
    };

    const exportHandleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExportDate((prevState) => {
            const duplicate = { ...prevState, [e.target.name]: e.target.value };
            return duplicate;
        });
    };

    const buttonExportModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        reportRepo.getRepotForDownload(id, exportDate).then((result) => {
            console.log(result);
            const worksheet = XLSX.utils.json_to_sheet(result);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
            XLSX.writeFile(workbook, "DataSheet.xlsx");
            console.log(tableRef.current);
            setExportModalShow(false);
            setId("");
        });
    };

    useEffect(() => {
        fetchPic();
    }, []);
    useEffect(() => {
        fetchReport();
    }, [reportParam]);
    return {
        report,
        reportParam,
        pic,
        exportModalShow,
        exportDate,
        tableRef,
        onReportParamChange,
        onDetail,
        onDownload,
        onExport,
        onCancelExport,
        exportHandleForm,
        buttonExportModal,
    };
}
