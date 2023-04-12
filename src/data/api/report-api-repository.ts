import { PartReport } from "@domain/models/part-report";
import { Report } from "@domain/models/report";
import {
    IReportParam,
    ReportRepository,
} from "@domain/repositories/report-repository";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";

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
                    checked: false,
                })
            ),
        });
    }
    async partDetail(id: string): Promise<Report> {
        throw new Error("Method not implemented.");
    }
    async reportDetail(id: string): Promise<PartReport[]> {
        throw new Error("Method not implemented.");
    }
}
