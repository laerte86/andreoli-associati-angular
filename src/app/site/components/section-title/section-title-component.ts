import { Component, input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'andreoli-section-title',
  imports: [DividerModule],
  templateUrl: './section-title-component.html',
  styleUrl: './section-title-component.css',
})
export class SectionTitleComponent {
  title = input.required<string>();
}
