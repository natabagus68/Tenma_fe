import { Segment3D } from "@domain/models/segment-3d";

export interface Segment3dRepository{
    store(segment3d:Segment3D):Promise<void>
}