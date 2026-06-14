import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GoalOption {
  label: string;
}

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './goal.html',
})
export class Goal {
  options: GoalOption[] = [
    { label: 'Learn new skill' },
    { label: 'Sell products' },
    { label: 'Start my own business' },
    { label: 'Grow my existing business' },
  ];

  selected = 'Learn new skill';

  select(label: string) {
    this.selected = label;
  }
}