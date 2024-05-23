import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const allowed = regExp.test(control.value);
    return allowed ? null : { forbiddenValue: { value: control.value } };
  };
}

export const confirmPassword = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two
    ? null
    : { PasswordDoNotMatch: true };
};

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public validatorsForm = new FormGroup(
    {
      mail: new FormControl(
        '',
        checkRegExp(/^[\w_.-]+@([\w-]+\.)+\w{2,4}$/gim)
      ),
      password_one: new FormControl(''),
      password_two: new FormControl(''),
    },
    confirmPassword
  );

  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Форма не валидна');
    }
    console.log(this.myForm.get(['login'])?.value);
  }
}
