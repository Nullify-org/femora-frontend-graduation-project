import { Component } from '@angular/core';
import { FeatureShell } from '../../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [FeatureShell],
  template: `<app-feature-shell title="لوحة البائعة" />`,
})
export class SellerDashboard {}
