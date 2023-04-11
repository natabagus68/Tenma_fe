import { Segmen2dRepository } from "@domain/repositories/segment-2d-repository";
import { Segment2D } from "@domain/models/segment-2d";
import { api } from "./_api";

export class Segment2dApiRepository implements Segmen2dRepository {
    async store(id: string, params: Segment2D[]): Promise<void> {
        await api.post(`progress-check/${id}/2d`, {
            segments: params.map((item) => {
                return {
                    segment_name: item.name,
                    measurements: item.measurements.map((el) => {
                        return {
                            actual_result: el.result,
                            actual_result_judgment: el.judgement,
                            sa_result: el.saResult,
                            sa_result_judgement: el.saJudgement,
                        };
                    }),
                };
            }),
        });
    }
}
