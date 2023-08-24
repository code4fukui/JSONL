# JSONL

JSONL is a [JSON Lines](https://jsonlines.org/) library, stringify / parse / streaming read and write as JavaScript ES modules for browsers and Deno.

## usage

### stringify & parse

```javascript
import { JSONL } from "https://code4fukui.github.io/JSONL/JSONL.js";

const data = [
  { a: 1, b: "abc" },
  { a: 2, b: "def" },
];
const s = JSONL.stringify(data);
console.log(s);
const data2 = JSONL.parse(s);
console.log(data2);
```

### stream write

```js
import { JSONLWriter } from "https://code4fukui.github.io/JSONL/JSONLWriter.js";

const w = new JSONLWriter("test.jsonl");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
```

### stream read

```js
import { JSONLReader } from "https://code4fukui.github.io/JSONL/JSONLReader.js";

const r = new JSONLReader("test.jsonl");
for (;;) {
  const data = await r.readRecord();
  if (data == null) {
    break;
  }
  console.log(data);
}
r.close();
```

## reference

- officital spec [JSON Lines](https://jsonlines.org/)
- similar spec [ndjson](http://ndjson.org/)
- forked from [NDJSON](https://github.com/taisukef/NDJSON/)

## see also

- [ChatGPTのファインチューニング用JSONLデータをCSVから生成する](https://fukuno.jig.jp/4047)
- [日本政府からNDJSONで公開された都道府県別ワクチン接種数オープンデータで接種率表示](https://fukuno.jig.jp/3228)
