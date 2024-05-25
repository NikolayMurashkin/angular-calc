import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  FormArray,
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
  constructor(private _fb: FormBuilder) {}

  public get skills(): FormArray {
    return this.fbGroup.get('skills') as FormArray;
  }

  public newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      expirience: '',
    });
  }

  public addSkill(): void {
    this.skills.push(this.newSkill());
  }

  public removeSkill(i: number): void {
    this.skills.removeAt(i);
  }
  public onSubmit() {
    console.log(this.fbGroup.value);
  }

  public fbGroup = this._fb.group({
    name: ['Vasya', Validators.required],
    skills: this._fb.array([]),
  });

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
