import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BadgeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
