import { DataExporter } from './DataExporter';
import fs from 'fs';

export class CsvExporter extends DataExporter {
  protected render(): void {
    this.result = 'id,name,email,phone\n';
    this.result += this.data.map(u => `${u.id},${u.name},${u.email},${u.phone}`).join('\n');
  }

  protected save(): void {
    fs.writeFileSync('./dist/users.csv', this.result);
  }
}
