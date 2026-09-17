import test from "node:test";
import assert from "node:assert/strict";
import { detectCurrency, readCurrencyCache, formatCurrency, CACHE_TTL } from "../src/lib/currency.ts";

const response = (body, status = 200) => new Response(JSON.stringify(body), { status });

test("NGN location automatically loads and formats USD exchange rate", async () => {
  const urls = [];
  const info = await detectCurrency(async (url) => {
    urls.push(url);
    return response(url.includes("ipapi") ? { currency: "NGN" } : { result: "success", base_code: "USD", rates: { NGN: 1500 } });
  });
  assert.deepEqual(info, { code: "NGN", rate: 1500 });
  assert.equal(urls.length, 2);
  assert.equal(formatCurrency(100, info).replace(/\D/g, ""), "150000");
});

test("USD location does not need an exchange-rate request", async () => {
  let calls = 0;
  assert.deepEqual(await detectCurrency(async () => { calls++; return response({ currency: "USD" }); }), { code: "USD", rate: 1 });
  assert.equal(calls, 1);
});

test("temporary network failure retries automatically", async () => {
  let calls = 0;
  await detectCurrency(async () => {
    if (++calls === 1) throw new Error("offline");
    return response({ currency: "USD" });
  });
  assert.equal(calls, 2);
});

test("invalid location and HTTP failures reject rather than cache USD", async () => {
  for (const body of [{ error: true }, { currency: "bad" }, {}]) {
    await assert.rejects(detectCurrency(async () => response(body)));
  }
  await assert.rejects(detectCurrency(async () => response({}, 429)));
});

test("missing, negative, and nonnumeric rates are rejected", async () => {
  for (const rate of [undefined, -1, 0, "1500"]) {
    await assert.rejects(detectCurrency(async (url) => response(url.includes("ipapi")
      ? { currency: "NGN" } : { result: "success", base_code: "USD", rates: { NGN: rate } })));
  }
});

test("stalled requests abort with bounded retries", async () => {
  let calls = 0;
  await assert.rejects(detectCurrency((_url, { signal }) => {
    calls++;
    return new Promise((_resolve, reject) => signal.addEventListener("abort", () => reject(new Error("timeout")), { once: true }));
  }, 5));
  assert.equal(calls, 2);
});

test("cache validates expiry, currency and storage errors", () => {
  const now = 100000;
  const valid = { code: "NGN", rate: 1500, expiresAt: now + CACHE_TTL };
  const storage = (value) => ({ getItem: () => JSON.stringify(value) });
  assert.deepEqual(readCurrencyCache(storage(valid), now), valid);
  for (const value of [null, { ...valid, expiresAt: now }, { ...valid, rate: -1 }, { ...valid, code: "bad" }, { code: "USD", rate: 1 }]) {
    assert.equal(readCurrencyCache(storage(value), now), null);
  }
  assert.equal(readCurrencyCache({ getItem: () => "invalid json" }, now), null);
  assert.equal(readCurrencyCache({ getItem: () => { throw new Error("blocked"); } }, now), null);
});
