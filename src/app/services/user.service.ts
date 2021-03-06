import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { apiUrl } from '../app.module';
import { AuthResult } from '../models/auth-result-model';
import { RegisterResult } from '../models/register-result-model';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<User|null>(null);

  getUser(id: number) {
    return this.httpClient.get<User>(apiUrl + '/user/' + id);
  }

  loginUser(name: string, password: string) {
    return this.httpClient.post<AuthResult>(apiUrl + '/user/login', { name: name, password: password }, { observe: 'response' })
      .pipe(tap(responseData => {
        if (responseData.body !== null && responseData.headers.get('AuthToken') !== null) {
          const user = new User(responseData.body.role, responseData.body.name, responseData.body.email, responseData.headers.get('AuthToken')!)
          this.currentUser.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        }
      }));
  }

  autoLogin() {
    const userDataString = localStorage.getItem('userData');
    if(!userDataString) return;
    const userData : {
      email: string,
      name: string,
      role: string,
      token: string
    } = JSON.parse(userDataString);
    if(!userData) return;
    const loadedUser = new User(userData.role, userData.name, userData.email, userData.token);
    this.currentUser.next(loadedUser);

  }

  registerUser(name: string, email: string, password: string) {
    return this.httpClient.post<RegisterResult>(apiUrl + '/user/register', {name: name, password: password, email: email}, {observe: 'response'});
  }

  logoutUser() {
    this.currentUser.next(null);
    localStorage.removeItem('userData');
  }

  constructor(private httpClient: HttpClient) { }
}
