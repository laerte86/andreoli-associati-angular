import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavbarMenuInterface } from '../../../interface/navbar-menu.interface';

@Component({
  selector: 'andreoli-navbar',
  imports: [CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  navLinks = signal<NavbarMenuInterface[]>([
    {
      id: '1',
      label: 'home',
      path: '#home',
    },
    {
      id: '2',
      label: 'servizi',
      path: '#servizi',
    },
    {
      id: '3',
      label: 'chi siamo',
      path: '#chi_siamo',
    },
    {
      id: '4',
      label: 'contatti',
      path: '#contatti',
    },
  ]);

  logoNavBlack = 'assets/images/nav-logo/logo-nav-nero.png';
  logoNavWhite = 'assets/images/nav-logo/logo-nav-bianco.png';
  toggleMenu = signal(false);
}
