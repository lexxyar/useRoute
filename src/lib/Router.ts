import RoutConfig from "./RoutConfig";
import Route from "./Route";

export default class Router {
    private static __instance: Router
    private __routes: Route[]
    private __config: RoutConfig
    private __fetched: boolean = false

    public static getInstance(): Router {
        if (!!Router.__instance) {
            new Router()
        }
        return Router.__instance
    }

    public static fetch(force: boolean = false): void {
        Router.getInstance().fetch(force)
    }

    public static findByName(name: string): Route | undefined {
        return Router.getInstance().findByName(name)
    }

    public constructor(options: Partial<RoutConfig> = {}) {
        this.__config = {...(new RoutConfig()), ...options}
        this.__routes = []

        Router.__instance = this
    }

    public fetch(force: boolean = false): void {

        if (!force && this.__fetched) return;

        let url: string = (new URL(location.href)).origin + this.__config.fetchUrl

        const request: XMLHttpRequest = new XMLHttpRequest()
        request.open(this.__config.fetchMethod, url, false)
        request.send(null)
        const data: any[] = JSON.parse(request.response)
        this.__routes = []
        data.map((row: any) => {
            const r: Route = new Route(row)
            this.__routes.push(r)
        })
        this.__fetched = true
    }

    public findByName(name: string): Route | undefined {

        const res = this.__routes.find((e: Route) => e.name === name)
        console.log(`useRoute::findByName(${name}): ${res}`)
        return res
    }
}

