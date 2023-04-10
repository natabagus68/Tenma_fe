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
import { MeasurementStd } from "@domain/models/measurement-std";

export class DailyProgressCheckApiRepository
    implements DailyProgressCheckRepository
{
    async get(props: IDPCGetParam): Promise<PaginatedData<DailyProgressCheck>> {
        const { data } = await api.get<GetDailyProgressCheckRes>(
            `progress-check`,
            { params: props }
        );
        return PaginatedData.create<DailyProgressCheck>({
            page: props.page,
            limit: props.limit,
            lastPage: data.totalPage,
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
                    checked: false,
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
        return DailyProgressCheck.create({
            id: data.data.id,
            picId: data.data.pic,
            judgement: data.data.judgement,
            judgement2d: data.data.judgement_2d,
            judgement3d: data.data.judgement_3d,
            updatedAt: data.data.inspection_date,
            partCode: data.data.part.part_cd,
            model: "Unknown",
            shift: data.data.shift,
            has3d: data.data.judgement_3d.length > 0,
            has2d: data.data.judgement_2d.length > 0,
            partId: data.data.part.id,
            machineId: data.data.machine.id,
            inspectionDate: data.data.inspection_date,
            lotProduction: data.data.lot_production,
            labelNo: `${data.data.label_no}`,
            acceptSampleTime: data.data.accept_sample_time.toISOString(),
            measureSampleTime: data.data.measure_sample_time.toISOString(),
            weightPart: Number(data.data.part_weight_qis),
            checked: false,
            pic: {
                checked: false,
                name: data.data.pic,
            },
        });
    }
    async store(payload: IDPCStorePayload): Promise<DailyProgressCheck> {
        const { data } = await api.post<
            StoreDailyProgressCheckRes,
            AxiosResponse<
                StoreDailyProgressCheckRes,
                StoreDailyProgressCheckReq
            >,
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
            updatedAt: data.data.updated_at,
            partCode: data.data.part_id,
            model: "Unknown",
            shift: data.data.shift,
            has3d: data.data.judgement_3d.length > 0,
            has2d: data.data.judgement_2d.length > 0,
            partId: data.data.part_id,
            machineId: data.data.machine_id,
            inspectionDate: data.data.inspection_date,
            lotProduction: data.data.lot_production,
            labelNo: `${data.data.label_no}`,
            acceptSampleTime: data.data.accept_sample_time?.toISOString(),
            measureSampleTime: data.data.measure_sample_time?.toISOString(),
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
            AxiosResponse<
                UpdateDailyProgressCheckRes,
                UpdateDailyProgressCheckReq
            >,
            UpdateDailyProgressCheckReq
        >(`progress-check/${payload.id}`, {
            shift: payload.shift,
            pic: payload.pic.name,
            part_cd: payload.partCode,
            id_machine: payload.machineId,
            inspection_date: payload.inspectionDate,
            part_weight_qis: `${payload.weightPart}`,
            lot_production: payload.lotProduction,
            label_no: payload.labelNo,
            accept_sample_time: payload.acceptSampleTime,
            measure_sample_time: payload.measureSampleTime,
            actual_part_weight: payload.weightPart.toString(),
        });
        return DailyProgressCheck.create({
            id: data.data.id,
            picId: data.data.pic,
            judgement: data.data.judgement,
            judgement2d: data.data.judgement_2d,
            judgement3d: data.data.judgement_3d,
            updatedAt: data.data.updated_at,
            partCode: data.data.part_id,
            model: "Unknown",
            shift: data.data.shift,
            has3d: data.data.judgement_3d.length > 0,
            has2d: data.data.judgement_2d.length > 0,
            pic: {
                checked: false,
                name: data.data.pic,
            },
            partId: data.data.part_id,
            machineId: data.data.machine_id,
            inspectionDate: data.data.inspection_date,
            lotProduction: data.data.lot_production,
            labelNo: data.data.label_no.toString(),
            acceptSampleTime: data.data.accept_sample_time.toISOString(),
            measureSampleTime: data.data.measure_sample_time.toISOString(),
            weightPart: Number(data.data.actual_part_weight),
            checked: false,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`progress-check/${id}`);
        return true;
    }

    async getCavity(id: string, toogle: string) {
        const { data } = await api.get(`progress-check/${id}/${toogle}`);
        console.log(data, `progress-check/${id}/${toogle}`);
        return data.data.map((item) => {
            return {
                id: item?.id,
                name: item?.name,
                cavityType: item?.cavity_type,
                stdMeasurement: {
                    id: item?.std_measurement?.id,
                    segments:
                        item?.std_measurement?.special_accept_segments?.map(
                            (el) => {
                                return {
                                    id: el?.id,
                                    character: el?.character,
                                    nominal: el?.nominal_type,
                                    nominalValue: el?.nominal_value,
                                    saUpper: el?.standard_upper,
                                    saLower: el?.standard_lower,
                                    tool: el?.tool,
                                    cavity: el?.cavity_results?.map((e) => {
                                        return {
                                            id: e?.id,
                                            actualResult: e?.actual_result,
                                            actualResultJudgement:
                                                e?.actual_result_judgement,
                                        };
                                    }),
                                };
                            }
                        ),
                },
            };
        });
    }
}
