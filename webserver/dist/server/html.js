"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helmet_1 = __importDefault(require("helmet"));
var bodyAttrs = helmet_1.default.bodyAttributes.toString();
var htmlAttrs = helmet_1.default.htmlAttributes.toString();
exports.default = (function (_a) {
    var body = _a.body;
    return "\n  <!DOCTYPE html>\n  <html>\n  <head>\n    " + helmet_1.default.title.toString() + "\n    " + helmet_1.default.meta.toString() + "\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">" + body + "</div>\n    </body>\n    <script src=\"js/client.js\" defer></script>\n  </html>\n";
});
