import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { PartApiRepository } from "@data/api/part-api-repository";
import { ToolApiRepository } from "@data/api/tool-api-repository";
import { MeasurementStd } from "@domain/models/measurement-std";
import { IPart, Part } from "@domain/models/part";
import { Measurement } from "@domain/models/measurement";
import { Tool } from "@domain/models/tool";
import { PartRepository } from "@domain/repositories/part-repository";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function useInputMeasurementStd() {
  const partRepo: PartRepository = new PartApiRepository();
  const toolRepo: ToolRepository = new ToolApiRepository();
  const measurementRepository = new MeasurementStdApiRepository();
  const { id } = useParams();
  const navigate = useNavigate();
  const [parts, setParts] = useState<Part[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [measurementStd, setMeasurementStd] = useState<MeasurementStd>(
    MeasurementStd.create({
      part: undefined,
      segments: [
        Measurement.create({
          character: "",
          nominal: "",
          nominalValue: "",
          upper: 0,
          lower: 0,
          saUpper: 0,
          saLower: 0,
          checked: false,
          result: "",
          judgement: "",
          saResult: "",
          saJudgement: "",
        }),
      ],
      checked: false,
    })
  );
  const checkedSegment = useMemo(
    () => measurementStd.segments.find((item) => item.checked),
    [measurementStd]
  );
  const [nominalModalShow, setNominalModalShow] = useState(false);
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const [saveConfirmShow, setSaveConfirmShow] = useState(false);
  const [successConfirmShow, setSuccessConfirmShow] = useState(false);
  const [tempSegment, setTempSegment] = useState<Measurement>(
    Measurement.create({
      character: "",
      nominal: "",
      nominalValue: "",
      upper: 0,
      lower: 0,
      saUpper: 0,
      saLower: 0,
      checked: false,
      result: "",
      judgement: "",
      saResult: "",
      saJudgement: "",
    })
  );

  const onPartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.part = parts.find((item) => item.id == e.target.value);
      return newState;
    });
  };
  const onAddSegment = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.createSegment();
      return newState;
    });
  };
  const onSegmentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.updateSegment(i, {
        ...newState.segments[i].unmarshall(),
        [e.target.name]: e.target.value,
      });
      return newState;
    });
  };
  const onToolChange = (e: React.ChangeEvent<HTMLSelectElement>, i: number) => {
    setMeasurementStd((prevState) => {
      const newObject = prevState.duplicate();
      newObject.changeTool(
        tools.find((item) => item.id == e.target.value),
        i
      );
      return newObject;
    });
  };
  const onRemoveSegment = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number
  ) => {
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.removeSegment(i);
      return newState;
    });
  };
  const onSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(measurementStd.part);
    if (id) {
      measurementRepository.update(id, measurementStd);
      Swal.fire({
        icon: "success",
        text: "Berhasil Update Measurement Std",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate(-1);
    } else {
      if (measurementStd.part === undefined) {
        Swal.fire({
          icon: "error",
          text: "Part Code - Part Name Harus Diisi",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        measurementRepository.store(measurementStd);
        navigate(-1);
      }
    }
    // id
    //     ? measurementRepository.update(id, measurementStd)
    //     : measurementRepository.store(measurementStd);
    // navigate("../");
  };
  const onCancel = () => {
    navigate("../");
  };
  const onShowNominalModal = (
    e: React.MouseEvent<HTMLButtonElement>,
    segment: Measurement
  ) => {
    setNominalModalShow(true);
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.chooseSegment(segment);
      setTempSegment(segment);
      return newState;
    });
  };
  const onNominalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log({ [e.target.name]: e.target.value });
    setTempSegment((prevState) => {
      const newState = prevState.duplicate();
      newState.update({
        ...newState.unmarshall(),
        [e.target.name]: e.target.value,
      });
      return newState;
    });
  };
  const onSaveNominalChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNominalModalShow(false);
    setMeasurementStd((prevState) => {
      const newState = prevState.duplicate();
      newState.replaceSegment(tempSegment);
      return newState;
    });
  };
  const onCancelNominalChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNominalModalShow(false);
  };
  useEffect(() => {
    if (id) {
      measurementRepository.show(id).then((result) => {
        setMeasurementStd(result);
      });
    }
  }, []);
  useEffect(() => {
    partRepo
      .get({ page: 1, limit: 9999999 })
      .then((result) => setParts(result.data));
    toolRepo
      .get({ page: 1, limit: 9999999 })
      .then((result) => setTools(result.data));
  }, []);

  return {
    id,
    parts,
    tools,
    measurementStd,
    nominalModalShow,
    deleteConfirmShow,
    saveConfirmShow,
    successConfirmShow,
    checkedSegment,
    tempSegment,
    onToolChange,
    onPartChange,
    onAddSegment,
    onSegmentChange,
    onRemoveSegment,
    onSave,
    onCancel,
    onShowNominalModal,
    onNominalChange,
    setNominalModalShow,
    onSaveNominalChange,
    onCancelNominalChange,
  };
}

