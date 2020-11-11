"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.systray = void 0;
const systray_1 = __importDefault(require("systray"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
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
        exports.systray.sendAction({
            type: "update-item",
            item: {
                ...action.item,
                checked: !action.item.checked,
            },
            seq_id: action.seq_id,
        });
    }
    else if (action.seq_id === 1) {
        // open the url
        console.log("open the url", action);
    }
    else if (action.seq_id === 2) {
        exports.systray.kill();
    }
});
