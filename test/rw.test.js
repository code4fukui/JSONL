import * as t from "https://deno.land/std/testing/asserts.ts";
import { JSONLWriter } from "../JSONLWriter.js";
import { JSONLReader } from "../JSONLReader.js";

Deno.test("test", async () => {
  const w = new JSONLWriter("test.jsonl");
  await w.writeRecord({ name: "abc", value: 123 });
  await w.writeRecord({ name: "def", value: 456 });
  w.close();
  const r = new JSONLReader("test.jsonl");
  t.assertEquals(await r.readRecord(), { name: "abc", value: 123 });
  t.assertEquals(await r.readRecord(), { name: "def", value: 456 });
  t.assertEquals(await r.readRecord(), null);
  r.close();
});
Deno.test("test2", async () => {
  t.assertEquals(
    await Deno.readTextFile("test.jsonl"),
    '{"name":"abc","value":123}\n{"name":"def","value":456}\n',
  );
});
