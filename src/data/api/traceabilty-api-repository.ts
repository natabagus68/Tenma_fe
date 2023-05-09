import { ITraceability, Traceability } from "@domain/models/traceability";
import { IParamsTraceability } from "@domain/models/traceability-params";
import { TraceabilityRepository } from "@domain/repositories/traceability-repository";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";

export class TraceabilityApiRepository implements TraceabilityRepository {
    async get(
        props?: IParamsTraceability
    ): Promise<PaginatedData<DailyProgressCheck>> {
        const { data } = await api.get("dashboard/traceability-detail", {
            params: {
                limit: props.limit,
                page: props.page,
                date_from: props.dateFrom,
                date_to: props.dateTo,
                pic: props.pic,
                part_code: props.partCode,
                shift: props.shift,
            },
        });

        return PaginatedData.create({
            page: data.page,
            limit: data.limit,
            lastPage: data.lastPage,
            totalRow: data.totalRows,
            data: data.data.map((item) => {
                return DailyProgressCheck.create({
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
                    machineId: item.id || null,
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
                });
            }),
            totalPart: data.total_part,
            progressCheck: data.total_progress_check,
            check3d: data.total_3d_check,
            check2d: data.total_2d_check,
        });
    }

    async getpic() {
        const { data } = await api.get("progress-check/pic");
        return data.data.map((el) => {
            return {
                pic: el.pic,
            };
        });
    }

    async getShift() {
        const { data } = await api.get("progress-check/shift");
        console.log(data.data, "shift");
        return data.data.map((item) => {
            return {
                shift: item.shift,
            };
        });
    }
}
