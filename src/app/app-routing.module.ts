import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { ProfilesDetialsComponent } from './components/profiles-detials/profiles-detials.component';
import { ProfilesService } from './service/profiles.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProfilesListComponent,
    providers:[ProfilesService]
  },
  {
    path: 'add/:id',
    component: ProfilesDetialsComponent,
    providers:[ProfilesService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
