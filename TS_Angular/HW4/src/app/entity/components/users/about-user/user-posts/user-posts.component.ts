import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {Post} from '../../../../models/Post/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user/User';
import {UserService} from '../../../../services/user/user.service';
import {AboutUserComponent} from '../about-user.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  user: User;
  allPosts: Post[];

  constructor(private activatedRoute: ActivatedRoute,
              private singleUser: AboutUserComponent) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( value => {
      this.allPosts = value.allPosts;
      this.user = this.singleUser.user;
    });
    this.allPosts.map(post => post.isShowComment = false);
  }


  getUserPostsOnly(): Post[] {
    return this.allPosts.filter(post => post.userId === this.user?.id);
  }
}
