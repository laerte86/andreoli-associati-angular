import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar-component';
import { HeroComponent } from '../components/hero/hero-component';
import { ServicesComponent } from '../components/servizi/services-component';
import { AboutUsComponent } from '../components/about-us/about-us-component';
import { ContactsComponent } from '../components/contacts/contacts-component';
import { GoTopComponent } from '../components/go-top/go-top-component';

@Component({
  selector: 'andreoli-layout',
  imports: [NavbarComponent, HeroComponent, ServicesComponent, AboutUsComponent, ContactsComponent, GoTopComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
