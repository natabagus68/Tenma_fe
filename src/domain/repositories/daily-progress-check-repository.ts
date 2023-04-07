import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { PaginatedData } from "@domain/models/paginated-data";

export type IDPCGetParam = {
    search: string;
    pic: string;
    judgement: string;
    date: Date | string;
    page: number;
    limit: number;
};

export type IDPCStorePayload = {
    partId: string;
    machineId: string;
    shift: string;
};

export interface DailyProgressCheckRepository {
    get(props: IDPCGetParam): Promise<PaginatedData<DailyProgressCheck>>;
    detail(id: DailyProgressCheck["id"]): Promise<DailyProgressCheck>;
    store(data: IDPCStorePayload): Promise<DailyProgressCheck>;
    update(data: DailyProgressCheck): Promise<DailyProgressCheck>;
    destroy(id: DailyProgressCheck["id"]): Promise<boolean>;
}
