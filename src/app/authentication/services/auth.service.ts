import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User, email } from '../../interfaces/auth';
import {
  Observable,
} from 'rxjs';
import { loginDetails } from '../../interfaces/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginDetails: loginDetails = {
    islogged: false,
    user: null,
    id: null,
    email: null,
    name: null,
  }
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient,private router: Router,) { }

  registerUser(userData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, userData);
  }

  addUserToNewsletter(userEmail) {
    var user: email = {
      email: userEmail,
    }
    return this.http.post(`${this.baseUrl}/newsletteremails`, user);
  }

  userAlreadyPresent(email: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users?email=${email}`
    );
  }

  isAuthenticated() {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('loginData') == null) {
        return null;
      } else {
        return JSON.parse(localStorage.getItem('loginData'));
      }
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.reloadComponent();
  }

  reloadComponent() {
    var url = this.router.url;
    console.log("Current route I am on:", url);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/`]).then(() => {
        console.log(`After navigation I am on:${this.router.url}`)
        window.location.reload();
      })
    })
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`, {});
  }

  localStorage(data: loginDetails) {
    localStorage.setItem('loginData', JSON.stringify(data));
  }

  getUserDetails(email: string, password: string, user: string): Observable<User[]> {
    var details: Observable<User[]> = this.http.get<User[]>(
      `${this.baseUrl}/${user}?email=${email}&password=${password}`
    );
    details.subscribe({
      next: (response) => {
        if (response.length >= 1) {
          this.loginDetails = {
            islogged: true,
            user: user,
            id: response[0].id,
            email: response[0].email,
            name: response[0].fullName,
          }
          this.localStorage(this.loginDetails);
        } else {
          localStorage.clear();
        }
      }
    });
    return details;
  }
}