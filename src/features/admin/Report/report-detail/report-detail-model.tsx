import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { PartApiRepository } from "@data/api/part-api-repository";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { Part } from "@domain/models/part";
import { Pic } from "@domain/models/pic";
import { Report } from "@domain/models/report";
import { ReportRepository } from "@domain/repositories/report-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useReportDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [DownloadModalShow, setDownloadModalShow] = useState(false);
  const reportRepo = new ReportApiRepository();
  const partRepo = new PartApiRepository();
  const [part, setPart] = useState<Part>(
    Part.create({
      custItemId: "",
      partCode: "",
      partName: "",
      oldPartNumber: "",
      itemGroupCode: "",
      itemGroupName: "",
      customerModel: "",
      customer: "",
      material: "",
      materialColor: "",
      customerModelGroup: "",
      unitCd: "",
      materialDetails: "",
      productWeight: 0,
      customerModelId: "",
      customerId: "",
      customerModelGroupId: "",
      checked: false,
    })
  );
  const [pic, setPic] = useState<Pic[]>([]);
  const [reportDetail, setReportDetail] = useState<PaginatedData<Report>>(
    PaginatedData.create({
      page: 1,
      limit: 10,
      lastPage: 1,
      totalRow: 0,
      data: [],
    })
  );

  const [downoladParam, setDowloadParams] = useState({
    dateFrom: "",
    dateTo: "",
  });

  const [reportParam, setReportParam] = useState({
    page: 1,
    limit: 10,
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
    navigate(`${config.pathPrefix}daily-progress-check/${id}/detail`, {
      state: "report",
    });
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
      console.log(result);
      setDownloadModalShow(false);
    });
  };

  const fetchPic = () => {
    reportRepo.getPic().then((result) => setPic(result));
  };
  const handleParams = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setReportParam((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const fetchDetailPart = () => {
    partRepo.show(id).then((result) => setPart(result));
  };
  const handlePage = (page: number) => {
    setReportParam((prev) => {
      return {
        ...prev,
        page: page,
      };
    });
  };
  useEffect(() => {
    fetchPic();
  }, []);
  useEffect(() => {
    fetchData();
  }, [reportParam]);

  useEffect(() => {
    fetchDetailPart();
  }, []);
  return {
    part,
    reportDetail,
    toBack,
    toDetailPart,
    handleParams,
    pic,
    DownloadModalShow,
    reportParam,
    openModalDownload,
    cancelModelDownload,
    onChangeInputDownload,
    downoladParam,
    onDowloadReport,
    handlePage,
  };
}
