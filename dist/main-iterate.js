"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvIterator_1 = require("./iterators/CsvIterator");
const JsonIterator_1 = require("./iterators/JsonIterator");
const XmlIterator_1 = require("./iterators/XmlIterator");
console.log('--- CSV ---');
for (const user of new CsvIterator_1.CsvIterator('./dist/users.csv')) {
    console.log(user);
}
console.log('--- JSON ---');
for (const user of new JsonIterator_1.JsonIterator('./dist/users.json')) {
    console.log(user);
}
console.log('--- XML ---');
for (const user of new XmlIterator_1.XmlIterator('./dist/users.xml')) {
    console.log(user);
}
