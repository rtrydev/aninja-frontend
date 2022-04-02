import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchingValidator } from 'src/app/providers/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  userRegisterForm = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.minLength(6), Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  }, {validators: passwordMatchingValidator}
  );
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get userRegisterFormControl() {
    return this.userRegisterForm.controls;
  }

  onSubmit() {
    alert(this.userRegisterForm.value['email'] + ' ' + this.userRegisterForm.value['password']);
  }

}
