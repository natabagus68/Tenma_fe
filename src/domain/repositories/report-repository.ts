import { PaginatedData } from "@domain/models/paginated-data";
import { PartReport } from "@domain/models/part-report";
import { Pic } from "@domain/models/pic";
import { Report } from "@domain/models/report";

export type IReportParam = {
    pic: string;
    judgement: string;
    q: string;
    page: number;
    limit: number;
};
export interface ReportRepository {
    get(param: IReportParam): Promise<PaginatedData<Report>>;
    partDetail(id: Report["id"]): Promise<Report>;
    reportDetail(id: PartReport["id"]): Promise<PartReport[]>;
    getPic(): Promise<Pic[]>;
}
