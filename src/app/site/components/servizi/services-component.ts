import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { AccordionComponent } from './accordion-component';
import { AccordionActionInterface, AccordionInterface } from '../../../interface/service.interface';
import { SectionTitleComponent } from '../section-title/section-title-component';

@Component({
  selector: 'andreoli-services',
  imports: [CommonModule, AccordionComponent, SectionTitleComponent],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent implements OnInit {
  services = signal<AccordionInterface[]>([
    {
      id: 1,
      order: 1,
      title: 'Impianti tecnologici',
      description: 'Progettazione di impianti a servizio delle costruzioni.',
      iconUrl: 'assets/images/nav-logo/logo-nav-bianco.png',
      child: [
        {
          id: 1,
          title: 'Impianti termotecnici',
        },
        {
          id: 2,
          title: 'Impianti elettrici',
        },
        {
          id: 3,
          title: 'Impianti fotovoltaici',
        },
        {
          id: 4,
          title: 'Impianti di alimentazione gas',
        },
        {
          id: 5,
          title: 'Impianti idro-sanitari',
        },
      ],
    },
    {
      id: 2,
      order: 2,
      title: 'Energia e sicurezza',
      iconUrl: 'assets/images/nav-logo/logo-nav-bianco.png',
      child: [
        {
          id: 1,
          title: 'Relazioni per il contenimento energetico degli edifici (ex. legge 10/91)',
        },
        {
          id: 2,
          title: 'Efficientamento energetico degli edifici',
        },
        {
          id: 3,
          title: 'Pratiche INAIL (ex. ISPESL)',
        },
      ],
    },
    {
      id: 3,
      order: 3,
      title: 'Prova serivizio',
      iconUrl: 'assets/images/nav-logo/logo-nav-bianco.png',
      child: [
        {
          id: 1,
          title: 'Prova1',
        },
        {
          id: 2,
          title: 'Prova2',
        },
        {
          id: 3,
          title: 'Prova3',
        },
      ],
    },
  ]);

  // Tiene traccia di quale accordion è aperto in modalità esclusiva
  openAccordionId = signal<string | number | null>(null);

  // Mappa per tenere traccia dello stato di ogni accordion in modalità non esclusiva
  openStateMap = signal<Map<string | number, boolean>>(new Map());

  // Segnale che decide la modalità di apertura
  openExclusive = signal(true);

  ngOnInit(): void {
    if (!this.openExclusive()) {
      this.mapServices();
    }
  }

  mapServices() {
    this.openStateMap.update(() => {
      const newMap = new Map<string | number, boolean>();
      this.services().forEach((item) => newMap.set(item.id, false));
      return newMap;
    });
  }

  getOpenConfig(id: string | number): boolean {
    if (this.openExclusive()) {
      return this.openAccordionId() === id;
    } else {
      return this.openStateMap().get(id) || false;
    }
  }

  sortedServices = computed(() => {
    return [...this.services()].sort((a, b) => a.order - b.order);
  });

  handleAccordionClick(action: AccordionActionInterface): void {
    if (this.openExclusive()) {
      this.openAccordionId.set(this.openAccordionId() === action.accordionId ? null : action.accordionId);
    } else {
      this.openStateMap.update((map) => {
        map.set(action.accordionId, !map.get(action.accordionId));
        return map;
      });
    }
  }
}
