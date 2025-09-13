import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, model, output, signal } from '@angular/core';
import { AccordionActionInterface, AccordionInterface } from '../../../model/service.interface';

@Component({
  selector: 'andreoli-accordion',
  imports: [CommonModule],
  templateUrl: './accordion-component.html',
  styleUrl: './accordion-component.css',
})
export class AccordionComponent {
  service = input.required<AccordionInterface>();
  isOpen = input<boolean>(false);
  accordionClicked = output<AccordionActionInterface>();

  isBgVisible = signal(false);
  isTextWhite = signal(false);

  private readonly _visualsEffect = effect(() => {
    const isMobile = window.innerWidth < 768;

    if (this.isOpen()) {
      this.isBgVisible.set(true);
      this.isTextWhite.set(true);
    } else {
      if (isMobile) {
        setTimeout(() => {
          this.isBgVisible.set(false);
          this.isTextWhite.set(false);
        }, 500);
      } else {
        setTimeout(() => {
          this.isTextWhite.set(false);
          this.isBgVisible.set(false);
        }, 400);
      }
    }
  });

  onAccordionClick(): void {
    this.accordionClicked.emit({
      accordionId: this.service().id,
      isOpen: !this.isOpen(),
    });
  }
}
