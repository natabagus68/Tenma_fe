import { PartReport } from "@domain/models/part-report";
import { Report } from "@domain/models/report";
import {
  IReportParam,
  ReportRepository,
} from "@domain/repositories/report-repository";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";
import { TableParam } from "types";
import { Segment } from "@domain/models/segment";
import { Measurement } from "@domain/models/measurement";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { Machine } from "@domain/models/machine";

export class ReportApiRepository implements ReportRepository {
  async getPic(): Promise<Pic[]> {
    const { data } = await api.get(`report/pic`);
    return (data.data || []).map((item) => {
      return Pic.create({
        name: item.pic,
        checked: false,
      });
    });
  }
  async get(param: IReportParam): Promise<PaginatedData<Report>> {
    const { data } = await api.get(`report`, {
      params: {
        page: param.page,
        limit: param.limit,
        pic: param.pic,
        judgement: param.judgement,
        search: param.q,
      },
    });
    return PaginatedData.create({
      page: param.page,
      limit: param.limit,
      lastPage: data.totalPage,
      totalRow: data.totalRows,
      data: (data.data || []).map((item) =>
        Report.create({
          id: item.id,
          idCode: item.report_transaction_id,
          partName: item.part?.part_name,
          lastReport: item.created_at,
          pic: item.pic,
          part: item.part,
          checked: false,
          judgement: item.judgement,
          machine: item.machine,
        })
      ),
    });
  }
  async partDetail(id: string, param: any): Promise<PaginatedData<Report>> {
    const { data } = await api.get(`report/${id}`, {
      params: {
        page: param.page,
        limit: param.limit,
        pic: param.pic,
        judgement: param.judgement,
        search: param.q,
      },
    });
    return PaginatedData.create({
      page: param.page,
      limit: param.limit,
      lastPage: data.totalPage,
      data: (data.data || []).map((item) =>
        Report.create({
          id: item?.id,
          idCode: item?.report_transaction_id,
          partName: item?.part?.part_name,
          lastReport: item?.created_at,
          pic: item?.pic,
          part: item?.part,
          checked: false,
          judgement: item?.judgement,
          machine: Machine.create({
            noMachine: item?.machine?.no,
            idMachine: item?.machine?.id,
            checked: false,
          }),
        })
      ),
    });
  }
  async reportDetail(id: string): Promise<PartReport[]> {
    throw new Error("Method not implemented.");
  }

  async get2dSegments(id: string): Promise<Segment[]> {
    const { data } = await api.get(`report/${id}/report-detail/2d`);
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

  async get3dSegments(id: string): Promise<Segment[]> {
    const { data } = await api.get(`report/${id}/report-detail/3d`);
    return data.data.map((item) =>
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
        checked: false,
      })
    );
  }

  async getRepotForDownload(id: string, params: any) {
    const { data } = await api.get(`report/${id}/export`, {
      params: {
        date_from: params.dateFrom,
        date_to: params.dateTo,
      },
    });
    const result = data.data.filter((item) => item.daily_progress.length !== 0);
    return result;
  }

  async getpartReportDetail(id: string): Promise<DailyProgressCheck> {
    const { data } = await api.get(`report/${id}/report-detail`);

    const newState = DailyProgressCheck.create({
      id: data.data.id,
      picId: data.data.pic,
      judgement: data.data.judgement,
      judgement2d: data.data.judgement_2d,
      judgement3d: data.data.judgement_3d,
      updatedAt: data.data.inspection_date?.toString(),
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
      checked: false,
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
}

