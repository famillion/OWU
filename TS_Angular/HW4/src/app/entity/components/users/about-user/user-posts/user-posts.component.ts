import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../models/Post/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user/User';
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  user: User;
  allPosts: Post[];

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.setUser();
    this.activatedRoute.data.subscribe(value => this.allPosts = value.allPosts);
    this.allPosts.map(post => post.isShowComment = false);
  }

  setUser(): void{
    const arr = this.route.url.split('/');
    const usrId = +arr[arr.length - 2];
    this.userService.getUserById(usrId).subscribe(user => this.user = user);
  }

  getUserPostsOnly(): Post[]{
    return this.allPosts.filter(post => post.userId === this.user?.id);
  }
}
