import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

export class JSONLWriter {
  constructor(fn) {
    this.w = new LineWriter(fn);
  }
  async writeRecord(data) {
    await this.w.writeLine(JSON.stringify(data));
  }
  close() {
    this.w.close();
  }
}
