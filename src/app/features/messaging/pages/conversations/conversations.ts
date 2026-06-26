import { Component } from '@angular/core';
import { FeatureShell } from '../../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [FeatureShell],
  template: `<app-feature-shell title="المحادثات" />`,
})
export class Conversations {}
