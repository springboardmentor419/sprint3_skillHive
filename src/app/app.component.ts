import { AfterContentInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./authentication/components/header/header.component";
import { FooterComponent } from "./authentication/components/footer/footer.component";
import { loginDetails } from './interfaces/auth';
import { AuthService } from './authentication/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterContentInit{
  title = 'Skill Hive Learning Nexus';
  constructor(public authService: AuthService) {
  }
  ngAfterContentInit(): void {
    // localStorage.setItem('loginData', null);
  }
}
