import { useEffect, useState } from "react";
import { CACHE_KEY, CACHE_TTL, FALLBACK, detectCurrency, formatCurrency, readCurrencyCache } from "../lib/currency";
import type { CurrencyInfo } from "../lib/currency";

let pending: Promise<CurrencyInfo> | null = null;

function cachedCurrency() {
  try { return readCurrencyCache(window.sessionStorage); }
  catch { return null; }
}

function loadCurrency() {
  if (!pending) {
    pending = detectCurrency().then((info) => {
      try {
        window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ...info, expiresAt: Date.now() + CACHE_TTL }));
      } catch { /* Storage may be unavailable in private browsing. */ }
      return info;
    }).finally(() => { pending = null; });
  }
  return pending;
}

export function useCurrency() {
  const [state, setState] = useState(() => {
    const cached = cachedCurrency();
    return { info: cached ?? FALLBACK, loading: !cached, failed: false };
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const cached = cachedCurrency();
    if (cached) {
      setState({ info: cached, loading: false, failed: false });
      return;
    }
    setState({ info: FALLBACK, loading: true, failed: false });
    // StrictMode mounts share a request instead of consuming the IP API quota twice.
    loadCurrency().then(
      (info) => { if (!cancelled) setState({ info, loading: false, failed: false }); },
      () => { if (!cancelled) setState({ info: FALLBACK, loading: false, failed: true }); },
    );
    return () => { cancelled = true; };
  }, [attempt]);

  const convert = (usd: number) => state.loading ? "…" : formatCurrency(usd, state.info);
  const localize = (text: string) => text.replace(/\$(\d+) USD/g, (_, amount: string) => convert(Number(amount)));
  return { ...state, convert, localize, retry: () => setAttempt((value) => value + 1) };
}
