import * as t from "https://deno.land/std/testing/asserts.ts";
import { JSONL } from "../JSONL.js";

Deno.test("stringify", () => {
  const data = [{ a: "abc", b: 1 }, { a: "def", b: 2 }];
  const s = JSONL.stringify(data);
  t.assertEquals(s, '{"a":"abc","b":1}\n{"a":"def","b":2}');
});
Deno.test("parse", () => {
  const s = '{"a":"abc","b":1}\n{"a":"def","b":2}';
  const data = JSONL.parse(s);
  const data2 = [{ a: "abc", b: 1 }, { a: "def", b: 2 }];
  t.assertEquals(data, data2);
});
