import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { History } from "@domain/models/history";

export interface HistoryRepository {
    get(id:DailyProgressCheck['id']):Promise<History[]>
    show(id:DailyProgressCheck['id'], historyId:History['id']):Promise<History>
    store(id:DailyProgressCheck['id'], data: History): Promise<History>;
    update(id:DailyProgressCheck['id'], data: History): Promise<History>;
    destroy(pcid:DailyProgressCheck['id'], id: History["id"]): Promise<void>;
}
