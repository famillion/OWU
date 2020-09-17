import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AllUsersComponent} from './entity/components/users/all-users/all-users.component';
import {RouterModule} from '@angular/router';
import {UsersResolveService} from './entity/services/all-users-resolve-service/users-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './entity/components/users/user/user.component';
import { AboutUserComponent } from './entity/components/users/about-user/about-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AboutUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'users'},
      {path: 'users', component: AllUsersComponent, resolve: {users: UsersResolveService}},
      {path: 'users/:id', component: AboutUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
