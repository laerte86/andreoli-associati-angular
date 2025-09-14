import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, model, signal } from '@angular/core';
import { AccordionInterface } from '../../../interface/service.interface';

@Component({
  selector: 'andreoli-accordion',
  imports: [CommonModule],
  templateUrl: './accordion-component.html',
  styleUrl: './accordion-component.css',
})
export class AccordionComponent {
  service = input.required<AccordionInterface>();
  openExclusive = input.required<boolean>();
  selectedServiceId = model<number | string | null>();

  // Segnale che gestisce il cambiamento di stato locale in modalità non esclusiva
  private _isOpen = signal(false);

  isOpen = computed(() => {
    return this.openExclusive() ? this.isSelectedService() : this._isOpen();
  });

  isSelectedService(): boolean {
    return this.selectedServiceId() === this.service().id;
  }

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
        }, 400);
      } else {
        setTimeout(() => {
          this.isTextWhite.set(false);
          this.isBgVisible.set(false);
        }, 400);
      }
    }
  });

  toggleAccordion() {
    if (this.openExclusive()) {
      if (!this.selectedServiceId()) {
        this.selectedServiceId.set(this.service().id);
      } else {
        this.selectedServiceId.set(null);
        setTimeout(() => {
          this.selectedServiceId.set(this.service().id);
        }, 600);
      }
    } else {
      this._isOpen.set(!this._isOpen());
    }
  }
}
