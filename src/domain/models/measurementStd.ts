import { uid } from "uid";

export interface Segment {
    character: string;
    nominal_type: string;
    nominal_value: string;
    standart_upper: string;
    standart_lower: string;
    special_acept_upper: string;
    special_acept_lower: string;
    tool_id: string;
}

export interface IMeasurement {
    part_code: string;
    segments: Segment[];
}

export class MeasurementStd {
    id: string;
    part_code: string;
    segments;
}
