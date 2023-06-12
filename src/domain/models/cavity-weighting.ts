import { Entity } from "./_entity";

export interface ICavity {
  id?: string;
  name: string;
  type: string;
}

export class Cavity extends Entity<ICavity> {
  static create(props: ICavity): Cavity {
    return new Cavity(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get type(): string {
    return this._props.type;
  }
}

