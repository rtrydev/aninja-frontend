import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  get userLoginFormControl() {
    return this.userLoginForm.controls;
  }

  onSubmit() {
    this.userService.loginUser(this.userLoginForm.value.name, this.userLoginForm.value.password);
  }

}
