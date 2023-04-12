import { PartReport } from "@domain/models/part-report";
import { Report } from "@domain/models/report";

export type IReportParam = {
    pic:string;
    judgement:string;
    q:string;
}
export interface ReportRepository{
    get(param:IReportParam):Promise<Report[]>
    partDetail(id:Report['id']):Promise<Report>
    reportDetail(id:PartReport['id']):Promise<PartReport[]>
}