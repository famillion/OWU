import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllPostsComponent} from '../../components/all-posts/all-posts.component';
import {RouterModule} from '@angular/router';
import {PostsResolveService} from '../../../../services/posts-resolve.service';
import {PostComponent} from '../../components/post/post.component';
import {ShortTextPipe} from '../../../../pipes/short-text.pipe';
import {PostByIdComponent} from '../../components/post-by-id/post-by-id.component';



@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent,
    ShortTextPipe,
    PostByIdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllPostsComponent, resolve: {posts: PostsResolveService}},
      {path: ':postId', component: PostByIdComponent, resolve: {posts: PostsResolveService}}
    ]),
  ],
  exports: [
    ShortTextPipe
  ],
})
export class PostsModule {
}
