import { Component, OnInit, HostListener, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription | null = null;
  public isAuthenticated = false;
  public userName: string = '';

  collapsed = true;
  @Output()
  loginVisible = new EventEmitter<{visible: boolean, option: number}>();

  animeSearchForm = this.formBuilder.group({
    name: ''
  });

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.userSubscription = this.userService.currentUser.subscribe(user => {
      this.isAuthenticated = !!user;
      this.userName = user ? user.name : '';
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  showLogin(){ 
    this.loginVisible.emit({visible: true, option: 0});
  }

  showRegister(){ 
    this.loginVisible.emit({visible: true, option: 1});
  }

  onSubmit(){
    this.router.navigate(['/anime'], {queryParams: {'name': this.animeSearchForm.value.name}});
  }

  sendLogout() {
    this.userService.logoutUser();
  }

}
