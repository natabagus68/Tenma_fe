import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { PaginatedData } from "@domain/models/paginated-data";
import {
  DailyProgressCheckRepository,
  IDPCGetParam,
  IDPCStorePayload,
} from "@domain/repositories/daily-progress-check-repository";
import { api } from "./_api";
import { GetDailyProgressCheckRes } from "./types/get-daily-progress-check-response";
import { ShowDailyProgressCheckRes } from "./types/show-daily-progress-check-res";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { StoreDailyProgressCheckReq } from "./types/store-daily-progress-check-req";
import { StoreDailyProgressCheckRes } from "./types/store-daily-progress-check-res";
import { UpdateDailyProgressCheckReq } from "./types/update-daily-progress-check-req";
import { UpdateDailyProgressCheckRes } from "./types/update-daily-progress-check-res";
import moment from "moment";
import { History } from "@domain/models/history";
import { IMeasurement, Measurement } from "@domain/models/measurement";
import { Segment } from "@domain/models/segment";
import { Pic } from "@domain/models/pic";
import { MeasurementStd } from "@domain/models/measurement-std";
import { Comparisson } from "@domain/models/comparisson";

export class DailyProgressCheckApiRepository
  implements DailyProgressCheckRepository
{
  async get(props: IDPCGetParam): Promise<PaginatedData<DailyProgressCheck>> {
    const { data } = await api.get<GetDailyProgressCheckRes>(`progress-check`, {
      params: props,
    });
    return PaginatedData.create<DailyProgressCheck>({
      page: props.page,
      limit: props.limit,
      lastPage: data.totalPage,
      totalRow: data.totalRows,
      data: data.data.map((item) =>
        DailyProgressCheck.create({
          id: item.id,
          picId: item.pic,
          judgement: item.judgement,
          judgement2d: item.judgement_2d,
          judgement3d: item.judgement_3d,
          updatedAt: item.updated_at,
          partCode: item.part.part_cd,
          model: item.part?.customer_model?.name || "-",
          shift: item.shift,
          has3d: item.judgement_3d.length > 0,
          has2d: item.judgement_2d.length > 0,
          partId: item.part.id,
          machineId: item.machine.id,
          inspectionDate: new Date(item.inspection_date),
          lotProduction: item.lot_production,
          labelNo: `${item.label_no}`,
          acceptSampleTime: item.accept_sample_time,
          measureSampleTime: item.measure_sample_time,
          weightPart: Number(item.part_weight_qis),
          actWeightPart: Number(item.actual_part_weight),
          checked: false,
          checkedBy: item.checked_by,
          pic: {
            checked: false,
            name: item.pic || "-",
          },
          part: {
            id: item.part?.id,
            custItemId: item.part?.cust_item_cd,
            partCode: item.part?.part_cd,
            partName: item.part?.part_name,
            oldPartNumber: item.part?.old_part_number,
            itemGroupCode: item.part?.item_group_cd,
            itemGroupName: item.part?.item_group_name,
            customerModel: item.part?.customer_model?.name,
            customer: ``,
            material: ``,
            materialColor: ``,
            customerModelGroup: ``,
            unitCd: item.part?.unit_cd,
            materialDetails: ``,
            productWeight: item.part?.product_weight,
            customerModelId: item.part?.customer_model?.id,
            customerId: ``,
            customerModelGroupId: ``,
          },
        })
      ),
    });
  }
  async detail(id: string): Promise<DailyProgressCheck> {
    const { data } = await api.get<ShowDailyProgressCheckRes>(
      `progress-check/${id}`
    );
    const newState = DailyProgressCheck.create({
      id: data.data.id,
      picId: data.data.pic,
      judgement: data.data.judgement,
      judgement2d: data.data.judgement_2d,
      judgement3d: data.data.judgement_3d,
      updatedAt: data.data.created_at?.toString(),
      partCode: data.data.part?.part_cd,
      model: "Unknown",
      shift: data.data.shift,
      has3d: data.data.judgement_3d?.length > 0,
      has2d: data.data.judgement_2d?.length > 0,
      partId: data.data.part?.id,
      machineId: data.data.machine.id,
      inspectionDate: data.data.inspection_date,
      lotProduction: data.data.lot_production,
      labelNo: `${data.data.label_no}`,
      acceptSampleTime: data.data.accept_sample_time,
      measureSampleTime: data.data.measure_sample_time,
      weightPart: Number(data.data.part_weight_qis),
      actWeightPart: Number(data.data.actual_part_weight),
      checked: false,
      checkedBy: data.data.checked_by,

      pic: {
        checked: false,
        name: data.data.pic,
      },
      part: {
        id: data.data.part?.id,
        custItemId: data.data.part?.cust_item_cd,
        partCode: data.data.part?.part_cd,
        partName: data.data.part?.part_name,
        oldPartNumber: data.data.part?.old_part_number,
        itemGroupCode: data.data.part?.item_group_cd,
        itemGroupName: data.data.part?.item_group_name,
        customerModel: data.data.part?.customer_model?.name,
        customer: data.data.part?.customer?.name,
        material: data.data.part?.material?.id_material,
        materialColor: data.data.part?.material?.color?.name,
        customerModelGroup: data.data.part?.customer_model_group?.name,
        unitCd: data.data.part?.unit_cd,
        materialDetails: data.data.part?.material?.detail,
        productWeight: data.data.part?.product_weight,
        customerModelId: data.data.part?.customer_model?.id,
        customerId: data.data.part?.customer?.id,
        customerModelGroupId: data.data.part?.customer_model_group?.id,
      },
      machine: {
        id: data.data.machine.id,
        idMachine: data.data.machine.id_machine,
        noMachine: data.data.machine.no,
        checked: false,
      },
    });
    return newState;
  }
  async store(payload: IDPCStorePayload): Promise<DailyProgressCheck> {
    const { data } = await api.post<
      StoreDailyProgressCheckRes,
      AxiosResponse<StoreDailyProgressCheckRes, StoreDailyProgressCheckReq>,
      StoreDailyProgressCheckReq
    >(`progress-check`, {
      shift: payload.shift,
      part_cd: payload.partId,
      id_machine: payload.machineId,
    });
    return DailyProgressCheck.create({
      id: data.data.id,
      picId: data.data.pic,
      judgement: data.data.judgement,
      judgement2d: data.data.judgement_2d,
      judgement3d: data.data.judgement_3d,
      updatedAt: moment(data.data.updated_at).format("HH:mm"),
      partCode: data.data.part_id,
      model: "Unknown",
      shift: data.data.shift,
      has3d: data.data.judgement_3d?.length > 0,
      has2d: data.data.judgement_2d?.length > 0,
      partId: data.data.part_id,
      machineId: data.data.machine_id,
      inspectionDate: data.data.inspection_date,
      lotProduction: data.data.lot_production,
      labelNo: `${data.data.label_no}`,
      acceptSampleTime: data.data.accept_sample_time,
      measureSampleTime: data.data.measure_sample_time,
      weightPart: Number(data.data.part_weight_qis),
      checked: false,
      pic: {
        checked: false,
        name: data.data.pic,
      },
    });
  }
  async update(payload: DailyProgressCheck): Promise<DailyProgressCheck> {
    const { data } = await api.put<
      UpdateDailyProgressCheckReq,
      AxiosResponse<UpdateDailyProgressCheckRes, UpdateDailyProgressCheckReq>,
      UpdateDailyProgressCheckReq
    >(`progress-check/${payload.id}`, {
      shift: payload.shift,
      pic: payload.pic?.name || "",
      part_cd: payload.part.id,
      id_machine: payload.machine.id,
      inspection_date: payload.inspectionDate || "",
      part_weight_qis: `${payload.weightPart}`,
      lot_production: payload.lotProduction,
      label_no: payload.labelNo,
      accept_sample_time: payload.acceptSampleTime,
      measure_sample_time: payload.measureSampleTime,
      actual_part_weight: payload.actWeightPart.toString(),
    });
    return DailyProgressCheck.create({
      id: data.data.id,
      picId: data.data.pic,
      judgement: data.data.judgement,
      judgement2d: data.data.judgement_2d,
      judgement3d: data.data.judgement_3d,
      updatedAt: moment(data.data.updated_at).format("HH:mm"),
      partCode: data.data.part_id,
      model: "Unknown",
      shift: data.data.shift,
      has3d: data.data.judgement_3d?.length > 0,
      has2d: data.data.judgement_2d?.length > 0,
      pic: {
        checked: false,
        name: data.data.pic,
      },
      partId: data.data.part_id,
      machineId: data.data.machine_id,
      inspectionDate: data.data.inspection_date,
      lotProduction: data.data.lot_production,
      labelNo: data.data.label_no.toString(),
      acceptSampleTime: data.data.accept_sample_time,
      measureSampleTime: data.data.measure_sample_time,
      weightPart: Number(data.data.actual_part_weight),
      checked: false,
    });
  }
  async destroy(id: string): Promise<boolean> {
    await api.delete(`progress-check/${id}`);
    return true;
  }
  async get3dSegments(id: string): Promise<Segment[]> {
    const { data } = await api.get(`progress-check/${id}/3d`);

    const result = data.data.map((item) =>
      Segment.create({
        id: item.id,
        name: item.name,
        type: item.cavity_type,
        pacSegments: (item.std_measurement?.special_accept_segments || []).map(
          (pacSegment) =>
            Measurement.create({
              id: pacSegment.id,
              character: pacSegment.character,
              nominal: pacSegment.nominal_type,
              nominalValue: pacSegment.nominal_value,
              upper: pacSegment.standard_upper,
              lower: pacSegment.standard_lower,
              saUpper: pacSegment.special_accept_upper,
              saLower: pacSegment.special_accept_lower,
              checked: false,
              result: pacSegment.cavity_results.actual_result,
              judgement: pacSegment.cavity_results.actual_result_judgement,
              saResult: pacSegment.cavity_results.sa_result,
              saJudgement: pacSegment.cavity_results.sa_result_judgement,
              tool: {
                id: pacSegment.tool?.id,
                idTool: pacSegment.tool?.id_tool,
                toolCode: pacSegment.tool?.code,
                name: pacSegment.tool?.name,
                address: pacSegment.tool?.address,
                checked: false,
              },
            })
        ),
        comparisson: item?.cavity_comparators?.map((el) => {
          const data = el?.std_measurement_comparator?.sa_segment_comps?.map(
            (ex) => {
              return Comparisson.create({
                id: el.id,
                result: ex.cavity_comp_res.actual_result,
                resultJudgment: ex.cavity_comp_res.actual_result_judgement,
                saResult: ex.cavity_comp_res.sa_result,
                saResultJudgment: ex.cavity_comp_res.sa_result_judgement,
              });
            }
          );

          data.id = el.id;
          return data;
        }),
        checked: false,
      })
    );

    return result;
  }
  async getPic(): Promise<Pic[]> {
    const { data } = await api.get(`progress-check/pic`);
    return data.data.map((item) =>
      Pic.create({
        name: item.pic,
        checked: false,
      })
    );
  }

  async get2dSegments(id: string): Promise<Segment[]> {
    const { data } = await api.get(`progress-check/${id}/2d`);
    return data.data.map((item) =>
      Segment.create({
        id: item.id,
        name: item.name,
        type: item.cavity_type,
        pacSegments: item.std_measurement?.special_accept_segments.map(
          (pacSegment) =>
            Measurement.create({
              id: pacSegment.id,
              character: pacSegment.character,
              nominal: pacSegment.nominal_type,
              nominalValue: pacSegment.nominal_value,
              upper: pacSegment.standard_upper,
              lower: pacSegment.standard_lower,
              saUpper: pacSegment.special_accept_upper,
              saLower: pacSegment.special_accept_lower,
              checked: false,
              result: pacSegment.cavity_results.actual_result,
              judgement: pacSegment.cavity_results.actual_result_judgement,
              saResult: pacSegment.cavity_results.sa_result,
              saJudgement: pacSegment.cavity_results.sa_result_judgement,
              tool: {
                id: pacSegment.tool?.id,
                idTool: pacSegment.tool?.id_tool,
                toolCode: pacSegment.tool?.code,
                name: pacSegment.tool?.name,
                address: pacSegment.tool?.address,
                checked: false,
              },
            })
        ),

        checked: false,
      })
    );
  }

  async updateJudgmen(
    id: string,
    togel: string,
    data: string
  ): Promise<boolean> {
    await api.put(`progress-check/${id}/${togel}/update-judgement`, {
      judgement: data,
    });

    return true;
  }

  async updateJudgmentUniv(id: string, data: string): Promise<boolean> {
    await api.put(`progress-check/${id}/update-judgement`, {
      judgement: data,
    });
    return true;
  }

  async updateCavity3D(
    id: string,
    cavityID: string,
    data: IMeasurement[]
  ): Promise<boolean> {
    console.log(data);
    await api.put(`progress-check/${id}/3d/${cavityID}`, {
      measurements: data.map((item) => {
        return {
          actual_result: item.result,
          actual_result_judgment: item.judgement,
          sa_result: item.saResult,
          sa_result_judgement: item.saJudgement,
        };
      }),
    });
    return true;
  }

  async uploadComparisson(
    pcId: string,
    cavityID: string,
    data: FormData
  ): Promise<boolean> {
    await api.post(`progress-check/${pcId}/3d/${cavityID}/comparator`, data);
    return true;
  }

  async destroyComparisson(
    pcID: string,
    cavityId: string,
    comparatorId: string
  ): Promise<boolean> {
    await api.delete(
      `progress-check/${pcID}/3d/${cavityId}/comparator/${comparatorId}`
    );
    return true;
  }
}

