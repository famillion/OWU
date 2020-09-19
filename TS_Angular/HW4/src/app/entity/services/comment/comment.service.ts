import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PHComment} from '../../models/Comment/PHComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<PHComment[]> {
    return this.http.get<PHComment[]>('https://jsonplaceholder.typicode.com/comments/');
  }

  getCommentById(id): Observable<PHComment> {
    return this.http.get<PHComment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
