import { History } from "@domain/models/history";
import { HistoryRepository } from "@domain/repositories/history-repository";
import { api } from "./_api";

export class HistoryApiRepository implements HistoryRepository {
    async get(id: string): Promise<History[]> {
        const { data } = await api.get(`progress-check/${id}/history`);
        return data.data.map((item) =>
            History.create({
                id: item.id,
                date: item.date,
                problemDetail: item.problem,
                char: item.char,
                remark: item.remark,
            })
        );
    }
    async show(id: string, historyId: string): Promise<History> {
        const { data } = await api.get(
            `progress-check/${id}/history/${historyId}`
        );
        return History.create({
            id: data.data.id,
            date: data.data.date,
            problemDetail: data.data.problem,
            char: data.data.char,
            remark: data.data.remark,
        });
    }
    async store(id: string, data: History): Promise<History> {
        const { data: responseData } = await api.post(
            `progress-check/${id}/history`,
            {
                date: data.date,
                problem: data.problemDetail,
                char: data.char,
                remark: data.remark,
            }
        );
        return History.create({
            id: responseData.data.id,
            date: responseData.data.date,
            problemDetail: responseData.data.problem,
            char: responseData.data,
            remark: responseData.data,
        });
    }
    async update(id: string, data: History): Promise<History> {
        const { data: resData } = await api.put(
            `progress-check/${id}/history/${data.id}`,
            {
                date: data.date,
                problem: data.problemDetail,
                char: data.char,
                remark: data.remark,
            }
        );
        return History.create({
            id: resData.data.id,
            date: resData.data.date,
            problemDetail: resData.data.problem,
            char: resData.data.char,
            remark: resData.data.remark,
        });
    }
    async destroy(pcid: string, id: string): Promise<void> {
        await api.delete(`progress-check/${pcid}/history/${id}`);
    }
}
