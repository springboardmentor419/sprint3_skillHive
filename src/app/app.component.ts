import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from "../app/candidates/components/side-menu/side-menu.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skillhive Learning Nexus';
}

