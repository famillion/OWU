import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllComments():Observable<IComment[]>{
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
