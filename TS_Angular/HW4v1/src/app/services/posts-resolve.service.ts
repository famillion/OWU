import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<Post[]>{

  constructor(private postService: PostsService) { }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPosts();
  }
}
