import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SideDashboardComponent } from '../../../instructor/components/admin-side-dashboard/admin-side-dashboard.component';
import { InstructorDashboardComponent } from '../../../instructor/components/instructor-dashboard/instructor-dashboard.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SideDashboardComponent,InstructorDashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  private auhtService = inject(AuthService);
  private router = inject(Router);
  logout() {
    this.auhtService.logout();
    this.router.navigate(['login']);
  }
}
