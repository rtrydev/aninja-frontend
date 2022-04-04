import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User | undefined = undefined;

  getUser(id: number) {
    return this.httpClient.get<User>('http://rtrydev.com/api/user/' + id);
  }

  loginUser(name: string, password: string) {
    //this.currentUser = this.users.find(x => x.name === name);
  }

  constructor(private httpClient: HttpClient) { }
}
