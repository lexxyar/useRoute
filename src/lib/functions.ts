import Router from "./Router";
import Route from "./Route";

export default function route(name: string): string {
    Router.fetch()
    const rt: Route | undefined = Router.findByName(name)
    return rt ? rt.url : ''
}
