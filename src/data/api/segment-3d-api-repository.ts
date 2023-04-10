import { Segment3D } from "@domain/models/segment-3d";
import { Segment3dRepository } from "@domain/repositories/segment-3d-repository";
import { api } from "./_api";

export class Segment3dApiRepository implements Segment3dRepository {
    async store(segment3d: Segment3D): Promise<void> {
        const fData = new FormData();
        segment3d.segments.forEach((file) => fData.append("file", file));
        fData.append("id_tool", segment3d.tool.id);
        await api.post(`progress-check/${segment3d.progressCheckId}/3d`, fData);
    }
}
