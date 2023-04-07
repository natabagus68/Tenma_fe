import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
import { api } from "./_api";
import { MeasurementStd } from "@domain/models/measurementStd";
import { MeasurementStdRepository } from "@domain/repositories/measurement-std-repository";

export class MeasurementStdApiRepository implements MeasurementStdRepository {
    async get(params: TableParam): Promise<PaginatedData<MeasurementStd>> {
        const { data } = await api.get("std-measurement", {
            params: params,
        });
        return PaginatedData.create<MeasurementStd>({
            data: (data?.data || []).map((item) =>
                MeasurementStd.create({
                    id: item.id,
                    part: item.part,
                    special_accept_segments: item.special_accept_segments,
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
        });
    }
    async show(id: string): Promise<MeasurementStd> {
        const {
            data: { data = {} },
        } = await api.get(`std-measuremen/${id}`);
        return MeasurementStd.create({
            id: data.id,
            part: data.part,
            special_accept_segments: data.special_accept_segments,
        });
    }
    async store(params: MeasurementStd): Promise<MeasurementStd> {
        const {
            data: { data = {} },
        } = await api.post(`std-measuremen`, {
            part: params.part,
            special_accept_segments: params.special_accept_segments,
        });
        return MeasurementStd.create({
            id: data.id,
            part: data.part,
            special_accept_segments: data.special_accept_segments,
        });
    }
    async update(params: MeasurementStd) {
        const {
            data: { data = {} },
        } = await api.put(`std-measuremen/${params.id}`, {
            part_code: params.part_code,
            segments: params.segments,
        });
        return MeasurementStd.create({
            id: data.id,
            part: data.part,
            special_accept_segments: data.special_accept_segments,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`std-measuremen/${id}`);
        return true;
    }
}
