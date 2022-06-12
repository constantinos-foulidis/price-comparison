import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRootViewComponent } from '../application-root-view/application-root-view.component';
import { LivechatComponent } from '../components/livechat/livechat.component';
import { SearchComponent } from '../components/search/search.component';
import { VotesComponent } from '../components/votes/votes.component';
import { ApplicationComponent } from '../container/application/application.component';


const routes: Routes = [
  {
    path: '', component: ApplicationRootViewComponent, children: [
      // Routes without selected application
      {path: '', pathMatch: 'full', component: ApplicationComponent }, // Never Navigate to this route
      {path: 'application/search', component: SearchComponent },
      {path: 'application/votes', component: VotesComponent },
      {path: 'application/livechat', component: LivechatComponent },
      {
              path: 'profile',
              //canActivate: [SelectedApplicationGuard],
              loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
            }
      // {
      //   path: 'application',
      //   component: ApplicationViewComponent,
      //   children: [
      //     // Routes that have selected application
      //     {path: 'overview', canActivate: [SelectedApplicationGuard], component: PlaceholderComponent},
      //     {
      //       path: 'campaign',
      //       canActivate: [SelectedApplicationGuard],
      //       loadChildren: () => import('../campaign/campaign.module').then(m => m.CampaignModule)
      //     },
      //     {
      //       path: 'configuration',
      //       canActivate: [SelectedApplicationGuard],
      //       loadChildren: () => import('../configuration/configuration.module').then(m => m.ConfigurationModule)
      //     },
      //     {
      //       path: 'templates',
      //       canActivate: [SelectedApplicationGuard],
      //       loadChildren: () => import('../template/template.module').then(m => m.TemplateModule)
      //     }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
