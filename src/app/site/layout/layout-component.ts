import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar-component';

@Component({
  selector: 'andreoli-layout',
  imports: [NavbarComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
