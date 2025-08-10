"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonExporter = void 0;
const DataExporter_1 = require("./DataExporter");
const fs_1 = __importDefault(require("fs"));
class JsonExporter extends DataExporter_1.DataExporter {
    render() {
        this.result = JSON.stringify(this.data, null, 2);
    }
    save() {
        fs_1.default.writeFileSync('./dist/users.json', this.result);
    }
}
exports.JsonExporter = JsonExporter;
