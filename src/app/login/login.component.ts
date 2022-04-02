import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Input()
  selectedOption: number = 0;

  @Output()
  visibilityChanged = new EventEmitter<{visible: boolean, option: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  closeLogin() {
    this.visibilityChanged.emit({visible: false, option: 0});
  }
}
