"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoutConfig_1 = __importDefault(require("./RoutConfig"));
const Route_1 = __importDefault(require("./Route"));
class Router {
    static getInstance() {
        if (!!Router.__instance) {
            new Router();
        }
        return Router.__instance;
    }
    static fetch(force = false) {
        Router.getInstance().fetch(force);
    }
    static findByName(name) {
        return Router.getInstance().findByName(name);
    }
    constructor(options = {}) {
        this.__fetched = false;
        this.__config = { ...(new RoutConfig_1.default()), ...options };
        this.__routes = [];
        Router.__instance = this;
    }
    fetch(force = false) {
        if (!force && this.__fetched)
            return;
        let url = (new URL(location.href)).origin + this.__config.fetchUrl;
        const request = new XMLHttpRequest();
        request.open(this.__config.fetchMethod, url, false);
        request.send(null);
        const data = JSON.parse(request.response);
        this.__routes = [];
        data.map((row) => {
            const r = new Route_1.default(row);
            this.__routes.push(r);
        });
        this.__fetched = true;
    }
    findByName(name) {
        return this.__routes.find((e) => e.name === name);
    }
}
exports.default = Router;
//# sourceMappingURL=Router.js.map