import { config } from "@common/utils";
import { ToolApiRepository } from "@data/api/tool-api-repository";
import { Tool, ITool } from "@domain/models/tool";
import { PaginatedData } from "@domain/models/paginated-data";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useTool() {
    const toolRepository: ToolRepository = new ToolApiRepository();
    const navigate = useNavigate();
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
    const [tool, setTool] = useState<PaginatedData<Tool>>(
        PaginatedData.create<Tool>({
            page: 1,
            limit: 9999,
            lastPage: 0,
            data: [],
        })
    );
    const onAdd = () => {
        navigate(`${config.pathPrefix}master-data/tool/create`);
    };
    const onEdit = (id: ITool["id"]) => {
        navigate(`${config.pathPrefix}master-data/tool/${id}/edit`);
    };
    const onDelete = (id: ITool["id"]) => {
        setDeleteConfirmShow(true);
        setTool((prevTool) => {
            const tool = PaginatedData.create<Tool>(prevTool.unmarshall());
            tool.data.find((item) => item.id == id).check();
            return tool;
        });
    };
    const onConfirmDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await toolRepository.destroy(
            tool.data.find((item) => item.checked).id
        );
        setDeleteConfirmShow(false);
        setTool((prevTool) => {
            const tool = PaginatedData.create<Tool>(prevTool.unmarshall());
            tool.data = tool.data.filter((item) => !item.checked);
            return tool;
        });
    };
    const onPageChange = (page: number) => {};
    useEffect(() => {
        toolRepository
            .get({ limit: tool.limit, page: tool.page })
            .then((result) => {
                return setTool(result);
            });
    }, []);
    return {
        tool,
        onAdd,
        onEdit,
        onDelete,
        onConfirmDelete,
        onPageChange,
        deleteConfirmShow,
        setDeleteConfirmShow,
    };
}
