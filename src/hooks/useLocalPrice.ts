import { useCurrency } from "./useCurrency";
import { formatNGN, ngnToUsd } from "../data/nigeria-pricing";

// Localizes NGN base prices to the visitor's currency.
// Nigeria (NGN) sees Naira. Everyone else sees their local currency,
// converted from a USD reference derived from the NGN price.
export function useLocalPrice() {
  const { convert, info, loading } = useCurrency();
  const isNGN = info.code === "NGN";

  const fmtOne = (ngn: number): string => {
    if (loading) return "…";
    if (isNGN) return formatNGN(ngn);
    return convert(ngnToUsd(ngn));
  };

  const price = (min: number, max: number | null): string => {
    if (loading) return "…";
    if (max === null || min === max) return fmtOne(min);
    if (isNGN) return `${formatNGN(min)} - ${formatNGN(max)}`;
    const a = convert(ngnToUsd(min));
    const b = convert(ngnToUsd(max));
    return `${a} - ${b}`;
  };

  return { price, isNGN, code: info.code, loading };
}
