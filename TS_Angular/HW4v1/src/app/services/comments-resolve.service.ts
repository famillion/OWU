import { Injectable } from '@angular/core';
import {CommentsService} from './comments.service';
import {Resolve} from '@angular/router';
import {IComment} from '../models/comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<IComment[]>{

  constructor(private commentService: CommentsService) { }

  resolve(): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
    return this.commentService.getAllComments();
  }
}
