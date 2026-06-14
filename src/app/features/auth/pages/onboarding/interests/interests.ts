import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface InterestOption {
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interests.html',
})
export class Interests {
  options: InterestOption[] = [
    { label: 'Cooking', selected: true },
    { label: 'Handmade', selected: false },
    { label: 'Fashion', selected: false },
    { label: 'Crafts', selected: false },
    { label: 'Baking', selected: false },
    { label: 'Other', selected: false },
  ];

  toggle(option: InterestOption) {
    option.selected = !option.selected;
  }
}