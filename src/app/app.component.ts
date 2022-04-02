import { Component } from '@angular/core';
import { AnimesComponent } from './animes/animes.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  loginVisible: boolean = false;
  loginOption: number = 0;
  title = 'aninja-frontend';

  showLogin(event: {visible: boolean, option: number}) {
    this.loginVisible = event.visible;
    this.loginOption = event.option;
  }
}
