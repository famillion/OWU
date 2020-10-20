import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userPosts: Post[];

  constructor(private postsService: PostsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postsService.getPostsByUserId(value.id).subscribe(posts => this.userPosts = posts);
    });
  }

}
