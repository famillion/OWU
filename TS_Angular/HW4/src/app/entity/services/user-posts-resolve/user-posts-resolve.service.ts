import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post/Post';
import {PostService} from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class UserPostsResolveService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPosts();
  }
}
