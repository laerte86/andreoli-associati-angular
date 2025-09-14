import { Component, signal } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title-component';
import { AboutUsCardInterface } from '../../../interface/about-us.interface';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './team-card-component';

@Component({
  selector: 'andreoli-about-us',
  imports: [SectionTitleComponent, CommonModule, TeamCardComponent],
  templateUrl: './about-us-component.html',
  styleUrl: './about-us-component.css',
})
export class AboutUsComponent {
  team = signal<AboutUsCardInterface[]>([
    {
      id: 1,
      name: 'Mattia Andreoli',
      job: 'Perito Industriale',
      imgUrl: 'assets/images/about-us/mattia_andreoli.png',
    },
    {
      id: 2,
      name: 'Franco Andreoli',
      job: 'Perito Industriale',
      imgUrl: 'assets/images/about-us/franco_andreoli.png',
    },
    {
      id: 3,
      name: 'Andrea Ferretti',
      job: 'Ingegnere Energetico',
      imgUrl: 'assets/images/about-us/andrea_ferretti.png',
    },
    {
      id: 4,
      name: 'Stefania Favara',
      job: 'Architetto',
      imgUrl: 'assets/images/about-us/stefania_favara.png',
    },
    {
      id: 5,
      name: 'Ornella Scialoia',
      job: 'Amministrazione',
      imgUrl: 'assets/images/about-us/ornella_scialoia.png',
    },
  ]);

  selectedCardId = signal<number | string | null>(null);
}
