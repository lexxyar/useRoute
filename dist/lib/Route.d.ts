import { TMethod } from "./IRoutConfig";
export default class Route {
    private readonly __uri;
    private readonly __url;
    private readonly __name;
    private readonly __method;
    get uri(): string;
    get url(): string;
    get name(): string;
    get method(): TMethod;
    constructor(row: any);
}
