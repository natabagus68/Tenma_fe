import { Segment2D } from "@domain/models/segment-2d";

export interface Segmen2dRepository {
    store(id: string, params: Segment2D[]): Promise<void>;
    show(id: string): Promise<Segment2D[]>;
}
