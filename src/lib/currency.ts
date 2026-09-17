export type CurrencyInfo = { code: string; rate: number };
export type CachedCurrency = CurrencyInfo & { expiresAt: number };
export const FALLBACK: CurrencyInfo = { code: "USD", rate: 1 };
export const CACHE_KEY = "ayo-currency-v2";
export const CACHE_TTL = 60 * 60 * 1000;

export function validCurrency(value: unknown): value is CurrencyInfo {
  if (!value || typeof value !== "object") return false;
  const { code, rate } = value as CurrencyInfo;
  return typeof code === "string" && /^[A-Z]{3}$/.test(code)
    && Number.isFinite(rate) && rate > 0 && (code !== "USD" || rate === 1);
}

export function readCurrencyCache(storage: Pick<Storage, "getItem">, now = Date.now()): CachedCurrency | null {
  try {
    const value = JSON.parse(storage.getItem(CACHE_KEY) ?? "null");
    const expiresAt: unknown = value?.expiresAt;
    return validCurrency(value) && typeof expiresAt === "number" && Number.isFinite(expiresAt) && expiresAt > now
      && expiresAt <= now + CACHE_TTL ? { ...value, expiresAt } : null;
  } catch {
    return null;
  }
}

// Share this resolver between the hook and deterministic, mocked network tests.
export async function detectCurrency(fetcher: typeof fetch = fetch, timeoutMs = 4000): Promise<CurrencyInfo> {
  async function request(url: string, validate: (data: any) => CurrencyInfo): Promise<CurrencyInfo> {
    for (let attempt = 0; attempt < 2; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetcher(url, { signal: controller.signal, credentials: "omit" });
        if (!response.ok) throw new Error("Currency provider unavailable");
        return validate(await response.json());
      } catch (error) {
        if (attempt === 1) throw error;
      } finally {
        clearTimeout(timer);
      }
    }
    throw new Error("Currency lookup failed");
  }

  const location = await request("https://ipapi.co/json/", (data) => {
    const code = data?.currency;
    if (data?.error || typeof code !== "string" || !/^[A-Z]{3}$/.test(code)) {
      throw new Error("Location currency unavailable");
    }
    return { code, rate: 1 };
  });
  if (location.code === "USD") return FALLBACK;

  return request("https://open.er-api.com/v6/latest/USD", (data) => {
    const info = { code: location.code, rate: data?.rates?.[location.code] };
    if (data?.result !== "success" || data?.base_code !== "USD" || !validCurrency(info)) {
      throw new Error("Exchange rate unavailable");
    }
    return info;
  });
}

export function formatCurrency(usd: number, info: CurrencyInfo): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency", currency: info.code, maximumFractionDigits: 0,
  }).format(Math.round(usd * info.rate));
}
