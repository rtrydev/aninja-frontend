import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('passwordConfirm');
  
    return password?.value === confirmPassword?.value ? null : { mustMatch: true };
  };