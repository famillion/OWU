import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comment[];

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments/');
  }

  getCommentById(id): Observable<Comment> {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
