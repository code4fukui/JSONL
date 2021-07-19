# NDJSON

NDJSON stringify / parse in JavaScript ES module for browsers and Deno

## usage

static stringify & parse

```javascript
import { NDJSON } from "https://taisukef.github.io/NDJSON/NDJSON.js";

const data = [
  { a: 1, b: "abc" },
  { a: 2, b: "def" },
];
const s = NDJSON.stringify(data);
console.log(s);
const data2 = NDJSON.parse(s);
console.log(data2);
```


stream write
```js
import { NDJSONWriter } from "https://taisukef.github.io/NDJSON/NDJSONWriter.js";

const w = new NDJSONWriter("test.ndjson");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
```

stream read

```js
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
```

## reference

[ndjson](http://ndjson.org/)

## see also

[ndjsonとは? - Qiita](https://qiita.com/suin/items/246691382ea2a2b22031)\
[日本政府からNDJSONで公開された都道府県別ワクチン接種数オープンデータで接種率表示](https://fukuno.jig.jp/3228)
