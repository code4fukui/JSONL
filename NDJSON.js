const NDJSON = {
  stringify(data) {
    const s = [];
    for (const d of data) {
      s.push(JSON.stringify(d));
    }
    return s.join("\n");
  },
  parse(s) {
    return JSON.parse("[" + s.trim().split("\n").join(",") + "]");
  }
};

export { NDJSON };
