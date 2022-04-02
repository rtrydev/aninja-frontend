import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {


  userLoginForm = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get userLoginFormControl() {
    return this.userLoginForm.controls;
  }

  onSubmit() {
    alert(this.userLoginForm.value['email'] + ' ' + this.userLoginForm.value['password']);
  }

}
