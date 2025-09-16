import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { AccordionInterface } from '../../../../interface/service.interface';
import { SectionTitleComponent } from '../../shared/section-title/section-title-component';
import { ServiceItemComponent } from '../service-item/service-item-component';

@Component({
  selector: 'andreoli-services-list',
  imports: [CommonModule, ServiceItemComponent, SectionTitleComponent],
  templateUrl: './services-list-component.html',
  styleUrl: './services-list-component.css',
})
export class ServicesListComponent {
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
      title: 'Antincendio',
      iconUrl: 'assets/images/nav-logo/logo-nav-bianco.png',
      child: [
        {
          id: 1,
          title: 'Progettazione di impianti antincendio',
        },
        {
          id: 2,
          title: 'Pratiche di prevenzione incendi',
        },
        {
          id: 3,
          title: 'Consulenza antincendio per attività non soggette al controllo dei vigili del fuoco',
        },
      ],
    },
    {
      id: 4,
      order: 4,
      title: 'Architettura e design',
      iconUrl: 'assets/images/nav-logo/logo-nav-bianco.png',
      child: [
        {
          id: 1,
          title: 'Progettazione architettonica',
        },
        {
          id: 2,
          title: 'Pratiche urbanistiche',
        },
        {
          id: 3,
          title: 'Direzione lavori',
        },
        {
          id: 4,
          title: 'Grafica (loghi industriali)',
        },
      ],
    },
  ]);

  // Segnale di configurazione che decide la modalità di apertura
  openExsculsive = signal(true);

  // Tiene traccia di quale servizio è aperto in modalità esclusiva
  selectedServiceId = signal<number | string | null>(null);

  sortedServices = computed(() => {
    return [...this.services()].sort((a, b) => a.order - b.order);
  });
}
