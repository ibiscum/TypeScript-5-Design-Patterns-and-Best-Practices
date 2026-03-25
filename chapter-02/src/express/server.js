"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, body_parser_1.json)());
app.get("/health", (req, res) => {
    res.send("OK!");
});
app.listen(port, () => console.log(`Server listening on port ${port}`));
//# sourceMappingURL=server.js.map