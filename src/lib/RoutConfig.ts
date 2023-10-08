import IRoutConfig, {TMethod} from "./IRoutConfig";
export default class RoutConfig implements IRoutConfig {
    public fetchUrl: string = '/api/routes'
    public fetchMethod: TMethod = 'POST'
    public headers:HeadersInit = {}
}
