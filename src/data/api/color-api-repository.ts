import { Color, IColor } from "@domain/models/color";
import { ColorRepository } from "@domain/repositories/color-repository";
import { TableParam } from "types";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";

export class ColorApiRepository implements ColorRepository {
  async get(props: TableParam): Promise<PaginatedData<Color>> {
    const { data } = await api.get(`color`, {
      params: { page: props.page, limit: props.limit, search: props.q },
    });
    return PaginatedData.create({
      page: props.page,
      limit: props.limit,
      lastPage: data.totalPage,
      totalRow: data.totalRows,
      data: (data.data || []).map((item) =>
        Color.create({
          id: item.id,
          idColor: item.id_color,
          materialColor: item.name,
          checked: false,
        })
      ),
    });
  }
  async show(id: string): Promise<Color> {
    const {
      data: { data = {} },
    } = await api.get(`color/${id}`);
    return Color.create({
      id: data.id,
      idColor: data.id_color,
      materialColor: data.name,
      checked: false,
    });
  }
  async store(color: Color): Promise<Color> {
    const {
      data: { data = {} },
    } = await api.post(`color`, {
      id_color: color.idColor,
      name: color.materialColor,
    });
    return Color.create({
      id: data.id,
      idColor: data.id_color,
      materialColor: data.name,
      checked: false,
    });
  }
  async update(color: Color): Promise<Color> {
    const {
      data: { data = {} },
    } = await api.put(`color/${color.id}`, {
      id_color: color.idColor,
      name: color.materialColor,
    });
    return Color.create({
      id: data.id,
      idColor: data.id_color,
      materialColor: data.name,
      checked: false,
    });
  }
  async destroy(id: string): Promise<boolean> {
    await api.delete(`color/${id}`);
    return true;
  }
}

