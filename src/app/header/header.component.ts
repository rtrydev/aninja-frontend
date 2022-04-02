import { Component, OnInit, HostListener, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output()
  loginVisible = new EventEmitter<{visible: boolean, option: number}>();

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  showLogin(){ 
    this.loginVisible.emit({visible: true, option: 0});
  }

  showRegister(){ 
    this.loginVisible.emit({visible: true, option: 1});
  }

}
