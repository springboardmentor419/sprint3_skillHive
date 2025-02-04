import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {

  @Output() closeSideMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router, private elementRef: ElementRef, private authService: AuthService) { }

  @Input() isVisible: boolean = false;

  isActive(route: string): boolean {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
    return this.router.url === route;
  }

  logout(): void {
    this.authService.logout();
    this.closeSideMenu.emit(true);
    localStorage.removeItem('candidateName');
    localStorage.removeItem('candidateEmail');
    localStorage.removeItem('otherUserData');
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

  optionClicked() {
    this.closeSideMenu.emit(true);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeSideMenu.emit(true);
    }
  }
}
