import { Component, computed, OnInit, signal, Type } from '@angular/core';
import { NavbarComponent } from '../features/navbar/navbar-component';
import { NgComponentOutlet } from '@angular/common';

export const componentMap: Record<string, () => Promise<any>> = {
  'hero': () => import('../features/hero/hero-component').then(m => m.HeroComponent),
  'services': () => import('../features/servizi/services-list/services-list-component').then(m => m.ServicesListComponent),
  'about': () => import('../features/about-us/about-us/about-us-component').then(m => m.AboutUsComponent),
  'contacts': () => import('../features/contacts/contacts-component').then(m => m.ContactsComponent),
  'go-top': () => import('../features/shared/go-top/go-top-component').then(m => m.GoTopComponent),
};


@Component({
  selector: 'andreoli-layout',
  imports: [NavbarComponent, NgComponentOutlet],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent implements OnInit {
layout = signal<LayoutInterface[]>([]);
layoutFromDb = signal<LayoutModel[]>([
  { id: 1, order: 1, key: 'go-top' },
  { id: 2, order: 2, key: 'hero' },
  { id: 3, order: 3, key: 'services' },
  { id: 4, order: 4, key: 'about' },
  { id: 5, order: 5, key: 'services' },
  { id: 6, order: 6, key: 'contacts' },
]);

orderedLayout = computed(() => this.layout().sort((a, b) => a.order - b.order));

  async ngOnInit() {
    this.layout.set(await Promise.all(this.layoutFromDb().map(async (item) => ({
      id: item.id,
      order: item.order,
      component: await componentMap[item.key](),
    }))))
  }
}

export interface LayoutInterface {
  id: string | number;
  order: number;
  component: Type<any>;
}

export interface LayoutModel {
  id: string | number;
  order: number;
  key: string;
}
