import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,
    MatToolbarModule, MatExpansionModule, CommonModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchForm: FormGroup;
  private router = inject(Router);
  opened: boolean = false
  openSearch: boolean = false;
  searchFound: boolean = false;
  options = ["Sam", "Varun", "Jasmine"];
  filteredOptions = null;
  sideMenu: boolean = false;
  loginData = {
    islogged: false,
    user: null,
    name: null,
    email: null,
    id: null,
  };

  constructor(private elementRef: ElementRef, public authService: AuthService, private toastr: ToastrService,) {
    if (this.authService.isAuthenticated() !== null) {
      this.loginData = this.authService.isAuthenticated();
    }
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchStr: new FormControl('',),
    });

    this.searchForm.get('searchStr').valueChanges.subscribe(response => {
      if (response !== null && response.length > 0) {
        this.searchFound = true;
        if (this.filterData(response).length > 0) {
          this.openSearch = true;
          this.searchFound = false;
        }
      } else {
        this.openSearch = false;
        this.searchFound = false;
      }
    })
  }

  filterData(enteredData) {
    this.filteredOptions = this.options.filter(item => {
      if (item.toLowerCase().includes(enteredData.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    return this.filteredOptions;
  }

  signUp() {
    this.router.navigate(['signup']);
  }

  signIn() {
    this.router.navigate(['login']);
  }

  instructorApply() {
    this.router.navigate(['admin']);
    this.opened = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    this.opened = false;
  }

  toggleSideMenu() {
    if (this.sideMenu) {
      this.sideMenu = false;
    } else {
      this.sideMenu = true;
    }
  }

  closeSearchDropdown() {
    this.openSearch = false;
    this.searchFound = false;
    this.searchForm.reset();
  }

  openDropdown() {
    if (this.opened) {
      this.opened = false;
    }
    else {
      this.opened = true;
    }
  }

  deleteAccount() {
    this.authService.deleteAccount(this.loginData.id).subscribe({
      next: (next) => {
        this.logout();
        this.toastr.success('Account deleted successfully.', 'Success');
      }, error: (error) => {
        this.toastr.error('Error deleting account. Please try again later.', 'Error');
      }
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.opened = false;
      this.openSearch = false;
      this.searchFound = false;
      this.searchForm.reset();
      this.sideMenu = false;
    }
  }
}

