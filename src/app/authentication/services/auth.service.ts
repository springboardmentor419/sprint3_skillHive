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
  constructor(private http: HttpClient, private router: Router,) { }

  registerUser(userData: RegisterPostData, user: string) {
    return this.http.post(`${this.baseUrl}/${user}`, userData);
  }

  addUserToNewsletter(userEmail) {
    var user: email = {
      email: userEmail,
    }
    return this.http.post(`${this.baseUrl}/newsletteremails`, user);
  }

  userAlreadyPresent(email: string, user: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/${user}?email=${email}`
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
    this.reloadComponent(null, null);
  }

  reloadComponent(user: string, email: string) {
    console.log(user);
    var url = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      if (user === "admins" || user == null) {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      } else if (user === "users") {
        this.router.navigate(['candidate/dashboard']).then(() => {
          window.location.reload();
        })
      } else {
        this.http.get<any>(`${this.baseUrl}/applicantDetails?email=${email}`).subscribe({
          next: (response) => {
            console.log(response);
            if (response.length >= 1) {
              this.router.navigate(['/']).then(() => {
                window.location.reload();
              })
            } else {
              this.router.navigate(['/apply-instructor']).then(() => {
                window.location.reload();
              })
            }
          },
        });

      }
    })
  }

  deleteAccount(id: string,user:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${user}/${id}`, {});
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
          if (user === "users") {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('candidateName', response[0].fullName);
            localStorage.setItem('candidateEmail', response[0].email);
          }
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