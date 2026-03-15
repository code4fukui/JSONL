# JSONL

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

JSONL is a [JSON Lines](https://jsonlines.org/) library, providing stringify/parse/streaming read and write functionality as JavaScript ES modules for browsers and Deno.

## Features
- Stringify and parse JSON Lines data
- Streaming write and read JSON Lines data
- Browser and Deno support

## Usage

### Stringify & Parse
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

### Streaming Write
```js
import { JSONLWriter } from "https://code4fukui.github.io/JSONL/JSONLWriter.js";

const w = new JSONLWriter("test.jsonl");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
```

### Streaming Read
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

## License
MIT