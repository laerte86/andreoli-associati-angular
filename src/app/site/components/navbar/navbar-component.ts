import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'andreoli-navbar',
  imports: [CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  logoNavBlack = 'assets/images/nav-logo/logo-nav-nero.png';
  logoNavWhite = 'assets/images/nav-logo/logo-nav-bianco.png';
  toggleMenu = signal(false);

  NAV_LINKS = [
    {
      key: 'home',
      label: 'home',
      path: '#home',
    },
    {
      key: 'servizi',
      label: 'servizi',
      path: '#servizi',
    },
    {
      key: 'chi_siamo',
      label: 'chi siamo',
      path: '#chi_siamo',
    },
    {
      key: 'contatti',
      label: 'contatti',
      path: '#contatti',
    },
  ];
}
