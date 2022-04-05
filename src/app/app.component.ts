import { Component, OnInit } from '@angular/core';
import { AnimesComponent } from './animes/animes.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  loginVisible: boolean = false;
  loginOption: number = 0;
  title = 'aninja-frontend';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.autoLogin();
  }

  showLogin(event: {visible: boolean, option: number}) {
    this.loginVisible = event.visible;
    this.loginOption = event.option;
  }
}
