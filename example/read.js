import { JSONLReader } from "../JSONLReader.js";

const r = new NDJSONReader("test.jsonl");
for (;;) {
  const data = await r.readRecord();
  if (data == null) {
    break;
  }
  console.log(data);
}
r.close();
