import { config } from "@common/utils";
import { PaginatedData } from "@domain/models/paginated-data";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useReport() {
    let reportRepo: ReportRepository;
    const navigate = useNavigate();
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
    const fetchReport = () => {
        reportRepo.get({
            pic: reportParam.pic,
            judgement: reportParam.judgement,
            q: reportParam.q,
        });
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
    const onDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
}
