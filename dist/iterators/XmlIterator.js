"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlIterator = void 0;
const fs_1 = __importDefault(require("fs"));
const fast_xml_parser_1 = require("fast-xml-parser");
class XmlIterator {
    constructor(filePath) {
        this.users = [];
        const content = fs_1.default.readFileSync(filePath, 'utf-8');
        const parser = new fast_xml_parser_1.XMLParser();
        const json = parser.parse(content);
        this.users = json.users.user;
        if (!Array.isArray(this.users)) {
            this.users = [this.users];
        }
    }
    *[Symbol.iterator]() {
        for (const user of this.users) {
            yield user;
        }
    }
}
exports.XmlIterator = XmlIterator;
