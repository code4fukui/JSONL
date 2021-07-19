import * as t from "https://deno.land/std/testing/asserts.ts";
import { NDJSONWriter } from "../NDJSONWriter.js";
import { NDJSONReader } from "../NDJSONReader.js";

Deno.test("test", async () => {
  const w = new NDJSONWriter("test.ndjson");
  await w.writeRecord({ name: "abc", value: 123 });
  await w.writeRecord({ name: "def", value: 456 });
  w.close();
  const r = new NDJSONReader("test.ndjson");
  t.assertEquals(await r.readRecord(), { name: "abc", value: 123 });
  t.assertEquals(await r.readRecord(), { name: "def", value: 456 });
  t.assertEquals(await r.readRecord(), null);
  r.close();
});
Deno.test("test2", async () => {
  t.assertEquals(
    await Deno.readTextFile("test.ndjson"),
    '{"name":"abc","value":123}\n{"name":"def","value":456}\n',
  );
});
