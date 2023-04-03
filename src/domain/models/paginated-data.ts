export interface IPaginatedData<T> {
    q?: string;
    page: number;
    limit: number;
    lastPage: number;
    data: T[];
}

export class PaginatedData<T> {
    q?: string;
    page: number;
    limit: number;
    lastPage: number;
    data: T[];
    constructor(props: IPaginatedData<T>) {
        this.q = props.q;
        this.page = props.page;
        this.limit = props.limit;
        this.lastPage = props.lastPage;
        this.data = props.data;
    }
    static create<T>(props: IPaginatedData<T>) {
        return new PaginatedData<T>(props);
    }
    unmarshall() {
        return {
            q: this.q,
            page: this.page,
            limit: this.limit,
            lastPage: this.lastPage,
            data: this.data,
        };
    }
}
