import { config } from "@common/utils";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export function useReport() {
  const [count, setCount] = useState(0);
  const reportRepo = new ReportApiRepository();
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();
  const tableRef = useRef();
  const [pic, setPic] = useState<Pic[]>([]);
  const [exportDate, setExportDate] = useState({
    dateFrom: "",
    dateTo: "",
  });

  const [pdfData, setPdfData] = useState([]);
  const [report, setReport] = useState<PaginatedData<Report>>(
    PaginatedData.create({
      page: 1,
      limit: 10,
      lastPage: 1,
      totalRow: 0,
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
    setExportDate({
      dateFrom: "",
      dateTo: "",
    });
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
      setPdfData(result);
      setExportModalShow(false);
      setId("");
      setExportDate({
        dateFrom: "",
        dateTo: "",
      });
      downloadToPDF();
    });
  };

  const handlePagination = (value: number) => {
    setReport((prev) => {
      const data = PaginatedData.create({
        ...prev.unmarshall(),
        page: value,
      });
      return data;
    });
  };
  let i = 0;
  const downloadToPDF = () => {
    if (pdfData) {
      setTimeout(() => {
        let html = window.document.querySelectorAll(".table-export");
        html.forEach((e, i) => {
          e.setAttribute("key", `${i}`);
          window.document.body.innerHTML = e.outerHTML;
          window.print();
        });
      }, 500);
    }
  };

  useEffect(() => {
    fetchPic();
  }, []);
  useEffect(() => {
    fetchReport();
  }, [reportParam, report.page]);
  return {
    count,
    report,
    reportParam,
    pic,
    exportModalShow,
    exportDate,
    tableRef,
    pdfData,
    setCount,
    onReportParamChange,
    onDetail,
    onDownload,
    onExport,
    onCancelExport,
    exportHandleForm,
    buttonExportModal,
    handlePagination,
    // downloadToPDF,
  };
}
