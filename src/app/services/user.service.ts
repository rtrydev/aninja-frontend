import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { AuthResult } from '../models/auth-result-model';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new Subject<User | null>();

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

  logoutUser() {
    this.currentUser.next(null);
  }

  constructor(private httpClient: HttpClient) { }
}
