import { Component } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './instructor/components/footer/footer.component';
import { NewsletterComponent } from "./instructor/components/newsletter/newsletter.component";
import { NavigationComponent } from "./instructor/components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule,  FooterComponent, NewsletterComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
