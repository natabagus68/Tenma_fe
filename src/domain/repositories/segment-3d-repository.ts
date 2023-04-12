import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { Segment } from "@domain/models/segment";
import { Segment3D } from "@domain/models/segment-3d";

export interface Segment3dRepository {
    store(segment3d: Segment3D): Promise<void>;
    destroy(
        pcid: DailyProgressCheck["id"],
        segmentId: Segment["id"]
    ): Promise<void>;
}
