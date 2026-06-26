import { Component } from '@angular/core';
import { FeatureShell } from '../../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [FeatureShell],
  template: `<app-feature-shell title="التفضيلات" />`,
})
export class Preferences {}
