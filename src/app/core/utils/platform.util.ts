/** Runs a callback only in the browser (skips SSR/prerender). */
export function runInBrowser(fn: () => void): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  // Use setTimeout(0) so it works in any context (constructor, ngOnInit, etc.)
  setTimeout(fn, 0);
}
