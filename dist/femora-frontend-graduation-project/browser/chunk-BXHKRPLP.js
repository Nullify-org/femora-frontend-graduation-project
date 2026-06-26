// src/app/core/utils/api-response.util.ts
var LIST_KEYS = [
  "items",
  "data",
  "results",
  "courses",
  "products",
  "recommendations",
  "enrollments",
  "orders",
  "conversations",
  "messages"
];
function unwrapList(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && typeof response === "object") {
    const obj = response;
    for (const key of LIST_KEYS) {
      if (Array.isArray(obj[key])) {
        return obj[key];
      }
    }
  }
  return [];
}
function formatPrice(price, freeLabel = "\u0645\u062C\u0627\u0646\u064A") {
  if (price == null || price === 0) {
    return freeLabel;
  }
  return `${price.toLocaleString("ar-EG")} \u062C.\u0645`;
}
function courseEmoji(category) {
  const map = {
    crochet: "\u{1F9F6}",
    cooking: "\u{1F373}",
    art: "\u{1F3A8}",
    jewelry: "\u{1F48D}",
    decor: "\u{1F3E1}"
  };
  if (!category)
    return "\u{1F4DA}";
  const key = category.toLowerCase();
  return Object.entries(map).find(([k]) => key.includes(k))?.[1] ?? "\u{1F4DA}";
}
function productEmoji(category) {
  const map = {
    crochet: "\u{1F9F5}",
    candle: "\u{1F56F}\uFE0F",
    jewelry: "\u{1F48D}",
    food: "\u{1F382}",
    decor: "\u{1F3E1}"
  };
  if (!category)
    return "\u{1F6CD}\uFE0F";
  const key = category.toLowerCase();
  return Object.entries(map).find(([k]) => key.includes(k))?.[1] ?? "\u{1F6CD}\uFE0F";
}

export {
  unwrapList,
  formatPrice,
  courseEmoji,
  productEmoji
};
//# sourceMappingURL=chunk-BXHKRPLP.js.map
