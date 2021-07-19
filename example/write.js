import { NDJSONWriter } from "https://taisukef.github.io/NDJSON/NDJSONWriter.js";

const w = new NDJSONWriter("test.ndjson");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
