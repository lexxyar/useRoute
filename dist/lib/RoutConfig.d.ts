import IRoutConfig, { TMethod } from "./IRoutConfig";
export default class RoutConfig implements IRoutConfig {
    fetchUrl: string;
    fetchMethod: TMethod;
    headers: HeadersInit;
}
