import { Component } from '@angular/core';
import { FeatureShell } from '../../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-assignment-submission',
  standalone: true,
  imports: [FeatureShell],
  template: `<app-feature-shell title="تسليم الواجب" />`,
})
export class AssignmentSubmission {}
