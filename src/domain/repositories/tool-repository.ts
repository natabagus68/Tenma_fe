import { Tool, ITool } from "@domain/models/tool";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface ToolRepository {
    get(props: TableParam): Promise<PaginatedData<Tool>>;
    show(id: Tool["id"]): Promise<Tool>;
    store(tool: Tool): Promise<Tool>;
    update(tool: Tool): Promise<Tool>;
    destroy(id: Tool["id"]): Promise<boolean>;
}
