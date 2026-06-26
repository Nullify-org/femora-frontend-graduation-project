import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  template: `<div class="flex flex-wrap gap-2"><span class="text-xs bg-blush/50 px-3 py-1 rounded-full text-terracotta-dark">اقتراحات — قريباً</span></div>`,
})
export class Suggestions {}
