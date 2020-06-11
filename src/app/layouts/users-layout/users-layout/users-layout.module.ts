import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersLayoutRoutingModule } from './users-layout-routing.module';

import { HomeUsersComponent } from 'src/app/Pages/home-users/home-users.component';
import { ProfileUserComponent } from 'src/app/Pages/profile-user/profile-user.component';
import { ProfileVisitComponent } from 'src/app/Pages/profile-visit/profile-visit.component';
import { UploadAddComponent } from 'src/app/Pages/upload-add/upload-add.component';
import { UploadEditComponent } from 'src/app/Pages/upload-edit/upload-edit.component';
import { StoriesComponent } from 'src/app/Pages/stories/stories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/Material/materail.module';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    HomeUsersComponent,
    ProfileUserComponent,
    ProfileVisitComponent,
    UploadAddComponent,
    UploadEditComponent,
    StoriesComponent,
  ],
  imports: [
    CommonModule,
    UsersLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [AppMaterialModule]
})
export class UsersLayoutModule { }
