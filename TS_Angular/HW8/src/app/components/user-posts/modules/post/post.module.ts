import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SinglePostComponent} from '../../components/single-post/single-post.component';
import {RouterModule} from '@angular/router';
import {UserPostsComponent} from '../../user-posts.component';



@NgModule({
  declarations: [
    SinglePostComponent,
    UserPostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserPostsComponent}
    ])
  ]
})
export class PostModule { }
