"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
    get uri() {
        return this.__uri;
    }
    get url() {
        return this.__url;
    }
    get name() {
        return this.__name;
    }
    get method() {
        return this.__method;
    }
    constructor(row) {
        this.__method = row.method.toUpperCase();
        this.__name = row.name;
        this.__uri = row.uri;
        this.__url = row.url;
    }
}
exports.default = Route;
//# sourceMappingURL=Route.js.map