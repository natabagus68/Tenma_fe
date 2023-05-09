import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { PaginatedData } from "@domain/models/paginated-data";
import { Traceability } from "@domain/models/traceability";
import { IParamsTraceability } from "@domain/models/traceability-params";

export interface TraceabilityRepository {
    get(props: IParamsTraceability): Promise<PaginatedData<DailyProgressCheck>>;
}
