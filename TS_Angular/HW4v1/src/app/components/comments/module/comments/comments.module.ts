import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllCommentsComponent} from '../../components/all-comments/all-comments.component';
import {RouterModule} from '@angular/router';
import {CommentsResolveService} from '../../../../services/comments-resolve.service';



@NgModule({
  declarations: [
    AllCommentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent, resolve: {comments: CommentsResolveService}}
    ]),
  ]
})
export class CommentsModule { }
