"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (req, res) => {
    res.send({
        status: true,
        data: Date.now(),
    });
};
