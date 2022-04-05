import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { AuthResult } from '../models/auth-result-model';
import { RegisterResult } from '../models/register-result-model';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<User|null>(null);

  getUser(id: number) {
    return this.httpClient.get<User>('http://rtrydev.com/api/user/' + id);
  }

  loginUser(name: string, password: string) {
    return this.httpClient.post<AuthResult>('http://rtrydev.com/api/user/login', { name: name, password: password }, { observe: 'response' })
      .pipe(tap(responseData => {
        if (responseData.body !== null && responseData.headers.get('AuthToken') !== null) {
          const user = new User(responseData.body.role, responseData.body.name, responseData.body.email, responseData.headers.get('AuthToken')!)
          this.currentUser.next(user);
        }
      }));
  }

  registerUser(name: string, email: string, password: string) {
    return this.httpClient.post<RegisterResult>('http://rtrydev.com/api/user/register', {name: name, password: password, email: email}, {observe: 'response'});
  }

  logoutUser() {
    this.currentUser.next(null);
  }

  constructor(private httpClient: HttpClient) { }
}
