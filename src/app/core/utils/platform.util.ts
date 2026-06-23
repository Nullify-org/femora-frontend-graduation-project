import { afterNextRender } from '@angular/core';

/** Runs a callback only in the browser (skips SSR/prerender). */
export function runInBrowser(fn: () => void): void {
  afterNextRender(fn);
}
