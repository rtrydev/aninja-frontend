import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(1, 'rtry', 'User'),
    new User(2, 'admin', 'Admin'),
    new User(3, 'user', 'User')
  ]

  getUser(id: number) {
    return this.users.find(x => x.id === id);
  }

  constructor() { }
}
