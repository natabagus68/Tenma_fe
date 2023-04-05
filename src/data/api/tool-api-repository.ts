import { Tool, ITool } from "@domain/models/tool";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { TableParam } from "types";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";

export class ToolApiRepository implements ToolRepository {
    async get(props: TableParam): Promise<PaginatedData<Tool>> {
        const { data } = await api.get(`tool`, {
            params: { page: props.page, limit: props.limit },
        });
        return PaginatedData.create({
            page: props.page,
            limit: props.limit,
            lastPage: data.totalPage,
            data: (data.data || []).map((item) =>
                Tool.create({
                    id: item.id,
                    idTool: item.id_tool,
                    toolCode: item.code,
                    name: item.name,
                    address: item.address,
                    checked: false,
                })
            ),
        });
    }
    async show(id: string): Promise<Tool> {
        const {
            data: { data = {} },
        } = await api.get(`tool/${id}`);
        return Tool.create({
            id: data.id,
            idTool: data.id_tool,
            toolCode: data.code,
            name: data.name,
            address: data.address,
            checked: false,
        });
    }
    async store(tool: Tool): Promise<Tool> {
        const {
            data: { data = {} },
        } = await api.post(`tool`, {
            id_tool: tool.idTool,
            code: tool.toolCode,
            name: tool.name,
            address: tool.address,
        });
        return Tool.create({
            idTool: data.id_tool,
            toolCode: data.code,
            name: data.name,
            address: data.address,
            checked: false,
        });
    }
    async update(tool: Tool): Promise<Tool> {
        const {
            data: { data = {} },
        } = await api.put(`tool/${tool.id}`, {
            id_tool: tool.idTool,
            code: tool.toolCode,
            name: tool.name,
            address: tool.address,
        });
        return Tool.create({
            idTool: data.id_tool,
            toolCode: data.code,
            name: data.name,
            address: data.address,
            checked: false,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`tool/${id}`);
        return true;
    }
}
