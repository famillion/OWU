import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavigateComponent } from './components/header-navigate/header-navigate.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserResolveService} from './services/user-resolve.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigateComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AllUsersComponent, resolve: {users: UserResolveService}},
      {path: 'users', component: AllUsersComponent, resolve: {users: UserResolveService}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
