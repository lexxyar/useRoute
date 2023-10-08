"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./Router"));
function route(name) {
    Router_1.default.fetch();
    const rt = Router_1.default.findByName(name);
    return rt ? rt.url : '';
}
exports.default = route;
//# sourceMappingURL=functions.js.map