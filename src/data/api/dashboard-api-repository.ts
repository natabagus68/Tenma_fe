import { Sumary } from "@domain/models/sumary-dashbord-chart";
import { api } from "./_api";
import { ProgressCheck } from "@domain/models/progress-check-dashboard";
import { Bar } from "@domain/models/bar-chart-dashboard";
import { Revenue } from "@domain/models/revenue";

export class DashboatApiRepository {
    async getSumaryChart(time?: string): Promise<Sumary> {
        const data = await api.get(
            `dashboard/summary-judgement${time ? "-" + time : ""}`
        );

        return Sumary.create({
            total: data.data.data.total,
            ok: data.data.data.total_ok,
            ng: data.data.data.total_ng,
            waiting: data.data.data.total_waiting,
        });
    }

    async getProgressCheck(endPoint?: string): Promise<ProgressCheck> {
        const { data } = await api.get(
            `dashboard/progress-check-data${endPoint ? "-" + endPoint : ""}`
        );
        return ProgressCheck.create({
            part: data.data.total_part,
            progressCheck: data.data.total_progress_check,
            ThreeDCheck: data.data.total_3d_check,
            TwoDCheck: data.data.total_2d_check,
        });
    }

    async getBarCharData(props: string): Promise<Bar> {
        const { data } = await api.get(`dashboard/part-checking-${props}`);

        return Bar.create({
            date: data.data.map((el) => el.date || el.month),
            data3D: data.data.map((el) => el.total_3d),
            data2D: data.data.map((el) => el.total_2d),
        });
    }

    async getRevenue(params: any): Promise<Revenue[]> {
        const { data } = await api.get(
            "dashboard/quality-trend/" + params.part + "/" + params.character
        );

        return data.data.map((item) => {
            return Revenue.create({
                nominal: item.nominal_value,
                upper: item.standard_upper,
                lower: item.standard_lower,
                saUpper: item.special_accept_upper,
                saLower: item.special_accept_lower,
                saResult: item.special_accept_result,
                result: item.actual_result,
                createdAt: item.created_at,
            });
        });
    }

    async getCharackter(part: string) {
        const { data } = await api.get(`dashboard/${part}/character`);
        return data.data.map((item) => {
            return {
                character: item.character,
            };
        });
    }
}
