import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './Material/materail.module';
import { LoginModule } from './Pages/login/login.module';
import { RegisterModule } from './Pages/register/register.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VisitorsLayoutComponent } from './layouts/visitors-layout/visitors-layout/visitors-layout.component';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout/users-layout.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VisitorsLayoutComponent,
    UsersLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    LoginModule,
    RegisterModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports: [AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
