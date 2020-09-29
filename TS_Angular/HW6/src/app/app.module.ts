import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectUserComponent } from './components/select-user/select-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { UserAboutComponent } from './components/user-about/user-about.component';
import {UserResolveService} from './services/user-resolve-service/user-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    UserAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'user/:id', component: UserAboutComponent, resolve: {users: UserResolveService}},
        {path: '**', redirectTo: ''}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
