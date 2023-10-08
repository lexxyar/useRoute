import Route from "./lib/Route";
import Router from "./lib/Router";
import RoutConfig from "./lib/RoutConfig";
// import route from "./lib/functions";

export const route = function (name: string): string {
    Router.fetch()
    const rt: Route | undefined = Router.findByName(name)
    console.log('route', name, rt, Route)
    return rt ? rt.url : '#'
}

export {RoutConfig, Router, Route}

