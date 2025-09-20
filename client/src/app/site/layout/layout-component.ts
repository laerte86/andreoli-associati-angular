import { Component } from '@angular/core';
import { HeroComponent } from '../features/hero/hero-component';
import { ContactsComponent } from '../features/contacts/contacts-component';
import { GoTopComponent } from '../features/shared/go-top/go-top-component';
import { NavbarComponent } from '../features/navbar/navbar-component';
import { ServicesListComponent } from '../features/servizi/services-list/services-list-component';
import { AboutUsComponent } from '../features/about-us/about-us/about-us-component';

@Component({
  selector: 'andreoli-layout',
  imports: [NavbarComponent, HeroComponent, ServicesListComponent, AboutUsComponent, ContactsComponent, GoTopComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
