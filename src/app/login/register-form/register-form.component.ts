import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchingValidator } from 'src/app/providers/custom-validators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  registrationFailed: boolean = false;
  registrationSuccessful: boolean = false;

  userRegisterForm = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.minLength(6), Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  }, {validators: passwordMatchingValidator}
  );
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  get userRegisterFormControl() {
    return this.userRegisterForm.controls;
  }

  onSubmit() {
    this.registrationFailed = false;
    this.registrationSuccessful = false;

    let user = this.userRegisterForm.value;
    this.userService.registerUser(user.name, user.email, user.password)
      .subscribe(result => {
        this.registrationSuccessful = true;
        this.userRegisterForm.reset();
      }, error => {
        if(error.status === HttpStatusCode.Forbidden){
          this.registrationFailed = true;
        }
      });
  }

}
