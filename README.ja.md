# JSONL

JSONL は、ブラウザやDenoでJSONLinesを扱うためのライブラリです。文字列の読み書き、ストリーミング読み書きをサポートしています。

## 機能
- JSONテキストの読み書き
- JSONLファイルの読み書き

## 必要環境
ブラウザ、Deno

## 使い方

### 文字列の読み書き
```javascript
import { JSONL } from "https://code4fukui.github.io/JSONL/JSONL.js";

const data = [
  { a: 1, b: "abc" },
  { a: 2, b: "def" },
];
const s = JSONL.stringify(data);
const data2 = JSONL.parse(s);
```

### ファイルの読み書き
```javascript
import { JSONLWriter } from "https://code4fukui.github.io/JSONL/JSONLWriter.js";
import { JSONLReader } from "https://code4fukui.github.io/JSONL/JSONLReader.js";

// 書き込み
const w = new JSONLWriter("test.jsonl");
await w.writeRecord({ name: "abc", value: 123 });
await w.writeRecord({ name: "def", value: 456 });
w.close();

// 読み込み  
const r = new JSONLReader("test.jsonl");
for await (const data of r) {
  console.log(data);
}
r.close();
```

## ライセンス
MIT