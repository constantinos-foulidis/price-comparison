import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { AuthSandboxService } from '../../sandbox/auth-sandbox.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  registerForm = new FormGroup({});

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initRegister();
  }
  initRegister(): void {
    this.registerForm.addControl('username', new FormControl('', [Validators.maxLength(20)]));
    this.registerForm.addControl('surname', new FormControl('', [Validators.maxLength(20)]));
    this.registerForm.addControl('email', new FormControl('', [Validators.email]));
    this.registerForm.addControl('name', new FormControl(''));
    this.registerForm.addControl('password', new FormControl('', [Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]));
    this.registerForm.addControl('password_confirmation', new FormControl('', [Validators.required, (control) => {
      const password = this.registerForm?.get('password')?.value;
      if (password && control.value !== password) {
        return { PasswordMismatch: true };
      }
      return null;
    }]));
  }
  onSubmit(): void {
    // this.registerForm.controls.name.setValue(this.registerForm.controls.username.value);
    // this.authSandBoxService.register(this.registerForm.value);
  }

}
