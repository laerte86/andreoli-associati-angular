import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'andreoli-go-top',
  imports: [CommonModule],
  templateUrl: './go-top-component.html',
  styleUrl: './go-top-component.css',
})
export class GoTopComponent implements OnInit, OnDestroy {
  goTop = signal(false);
  scrollTopThreshold = signal(200);
  bounceTrigger = signal(false);

  onScroll = () => {
    const currentScroll = window.scrollY;
    const threshold = this.scrollTopThreshold();
    const wasVisible = this.goTop();
    const shouldShow = currentScroll > threshold;

    this.goTop.set(shouldShow);

    if (!wasVisible && shouldShow) {
      this.bounceTrigger.set(false); // reset
      setTimeout(() => this.bounceTrigger.set(true), 10); // triggera
    }
  };

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
