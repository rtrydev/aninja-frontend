import { HttpStatusCode } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthResult } from 'src/app/models/auth-result-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Output()
  userLoggedIn = new EventEmitter<AuthResult>();
  userNotFound: boolean = false;

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
    this.userNotFound = false;
    this.userService.loginUser(this.userLoginForm.value.name, this.userLoginForm.value.password)
      .subscribe(result => {
        this.userLoggedIn.emit(result.body!);
      }, error => {
        if (error.status === HttpStatusCode.NotFound) {
          this.userNotFound = true;
        }
      });
  }

}
