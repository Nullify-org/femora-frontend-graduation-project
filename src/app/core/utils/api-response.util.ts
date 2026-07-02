const LIST_KEYS = [
  'items',
  'data',
  'results',
  'courses',
  'products',
  'recommendations',
  'enrollments',
  'orders',
  'conversations',
  'messages',
];

export function unwrapList<T>(response: unknown): T[] {
  if (Array.isArray(response)) {
    return response as T[];
  }

  if (response && typeof response === 'object') {
    const obj = response as Record<string, unknown>;
    for (const key of LIST_KEYS) {
      if (Array.isArray(obj[key])) {
        return obj[key] as T[];
      }
    }
  }

  return [];
}

export function formatPrice(price: number | undefined | null, freeLabel = 'مجاني'): string {
  if (price == null || price === 0) {
    return freeLabel;
  }
  return `${price.toLocaleString('ar-EG')} ج.م`;
}

/**
 * True when the given string is a raw database identifier (GUID/UUID) rather
 * than a human-readable label. Used to make sure internal IDs (e.g. a
 * categoryId returned before the backend resolves it to a name) never leak
 * into the UI as visible text.
 */
export function isGuidLike(value?: string | null): boolean {
  if (!value) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value.trim());
}

/** Safe display label — returns null instead of leaking a raw GUID to the user. */
export function displayLabel(value?: string | null): string | null {
  if (!value) return null;
  return isGuidLike(value) ? null : value;
}

export function courseEmoji(category?: string | null): string {
  const map: Record<string, string> = {
    crochet: '🧶',
    cooking: '🍳',
    art: '🎨',
    jewelry: '💍',
    decor: '🏡',
  };
  if (!category) return '📚';
  const key = category.toLowerCase();
  return Object.entries(map).find(([k]) => key.includes(k))?.[1] ?? '📚';
}

export function productEmoji(category?: string | null): string {
  const map: Record<string, string> = {
    crochet: '🧵',
    candle: '🕯️',
    jewelry: '💍',
    food: '🎂',
    decor: '🏡',
  };
  if (!category) return '🛍️';
  const key = category.toLowerCase();
  return Object.entries(map).find(([k]) => key.includes(k))?.[1] ?? '🛍️';
}
