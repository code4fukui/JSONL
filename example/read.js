import { NDJSONReader } from "https://taisukef.github.io/NDJSON/NDJSONReader.js";

const r = new NDJSONReader("test.ndjson");
for (;;) {
  const data = await r.readRecord();
  if (data == null) {
    break;
  }
  console.log(data);
}
r.close();
