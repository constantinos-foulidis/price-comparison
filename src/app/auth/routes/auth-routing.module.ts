import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../containers/login/login.component';
import { RegisterComponent } from '../containers/register/register.component';
import { AuthviewComponent } from '../view/authview/authview.component';

const routes: Routes = [
  {
    path: '', component: AuthviewComponent, children: [
     // {path: '', pathMatch: 'full', component: LoginComponent},
      //{path: 'activation/:token', component: ActivateUserComponent, resolve: {token: ActivateUserResolver}},
      // {
      //   path: 'reset-password', children: [
      //     {path: '', pathMatch: 'full', component: ForgotPasswordComponent},
      //     {path: ':token', component: ResetPasswordComponent, resolve: {token: PasswordResetResolver}}
      //   ]
      // },
      {path: 'register', pathMatch: 'full', component: RegisterComponent},
      {path: 'login', pathMatch: 'full', component: LoginComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
