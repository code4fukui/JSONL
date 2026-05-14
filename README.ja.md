# JSONL

JSONLは[JSON Lines](https://jsonlines.org/)ライブラリであり、ブラウザおよびDeno向けのJavaScript ESモジュールとして、文字列化（stringify）、パース（parse）、ストリーミング読み書き機能を提供します。

## 機能
- JSON Linesデータの文字列化とパース
- JSON Linesデータのストリーミング読み書き
- ブラウザおよびDenoのサポート

## 使い方

### 文字列化とパース
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

### ストリーミング書き込み
```js
import { JSONLWriter } from "https://code4fukui.github.io/JSONL/JSONLWriter.js";

const w = new JSONLWriter("test.jsonl");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();
```

### ストリーミング読み込み
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

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)をご覧ください。
