"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.systray = void 0;
const systray_1 = __importDefault(require("systray"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const opener_1 = __importDefault(require("opener"));
const icon = fs_extra_1.default.readFileSync(path_1.default.join(__dirname, `../assets/logo.ico`));
exports.systray = new systray_1.default({
    menu: {
        // you should using .png icon in macOS/Linux, but .ico format in windows
        icon: icon.toString("base64"),
        title: "SellerSpot Server",
        tooltip: "SellerSpot Server",
        items: [
            {
                title: "Go to Console",
                tooltip: "Go to Console",
                checked: false,
                enabled: true,
            },
            {
                title: "Access Server",
                tooltip: "Access Server",
                checked: false,
                enabled: true,
            },
        ],
    },
    debug: false,
    copyDir: true,
});
exports.systray.onClick((action) => {
    if (action.seq_id === 0) {
        opener_1.default("https://www.google.com");
    }
    else if (action.seq_id === 1) {
        // open the url
        opener_1.default("http://localhost:4000");
    }
});
