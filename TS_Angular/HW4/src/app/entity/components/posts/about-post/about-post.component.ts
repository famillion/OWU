import { Component, OnInit } from '@angular/core';
import {PostComponent} from '../post/post.component';
import {Post} from '../../../models/Post/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
})
export class AboutPostComponent implements OnInit {

  post: Post;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      const posts = value.allPosts;
      let id: number;
      this.activatedRoute.params.subscribe(value1 => id = value1.id);
      this.post = posts.filter(post => post.id === +id)[0];
    });
  }

}
