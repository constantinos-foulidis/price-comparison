import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthuserService } from '../../../service/authuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});
  hide = true;

  constructor(private authuserService:AuthuserService ) { }

  ngOnInit(): void {
    this.initLogin();
  }
  initLogin(): void {
    this.loginForm.addControl('username', new FormControl('', [Validators.required]));
    this.loginForm.addControl('password', new FormControl('', [Validators.required]));
  }
  onSubmit(e: Event): void {
      e.preventDefault();
      this.authuserService.login(this.loginForm.value).subscribe( test => {
         console.log('test', test);
      });
  }

}
