import { Component } from '@angular/core';
import { SectionTitleComponent } from '../shared/section-title/section-title-component';
import { SocialComponent } from './social/social-component';
import { FooterComponent } from './footer/footer-component';

@Component({
  selector: 'andreoli-contacts',
  imports: [SectionTitleComponent, SocialComponent, FooterComponent],
  templateUrl: './contacts-component.html',
  styleUrl: './contacts-component.css',
})
export class ContactsComponent {
  studioImage = 'assets/images/contacts/studio.png';
}
