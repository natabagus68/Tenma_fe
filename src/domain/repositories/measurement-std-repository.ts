import { MeasurementStd } from "@domain/models/measurement-std";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface MeasurementStdRepository {
    get(params: TableParam): Promise<PaginatedData<MeasurementStd>>;
    show(id: MeasurementStd["id"]): Promise<MeasurementStd>;
    store(params: MeasurementStd): Promise<MeasurementStd>;
    update(params: MeasurementStd): Promise<MeasurementStd>;
    destroy(id: MeasurementStd["id"]): Promise<boolean>;
    getByProcessId(id: string): Promise<MeasurementStd>;
}
