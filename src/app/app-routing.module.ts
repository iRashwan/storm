import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout/users-layout.component';
import { VisitorsLayoutComponent } from './layouts/visitors-layout/visitors-layout/visitors-layout.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LoginComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Pages/login/login.module')
        .then(m => m.LoginModule)
      }
    ]
  },
  {
    path: '',
    component: RegisterComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Pages/register/register.module')
        .then(m => m.RegisterModule)
      }
    ]
  },
  {
    path: '',
    component: UsersLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/users-layout/users-layout/users-layout.module')
        .then(m => m.UsersLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: VisitorsLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/visitors-layout/visitors-layout/visitors-layout.module')
        .then(m => m.VisitorsLayoutModule)
      }
    ]
  },
  { path: '**', component: NotFoundComponent }, // not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
