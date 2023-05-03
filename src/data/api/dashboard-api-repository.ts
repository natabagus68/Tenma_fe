import { Sumary } from "@domain/models/sumary-dashbord-chart";
import { api } from "./_api";
import { ProgressCheck } from "@domain/models/progress-check-dashboard";
import { Bar } from "@domain/models/bar-chart-dashboard";

export class DashboatApiRepository {
    async getSumaryChart(): Promise<Sumary> {
        const data = await api.get("dashboard/summary-judgement");

        return Sumary.create({
            total: data.data.data.total,
            ok: data.data.data.total_ok,
            ng: data.data.data.total_ng,
            waiting: data.data.data.total_waiting,
        });
    }

    async getProgressCheck(): Promise<ProgressCheck> {
        const { data } = await api.get("dashboard/progress-check-data");
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
            date: data.data.map((el) => el.date),
            data3D: data.data.map((el) => el.total_3d),
            data2D: data.data.map((el) => el.total_2d),
        });
    }
}
