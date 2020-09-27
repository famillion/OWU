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
import { UserPostsComponent } from './entity/components/users/about-user/user-posts/user-posts.component';
import { UserCommentsComponent } from './entity/components/users/about-user/user-comments/user-comments.component';
import { AllPostsComponent } from './entity/components/posts/all-posts/all-posts.component';
import { PostComponent } from './entity/components/posts/post/post.component';
import {UserPostsResolveService} from './entity/services/user-posts-resolve/user-posts-resolve.service';
import { AboutPostComponent } from './entity/components/posts/about-post/about-post.component';
import { AllCommentsComponent } from './entity/components/comments/all-comments/all-comments.component';
import {UserCommentsResolveService} from './entity/services/user-comments-resolve/user-comments-resolve.service';
import { SingleCommentComponent } from './entity/components/comments/single-comment/single-comment.component';




@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AboutUserComponent,
    UserPostsComponent,
    UserCommentsComponent,
    AllPostsComponent,
    PostComponent,
    AboutPostComponent,
    AllCommentsComponent,
    SingleCommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'users'},
      {path: 'users', component: AllUsersComponent, resolve: {users: UsersResolveService}},
      {path: 'users/:id', component: AboutUserComponent, resolve: {users: UsersResolveService}, children:
      [
        {path: 'user-posts', component: UserPostsComponent, resolve: {allPosts: UserPostsResolveService}},
      ]},
      {path: 'posts', component: AllPostsComponent, resolve: {allPosts: UserPostsResolveService}},
      {path: 'posts/:id', component: AboutPostComponent, resolve: {allPosts: UserPostsResolveService}},
      {path: 'all-comments', component: AllCommentsComponent, resolve:
          {allComments: UserCommentsResolveService}
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
