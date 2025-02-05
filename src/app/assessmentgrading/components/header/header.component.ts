import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isMenuOpen: boolean = false; 
  @Output() menuToggle = new EventEmitter<void>();

  toggleSideMenu() {
    this.menuToggle.emit();
  }
}
