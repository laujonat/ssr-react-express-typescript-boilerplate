"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var server_1 = require("react-dom/server");
var counter_1 = __importDefault(require("../src/counter"));
var html_1 = __importDefault(require("./html"));
var port = 8000;
var server = express_1.default();
server.use(helmet_1.default());
server.use(express_1.default.static('dist'));
server.get('/', function (req, res) {
    res.send("hello world");
});
server.get('/', function (req, res) {
    var body = server_1.renderToString(react_1.default.createElement(counter_1.default));
    res.send(html_1.default({
        body: body
    }));
});
server.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
