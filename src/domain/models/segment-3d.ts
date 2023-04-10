import { Entity } from "./_entity";
import { ITool, Tool } from "./tool";

export interface ISegment3D {
    id?: string;
    tool: ITool;
    segments: (File | null)[];
    progressCheckId : string
}

export class Segment3D extends Entity<ISegment3D> {
    static create(props: ISegment3D): Segment3D {
        return new Segment3D(props);
    }
    createSegment(): Segment3D {
        console.log("Add", this.segments)
        this._props.segments.push(null);
        return this;
    }
    removeSegment(i): Segment3D {
        this._props.segments.splice(i, 0);
        return this;
    }
    updateSegment(i, file: File): Segment3D {
        this._props.segments[i] = file;
        return this;
    }
    unmarshall(): ISegment3D {
        return {
            id: this.id,
            tool: this.tool,
            segments: this.segments,
            progressCheckId: this.progressCheckId,
        };
    }
    duplicate(): Segment3D {
        return Segment3D.create(this.unmarshall());
    }
    get tool(): ITool {
        return this._props.tool;
    }
    get segments(): (File | null)[] {
        return this._props.segments;
    }
    get progressCheckId(): string {
        return this._props.progressCheckId;
    }
}
