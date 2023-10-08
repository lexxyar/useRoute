import {TMethod} from "./IRoutConfig";

export default class Route {
    private readonly __uri: string
    private readonly __url: string
    private readonly __name: string
    private readonly __method: TMethod

    get uri(): string {
        return this.__uri;
    }

    get url(): string {
        return this.__url;
    }

    get name(): string {
        return this.__name;
    }

    get method(): TMethod {
        return this.__method;
    }

    public constructor(row: any) {
        this.__method = (row.method as string).toUpperCase() as TMethod
        this.__name = row.name as string
        this.__uri = row.uri as string
        this.__url = row.url as string
    }
}

