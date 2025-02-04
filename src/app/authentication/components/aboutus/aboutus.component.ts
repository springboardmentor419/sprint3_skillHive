import { Component } from '@angular/core';
import { NewsletterComponent } from '../../../instructor/components/newsletter/newsletter.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NewsletterComponent, HeaderComponent, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}
