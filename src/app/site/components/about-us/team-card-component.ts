import { Component, input, output, signal } from '@angular/core';
import { AboutUsCardInterface } from '../../../interface/about-us.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'andreoli-team-card',
  imports: [CommonModule],
  templateUrl: './team-card-component.html',
  styleUrl: './team-card-component.css',
})
export class TeamCardComponent {
  item = input.required<AboutUsCardInterface>();
  selectedCardId = output<number | string | null>();
  isSelected = input<boolean>(false);
  mobileDevice = window.innerWidth < 768;
  showNewCardType = signal(true);
}
