import Router from "./Router";
import Route from "./Route";

export default function route(name: string): string {
    Router.fetch()
    const rt: Route | undefined = Router.findByName(name)
    console.log('route', name, rt, Route)
    return rt ? rt.url : '#'
}
