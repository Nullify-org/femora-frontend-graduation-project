import { afterNextRender } from '@angular/core';

/** Runs a callback only in the browser (skips SSR/prerender). */
export function runInBrowser(fn: () => void): void {
  // Guard against server-side rendering / prerender where `window` and
  // `document` are not available. Only schedule the callback in the
  // browser environment.
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  afterNextRender(fn);
}
