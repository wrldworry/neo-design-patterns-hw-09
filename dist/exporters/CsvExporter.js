"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvExporter = void 0;
const DataExporter_1 = require("./DataExporter");
const fs_1 = __importDefault(require("fs"));
class CsvExporter extends DataExporter_1.DataExporter {
    render() {
        this.result = 'id,name,email,phone\n';
        this.result += this.data.map(u => `${u.id},${u.name},${u.email},${u.phone}`).join('\n');
    }
    save() {
        fs_1.default.writeFileSync('./dist/users.csv', this.result);
    }
}
exports.CsvExporter = CsvExporter;
