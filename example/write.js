import { JSONLWriter } from "../JSONLWriter.js";

const w = new JSONLWriter("test.jsonl");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
