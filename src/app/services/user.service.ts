import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User | undefined = undefined;

  private users: User[] = [
    new User(1, 'rtry', 'User'),
    new User(2, 'admin', 'Admin'),
    new User(3, 'user', 'User')
  ]

  getUser(id: number) {
    return this.users.find(x => x.id === id);
  }

  loginUser(name: string, password: string) {
    this.currentUser = this.users.find(x => x.name === name);
  }

  constructor() { }
}
