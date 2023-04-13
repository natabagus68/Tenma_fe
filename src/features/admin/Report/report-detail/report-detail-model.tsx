import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import XLSX from "xlsx";
export default function useReportDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [DownloadModalShow, setDownloadModalShow] = useState(false);
    const reportRepo = new ReportApiRepository();
    const [reportDetail, setReportDetail] = useState<PaginatedData<Report>>(
        PaginatedData.create({
            page: 1,
            limit: 10,
            lastPage: 1,
            data: [],
        })
    );

    const [downoladParam, setDowloadParams] = useState({
        dateFrom: "",
        dateTo: "",
    });

    const [reportParam, setReportParam] = useState({
        page: reportDetail.page,
        limit: reportDetail.limit,
        q: "",
        pic: "",
        judgement: "",
        search: "",
        dateFrom: new Date(),
        dateTo: new Date(),
    });

    const fetchData = () => {
        reportRepo
            .partDetail(id, reportParam)
            .then((result) => setReportDetail(result));
    };

    const toDetailPart = (id: string) => {
        navigate(`${config.pathPrefix}daily-progress-check/${id}/detail`);
    };
    const toBack = () => {
        navigate("../");
    };

    const openModalDownload = () => {
        setDownloadModalShow(true);
    };
    const cancelModelDownload = () => {
        setDownloadModalShow(false);
        setDowloadParams({
            dateFrom: "",
            dateTo: "",
        });
    };

    const onChangeInputDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDowloadParams((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onDowloadReport = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        reportRepo.getRepotForDownload(id, downoladParam).then((result) => {
            // const json = JSON.parse(result);
            // const workbook = XLSX.utils.book_new();
            // const worksheet = XLSX.utils.json_to_sheet(json);
            // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            // XLSX.writeFile(workbook, "data.xlsx");
            console.log(result);
            setDownloadModalShow(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, [reportParam]);

    return {
        reportDetail,
        toBack,
        toDetailPart,
        DownloadModalShow,
        openModalDownload,
        cancelModelDownload,
        onChangeInputDownload,
        downoladParam,
        onDowloadReport,
    };
}
