import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { AccordionComponent } from './accordion-component';
import { AccordionInterface } from '../../../interface/service.interface';
import { SectionTitleComponent } from '../section-title/section-title-component';

@Component({
  selector: 'andreoli-services',
  imports: [CommonModule, AccordionComponent, SectionTitleComponent],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent {
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

  // Segnale di configurazione che decide la modalità di apertura
  openExclusive = signal(true);

  // Tiene traccia di quale servizio è aperto in modalità esclusiva
  selectedServiceId = signal<number | string | null>(null);

  sortedServices = computed(() => {
    return [...this.services()].sort((a, b) => a.order - b.order);
  });
}
