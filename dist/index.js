"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const routes_1 = require("./routes");
const infrastructure_1 = require("./infrastructure");
const admin_1 = require("./admin");
function register() {
    return {
        id: "blog-builder",
        name: "Blog Builder",
        infrastructure: [...infrastructure_1.Databases],
        routes: routes_1.Routes,
        admin: admin_1.admin,
    };
}
exports.register = register;
//# sourceMappingURL=index.js.map