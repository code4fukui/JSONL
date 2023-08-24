import { LineReader } from "https://code4fukui.github.io/line-rw/LineReader.js";

export class JSONLReader {
  constructor(fn) {
    this.r = new LineReader(fn);
  }
  async readRecord(head) {
    const line = await this.r.readLine();
    if (line == null) {
      return null;
    }
    return JSON.parse(line);
  }
  close() {
    this.r.close();
  }
}
