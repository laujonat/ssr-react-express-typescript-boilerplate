"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function Counter(props, state) {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    function incrementCounter() {
        setCounter(counter + 1);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null,
            "counter at: ",
            counter),
        react_1.default.createElement("button", { onClick: incrementCounter })));
}
exports.default = Counter;
