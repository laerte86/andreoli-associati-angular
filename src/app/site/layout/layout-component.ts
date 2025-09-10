import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar-component';
import { HeroComponent } from '../components/hero/hero-component';

@Component({
  selector: 'andreoli-layout',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
