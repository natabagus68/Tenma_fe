import { Report } from "@domain/models/report";

export type IReportParam = {
    pic:string;
    judgement:string;
    q:string;
}
export interface ReportRepository{
    get(param:IReportParam):Promise<Report[]>
    partDetail(id:Report['id']):Promise<Report>
    reportDetail(id:Report['id'], partId:)
}