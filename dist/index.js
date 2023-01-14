"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
const api = (0, express_1.default)();
const port = process.env.PORT || 8081;
api.use(express_1.default.json(), (0, cors_1.default)(), routes_1.routes);
api.listen(port, () => console.log(`Odete de patinete na porta: ${port}`));
//# sourceMappingURL=index.js.map