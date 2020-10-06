import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

 posts: Post[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      const id = +this.router.url.split('%3D')[1].split('/')[0];
      this.posts = value.posts.filter(post => post.userId === id);
    });
  }

}
