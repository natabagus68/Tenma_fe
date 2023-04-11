import { Segmen2dRepository } from "@domain/repositories/segment-2d-repository";
import { Segment2D } from "@domain/models/segment-2d";
import { api } from "./_api";
import { Segment } from "@domain/models/segment";
import { Measurement } from "@domain/models/measurement";

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

    async show(id: string): Promise<Segment2D[]> {
        const { data } = await api.get(`progress-check/${id}/2d`);
        return data.data.map((item) =>
            Segment2D.create({
                name: item.name,
                measurements: (
                    item.std_measurement?.special_accept_segments || []
                ).map((measurement) =>
                    Measurement.create({
                        character: measurement.character,
                        nominal: measurement.nominal_type,
                        nominalValue: measurement.nominal_value,
                        upper: measurement.standard_upper,
                        lower: measurement.standard_lower,
                        saUpper: measurement.special_accept_upper,
                        saLower: measurement.special_accept_lower,
                        result: measurement.cavity_results?.actual_result,
                        judgement:
                            measurement.cavity_results?.actual_result_judgement,
                        saResult: measurement.cavity_results?.sa_result,
                        saJudgement:
                            measurement.cavity_results?.sa_result_judgement,
                        checked: false,
                    })
                ),
            })
        );
    }

    async update(id: string, params: any): Promise<void> {
        console.log(params);
        await api.put(`progress-check/${id}/2d`, {
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
