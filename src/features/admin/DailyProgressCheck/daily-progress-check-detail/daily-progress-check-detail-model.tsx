import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { HistoryApiRepository } from "@data/api/history-api-repository";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { Segment3dApiRepository } from "@data/api/segment-3d-api-repository";
import { ToolApiRepository } from "@data/api/tool-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { History } from "@domain/models/history";
import { IMeasurement, Measurement } from "@domain/models/measurement";
import { Segment } from "@domain/models/segment";
import { Tool } from "@domain/models/tool";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { HistoryRepository } from "@domain/repositories/history-repository";
import { Segment3dRepository } from "@domain/repositories/segment-3d-repository";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function useDailyProgressCheckDetail() {
  const { id = "" } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const toolRepo = new ToolApiRepository();
  const [paramsModal, setParamsModal] = useState({
    segmentIdx: 0,
    measurementIdx: 0,
  });
  const [modalValue, setModalValue] = useState({
    nominal: "",
    nominalValue: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [location, setLocation] = useState(false);
  const [onEditSegment, setOnEditSegment] = useState<boolean>(false);
  const reportRepo = new ReportApiRepository();
  const historyRepo: HistoryRepository = new HistoryApiRepository();
  const dailyProgressCheckRepo = new DailyProgressCheckApiRepository();
  const segmentRepo: Segment3dRepository = new Segment3dApiRepository();
  const [tool, setTool] = useState<Tool[]>([]);
  const [dailyProgressCheck, setDailyProgressCheck] =
    useState<DailyProgressCheck>(
      DailyProgressCheck.create({
        picId: "",
        judgement: "",
        judgement2d: "",
        judgement3d: "",
        updatedAt: undefined,
        partCode: "",
        model: "",
        shift: "",
        has3d: false,
        has2d: false,
        partId: "",
        machineId: "",
        inspectionDate: undefined,
        lotProduction: "",
        labelNo: "",
        acceptSampleTime: "",
        measureSampleTime: "",
        weightPart: 0,
        actWeightPart: 0,
        checked: false,
        checkedBy: "",
      })
    );
  const [segments, setSegments] = useState<Segment[]>([]);
  const [histories, setHistories] = useState<History[]>([]);
  const [deleteSegmentConfirmShow, setDeleteSegmentConfirmShow] =
    useState(false);
  const fetchDetail = () => {
    dailyProgressCheckRepo.detail(id).then((res) => setDailyProgressCheck(res));
  };
  const fetchSegment = () => {
    dailyProgressCheckRepo.get3dSegments(id).then((res) => setSegments(res));
  };
  const fetchSegment2d = () => {
    dailyProgressCheckRepo
      .get2dSegments(id)
      .then((result) => setSegments(result));
  };

  // =====report

  const fetchRepo2d = () => {
    reportRepo.get2dSegments(id).then((result) => {
      setSegments(result);
    });
  };
  const fetchRepo3d = () => {
    reportRepo.get3dSegments(id).then((result) => setSegments(result));
  };

  const fetchDetailReport = () => {
    reportRepo.getpartReportDetail(id).then((result) => {
      setDailyProgressCheck(result);
    });
  };

  // ===========

  const fetchHistory = () => {
    historyRepo.get(id).then((res) => setHistories(res));
  };
  const [toogle, setToogle] = useState<"2d" | "3d">("2d");
  const [confirmDeleteHistoryShow, setConfirmDeleteHistoryShow] =
    useState(false);
  const onToogle = () => {
    setToogle((toogle) => (toogle === "2d" ? "3d" : "2d"));
  };
  const onAddSegment = () => {
    if (toogle === "3d") {
      navigate(`${config.pathPrefix}daily-progress-check/${id}/create-segment`);
    } else {
      navigate(
        `${config.pathPrefix}daily-progress-check/${id}/add-segment-data-2d`
      );
    }
  };
  const onAddHistory = () => {
    navigate(`${config.pathPrefix}daily-progress-check/${id}/history/create`);
  };
  const onDownloadReport = () => {};
  const onBack = () => {
    navigate(-1);
  };
  const onDeleteHistory = (
    e: React.MouseEvent<HTMLButtonElement>,
    history: History
  ) => {
    e.preventDefault();
    setHistories((histories) =>
      histories.map((item) => {
        const newItem = item.duplicate();
        item.id == history.id ? newItem.check() : newItem.uncheck();
        return newItem;
      })
    );
    setConfirmDeleteHistoryShow(true);
  };
  const onConfirmDeleteHistory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    historyRepo
      .destroy(id, histories.find((item) => item.checked).id)
      .then((res) => {
        setHistories((histories) => histories.filter((item) => !item.checked));
        setConfirmDeleteHistoryShow(false);
      });
  };
  const onEditHistory = (
    e: React.MouseEvent<HTMLButtonElement>,
    history: History
  ) => {
    navigate(
      `${config.pathPrefix}daily-progress-check/${id}/history/${history.id}/edit`
    );
  };
  const toEditSegment2d = () => {
    navigate(
      `${config.pathPrefix}daily-progress-check/${id}/edit-segment-data-2d`,
      {
        state: "edit",
      }
    );
  };
  const deleteSegment = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: Segment["id"]
  ) => {
    setSegments((prevState) =>
      prevState.map((item) =>
        item.id == id
          ? Segment.create({
              ...item.unmarshall(),
              checked: true,
            })
          : Segment.create({
              ...item.unmarshall(),
              checked: false,
            })
      )
    );
    setDeleteSegmentConfirmShow(true);
  };

  const cancelModelDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteSegmentConfirmShow(false);
  };

  const confirmDeleteSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
    segmentRepo
      .destroy(id, segments.find((item) => item.checked).id)
      .then(() => {
        setDeleteSegmentConfirmShow(false);
        setSegments((prevState) => prevState.filter((item) => !item.checked));
      });
    setDeleteSegmentConfirmShow(false);
  };

  const handelChangeJudgment = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (toogle == "2d") {
      setDailyProgressCheck((prev) => {
        const data = prev.duplicate();
        data.judgement2d = e.target.value;
        return DailyProgressCheck.create(data);
      });
      await dailyProgressCheckRepo.updateJudgmen(id, "2d", e.target.value);
    } else {
      setDailyProgressCheck((prev) => {
        const data = prev.duplicate();
        data.judgement3d = e.target.value;
        return DailyProgressCheck.create(data);
      });
      await dailyProgressCheckRepo.updateJudgmen(id, "3d", e.target.value);
    }
  };

  const editSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOnEditSegment(true);
  };
  const saveSegment = async (
    e: React.MouseEvent<HTMLButtonElement>,
    cavityID: string
  ) => {
    e.preventDefault();
    console.log(segments);
    const data = segments
      .find((item) => item.id === cavityID)
      .pacSegments.map((item: Measurement) => {
        console.log(item);
        return Measurement.create({ ...item.unmarshall() });
      });

    await dailyProgressCheckRepo.updateCavity3D(id, cavityID, data);
    setOnEditSegment(false);
  };

  const handleEditSegment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    iSegment: number,
    iMeas: number
  ) => {
    setSegments((prev) => {
      const data = prev.map((el, i) => {
        if (iSegment == i) {
          el.pacSegments.map((item, ex) => {
            if (iMeas === ex) {
              if (e.target.name == "tool") {
                const data = tool.find((item) => item.id === e.target.value);
                item["tool"] = data;
              } else item[e.target.name] = e.target.value;
            }
            return item;
          });
        }
        return el;
      });

      return data;
    });
  };

  const uploadComparisson = (
    e: React.ChangeEvent<HTMLInputElement>,
    cavityID: string
  ) => {
    console.log(cavityID);
    const form = new FormData();
    form.append("file", e.target.files[0]);

    dailyProgressCheckRepo
      .uploadComparisson(id, cavityID, form)
      .then(() => {
        fetchSegment();
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const deleteComparisson = (
    e: React.MouseEvent<HTMLButtonElement>,
    cavityId: string,
    comparisonId: string
  ) => {
    e.preventDefault();
    console.log("comparisson id", comparisonId);
    dailyProgressCheckRepo
      .destroyComparisson(id, cavityId, comparisonId)
      .then(() => {
        fetchSegment();
      });
  };

  const cancelConfirmModal = () => {
    setDeleteSegmentConfirmShow(!deleteSegmentConfirmShow);
  };

  const addColumn = (
    e: React.MouseEvent<HTMLButtonElement>,
    cavityId: string
  ) => {
    e.preventDefault();
    setSegments((prev) => {
      return prev.map((item: Segment) => {
        const data = Segment.create({
          ...item.unmarshall(),
        });

        data.pushNewPacSegment(
          Measurement.create({
            character: "",
            nominal: "",
            nominalValue: "",
            upper: 0,
            lower: 0,
            saUpper: 0,
            saLower: 0,
            tool: null,
            result: "",
            judgement: "",
            saResult: "",
            saJudgement: "",
            checked: false,
          })
        );

        return data;
      });
    });
  };

  const openModalNominal = (segmentIdx: number, measurementIdx: number) => {
    setParamsModal({
      segmentIdx,
      measurementIdx,
    });
    setOpenModal(true);
  };

  const cancelModalNominal = () => {
    setParamsModal({
      segmentIdx: 0,
      measurementIdx: 0,
    });
    setModalValue({
      nominal: "",
      nominalValue: "",
    });
    setOpenModal(false);
  };

  const changeModalValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const saveModalNominal = () => {
    setSegments((prev) => {
      const data = prev.map((el, i) => {
        if (paramsModal.segmentIdx == i) {
          el.pacSegments.map((item, ex) => {
            if (paramsModal.measurementIdx === ex) {
              item["nominal"] = modalValue.nominal;
              item["nominalValue"] = modalValue.nominalValue;
            }
            return item;
          });
        }
        return el;
      });

      return data;
    });

    setModalValue({
      nominal: "",
      nominalValue: "",
    });
    setParamsModal({
      segmentIdx: 0,
      measurementIdx: 0,
    });
    setOpenModal(false);
  };

  useEffect(() => {
    if (onEditSegment) {
      toolRepo.getTools().then((result) => {
        setTool(result);
      });
    }
  }, [onEditSegment]);

  useEffect(() => {
    if (state) {
      setLocation(true);
      fetchDetailReport();
      if (toogle === "3d") {
        fetchRepo3d();
      } else {
        fetchRepo2d();
      }
    } else {
      fetchDetail();
      if (toogle === "3d") {
        fetchSegment();
      } else {
        fetchSegment2d();
      }
      fetchHistory();
    }
  }, [id, toogle]);
  return {
    tool,
    saveModalNominal,
    changeModalValue,
    paramsModal,
    openModalNominal,
    cancelModalNominal,
    state,
    dailyProgressCheck,
    segments,
    histories,
    toogle,
    confirmDeleteHistoryShow,
    openModal,
    deleteComparisson,
    setConfirmDeleteHistoryShow,
    onDeleteHistory,
    onConfirmDeleteHistory,
    onToogle,
    onAddHistory,
    onAddSegment,
    onDownloadReport,
    onBack,
    onEditHistory,
    toEditSegment2d,
    deleteSegmentConfirmShow,
    setDeleteSegmentConfirmShow,
    deleteSegment,
    confirmDeleteSegment,
    handelChangeJudgment,
    location,
    editSegment,
    onEditSegment,
    saveSegment,
    handleEditSegment,
    uploadComparisson,
    cancelModelDelete,
    cancelConfirmModal,
    addColumn,
    modalValue,
  };
}

