import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'auth',
  //   // canActivate: [UnauthorizedGuard],
  //   loadChildren: () => AuthModule
  // },
   {
    path: '',
    // canActivate: [AuthorizedGuard],
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
   }
  // // {
  // //   path: 'company',
  // //   //canActivate: [AuthorizedGuard,
  // //   SelectedCompanyGuard],
  // //   loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)
  // // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
