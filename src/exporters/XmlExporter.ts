import { DataExporter } from './DataExporter';
import fs from 'fs';

export class XmlExporter extends DataExporter {
  protected render(): void {
    this.result = '<?xml version="1.0" encoding="UTF-8"?>\n<users>\n';
    for (const u of this.data) {
      this.result += `  <user>\n    <id>${u.id}</id>\n    <name>${u.name}</name>\n    <email>${u.email}</email>\n    <phone>${u.phone}</phone>\n  </user>\n`;
    }
    this.result += '</users>';
  }

  protected afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    fs.writeFileSync('./dist/users.xml', this.result);
  }
}
