# NDJSON
 
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

## reference
[ndjson](http://ndjson.org/)

## see also
[ndjsonとは? - Qiita](https://qiita.com/suin/items/246691382ea2a2b22031)

