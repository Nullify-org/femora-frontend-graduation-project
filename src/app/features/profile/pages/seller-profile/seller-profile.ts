import { Component } from '@angular/core';
import { FeatureShell } from '../../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-seller-profile',
  standalone: true,
  imports: [FeatureShell],
  template: `<app-feature-shell title="ملف البائعة" />`,
})
export class SellerProfile {}
