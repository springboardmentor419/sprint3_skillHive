import { Component, inject,} from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NewsletterComponent } from "../../../instructor/components/newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
   private router = inject(Router);
  getStarted() {
    this.router.navigate(['login']);
  }

}
