"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvExporter_1 = require("./exporters/CsvExporter");
const JsonExporter_1 = require("./exporters/JsonExporter");
const XmlExporter_1 = require("./exporters/XmlExporter");
const exporters = [new CsvExporter_1.CsvExporter(), new JsonExporter_1.JsonExporter(), new XmlExporter_1.XmlExporter()];
(async () => {
    await Promise.all(exporters.map(e => e.export()));
})();
