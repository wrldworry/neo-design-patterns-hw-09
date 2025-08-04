import { DataExporter } from './DataExporter';
import fs from 'fs';

export class JsonExporter extends DataExporter {
  protected render(): void {
    this.result = JSON.stringify(this.data, null, 2);
  }

  protected save(): void {
    fs.writeFileSync('./dist/users.json', this.result);
  }
}
