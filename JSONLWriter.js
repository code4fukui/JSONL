import { LineWriter } from "https://code4fukui.github.io/line-rw/LineWriter.js";

export class JSONLWriter {
  constructor(fn, append = false) {
    this.w = new LineWriter(fn, null, append);
  }
  async writeRecord(data) {
    await this.w.writeLine(JSON.stringify(data));
  }
  close() {
    this.w.close();
  }
}
