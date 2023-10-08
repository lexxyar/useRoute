import RoutConfig from "./RoutConfig";
import Route from "./Route";
export default class Router {
    private static __instance;
    private __routes;
    private __config;
    private __fetched;
    static getInstance(): Router;
    static fetch(force?: boolean): void;
    static findByName(name: string): Route | undefined;
    constructor(options?: Partial<RoutConfig>);
    fetch(force?: boolean): void;
    findByName(name: string): Route | undefined;
}
