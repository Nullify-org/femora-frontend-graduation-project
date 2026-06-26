import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { Card } from '../../../../shared/components/card/card';
import { AuthService } from '../../../../core/auth/auth.service';
import { ContinueLearning } from '../../widgets/continue-learning/continue-learning';
import { RecommendedProducts } from '../../widgets/recommended-products/recommended-products';
import { AiWidget } from '../../widgets/ai-widget/ai-widget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, Sidebar, Card, ContinueLearning, RecommendedProducts, AiWidget],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  readonly auth = inject(AuthService);
}
