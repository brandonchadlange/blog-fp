"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const index_1 = __importDefault(require("./pages/index"));
const index_2 = __importDefault(require("./controllers/index"));
exports.admin = {
    pages: index_1.default,
    controllers: index_2.default,
};
//# sourceMappingURL=index.js.map