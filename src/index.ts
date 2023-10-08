import Route from "./lib/Route";
import Router from "./lib/Router";
import RoutConfig from "./lib/RoutConfig";
// import route from "./lib/functions";

export const route = function (name: string): string {
    const r:Router=Router.getInstance()
    r.fetch()
    const rt: Route | undefined = r.findByName(name)
    console.log('route', name, rt, r)
    return rt ? rt.url : '#'
}

export {RoutConfig, Router, Route}

