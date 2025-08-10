"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlExporter = void 0;
const DataExporter_1 = require("./DataExporter");
const fs_1 = __importDefault(require("fs"));
class XmlExporter extends DataExporter_1.DataExporter {
    render() {
        this.result = '<?xml version="1.0" encoding="UTF-8"?>\n<users>\n';
        for (const u of this.data) {
            this.result += `  <user>\n    <id>${u.id}</id>\n    <name>${u.name}</name>\n    <email>${u.email}</email>\n    <phone>${u.phone}</phone>\n  </user>\n`;
        }
        this.result += '</users>';
    }
    afterRender() {
        this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
    }
    save() {
        fs_1.default.writeFileSync('./dist/users.xml', this.result);
    }
}
exports.XmlExporter = XmlExporter;
