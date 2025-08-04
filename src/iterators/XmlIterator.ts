import fs from 'fs';
import { UserData } from '../data/UserData';
import { XMLParser } from 'fast-xml-parser';

export class XmlIterator {
  private users: UserData[] = [];

  constructor(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parser = new XMLParser();
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
