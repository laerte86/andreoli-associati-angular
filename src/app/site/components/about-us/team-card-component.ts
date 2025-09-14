import { Component, computed, ElementRef, HostListener, input, model, signal } from '@angular/core';
import { AboutUsCardInterface } from '../../../interface/about-us.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'andreoli-team-card',
  imports: [CommonModule],
  templateUrl: './team-card-component.html',
  styleUrl: './team-card-component.css',
})
export class TeamCardComponent {
  item = input.required<AboutUsCardInterface>();
  selectedCardId = model<number | string | null>();
  isSelected = computed(() => this.selectedCardId() === this.item().id);
  mobileDevice = window.innerWidth < 768;
  showNewCardType = signal(true);

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.mobileDevice) {
      const isClickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!isClickedInside) {
        this.selectedCardId.set(null);
      }
    }
  }

  selectCardId(id: number | string | null, event: MouseEvent) {
    if (this.mobileDevice) {
      event.stopPropagation();
      this.isSelected() ? this.selectedCardId.set(null) : this.selectedCardId.set(id);
    }
  }
}
