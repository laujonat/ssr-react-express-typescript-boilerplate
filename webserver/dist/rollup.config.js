"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rollup_plugin_typescript_1 = __importDefault(require("rollup-plugin-typescript"));
exports.default = {
    input: './src/index.ts',
    plugins: [
        rollup_plugin_typescript_1.default()
    ]
};
