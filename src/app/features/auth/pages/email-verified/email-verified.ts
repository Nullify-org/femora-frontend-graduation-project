import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-verified',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-verified.html',
  styleUrl: './email-verified.css',
})
export class EmailVerified {}
