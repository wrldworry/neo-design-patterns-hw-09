import fs from 'fs';
import { UserData } from '../data/UserData';

export class CsvIterator {
  private users: UserData[] = [];

  constructor(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.trim().split('\n').slice(1);
    this.users = lines.map(line => {
      const [id, name, email, phone] = line.split(',');
      return { id: Number(id), name, email, phone };
    });
  }

  *[Symbol.iterator]() {
    for (const user of this.users) {
      yield user;
    }
  }
}
