import { useEffect, useState } from "react";

type CurrencyInfo = {
  code: string;
  rate: number; // per 1 USD
};

const FALLBACK: CurrencyInfo = { code: "USD", rate: 1 };
const CACHE_KEY = "ayo-currency-v1";

/**
 * Detects the visitor's currency from their geo-location (ipapi.co),
 * fetches a live USD→local exchange rate (open.er-api.com), and exposes
 * a convert() helper. Falls back to USD if either request fails.
 * Result is cached in sessionStorage so we don't re-fetch on every page.
 */
export function useCurrency() {
  const [info, setInfo] = useState<CurrencyInfo>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // 1. Check cache first
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached) as CurrencyInfo;
          if (parsed?.code && parsed?.rate) {
            setInfo(parsed);
            setLoading(false);
            return;
          }
        }
      } catch {
        /* ignore cache errors */
      }

      try {
        // 2. Detect the visitor's currency from their IP
        const geoRes = await fetch("https://ipapi.co/json/");
        if (!geoRes.ok) throw new Error("geo failed");
        const geo = await geoRes.json();
        const code: string = typeof geo.currency === "string" && geo.currency.length === 3 ? geo.currency : "USD";

        // 3. Get the exchange rate for that currency
        let rate = 1;
        if (code !== "USD") {
          const rateRes = await fetch("https://open.er-api.com/v6/latest/USD");
          if (!rateRes.ok) throw new Error("rates failed");
          const rateJson = await rateRes.json();
          const r = rateJson?.rates?.[code];
          if (typeof r === "number" && r > 0) rate = r;
          else throw new Error("rate missing");
        }

        const next: CurrencyInfo = { code, rate };
        if (!cancelled) {
          setInfo(next);
          try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify(next));
          } catch {
            /* ignore */
          }
        }
      } catch {
        // Keep USD fallback silently
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  /** Convert a USD amount into the visitor's currency, formatted with Intl */
  const convert = (usd: number) => {
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: info.code,
        maximumFractionDigits: 0,
      }).format(Math.round(usd * info.rate));
    } catch {
      return `$${Math.round(usd)}`;
    }
  };

  return { info, loading, convert };
}
