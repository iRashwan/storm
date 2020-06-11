import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeUsersComponent } from 'src/app/Pages/home-users/home-users.component';
import { ProfileUserComponent } from 'src/app/Pages/profile-user/profile-user.component';
import { ProfileVisitComponent } from 'src/app/Pages/profile-visit/profile-visit.component';
import { UploadAddComponent } from 'src/app/Pages/upload-add/upload-add.component';
import { UploadEditComponent } from 'src/app/Pages/upload-edit/upload-edit.component';
import { StoriesComponent } from 'src/app/Pages/stories/stories.component';

const routes: Routes = [
  {
    path: 'home' ,
    component: HomeUsersComponent
  },
  {
    path: 'profile' ,
    component: ProfileUserComponent
  },
  {
    path: 'profile/:id' ,
    component: ProfileVisitComponent
  },
  {
    path: 'upload/add' ,
    component: UploadAddComponent
  },
  {
    path: 'upload/edit' ,
    component: UploadEditComponent
  },
  {
    path: 'story/add' ,
    component: StoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersLayoutRoutingModule { }
