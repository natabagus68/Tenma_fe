import { Color, IColor } from "@domain/models/color";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface ColorRepository {
    get(props: TableParam): Promise<PaginatedData<Color>>;
    show(id: Color["id"]): Promise<Color>;
    store(color: Color): Promise<Color>;
    update(color: Color): Promise<Color>;
    destroy(id: Color["id"]): Promise<boolean>;
}
