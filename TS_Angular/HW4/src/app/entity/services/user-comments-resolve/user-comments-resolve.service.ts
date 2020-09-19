import { Injectable } from '@angular/core';
import {CommentService} from '../comment/comment.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PHComment} from '../../models/Comment/PHComment';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsResolveService implements Resolve<PHComment[]>{

  constructor(private commentService: CommentService) { }

  resolve(): Observable<PHComment[]> | Promise<PHComment[]> | PHComment[] {
    return this.commentService.getAllComments();
  }
}
