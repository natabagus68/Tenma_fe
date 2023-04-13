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

export class ReportApiRepository implements ReportRepository {
    async getPic(): Promise<Pic[]> {
        const { data } = await api.get(`report/pic`);
        return (data.data || []).map((item) =>
            Pic.create({
                name: item.name,
                checked: false,
            })
        );
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
            data: (data.data || []).map((item) =>
                Report.create({
                    id: item.id,
                    idCode: item.part?.part_cd,
                    partName: item.part?.part_name,
                    lastReport: item.updated_at,
                    pic: item.pic,
                    part: item.part,
                    checked: false,
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
                    id: item.id,
                    idCode: item.part?.part_cd,
                    partName: item.part?.part_name,
                    lastReport: item.updated_at,
                    pic: item.pic,
                    part: item.part,
                    checked: false,
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
                            judgement:
                                pacSegment.cavity_results
                                    .actual_result_judgement,
                            saResult: pacSegment.cavity_results.sa_result,
                            saJudgement:
                                pacSegment.cavity_results.sa_result_judgement,
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
                pacSegments: (
                    item.std_measurement?.special_accept_segments || []
                ).map((pacSegment) =>
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
                        judgement:
                            pacSegment.cavity_results.actual_result_judgement,
                        saResult: pacSegment.cavity_results.sa_result,
                        saJudgement:
                            pacSegment.cavity_results.sa_result_judgement,
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
        return data.data;
    }
}
