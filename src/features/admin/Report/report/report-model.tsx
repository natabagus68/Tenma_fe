import { config } from "@common/utils";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useReport() {
    let reportRepo: ReportRepository = new ReportApiRepository();
    const navigate = useNavigate();
    const [pic, setPic] = useState<Pic[]>([]);
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
        setExportModalShow(true);
    };
    const onExport = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setExportModalShow(false);
    };
    const onCancelExport = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setExportModalShow(false);
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
        onReportParamChange,
        onDetail,
        onDownload,
        onExport,
        onCancelExport,
    };
}
