"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./routes/mainRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const systray_1 = require("./middlewares/systray");
const app = express_1.default();
// declaring middlewares
app.use(body_parser_1.default.json({ limit: 50 }));
systray_1.systray;
// defining main route
app.use("/v1", mainRouter_1.default);
// defining default route
app.use("/", (req, res) => {
    res.send("Welcome to SellerSpot LocalConnect Server");
});
// listening on port
app.listen(4000, () => console.log("LocalConnect server running on port 4000"));
