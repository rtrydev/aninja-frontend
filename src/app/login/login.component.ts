import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userLoginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.minLength(8), Validators.required]]
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
