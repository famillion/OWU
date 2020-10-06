import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  isPostsShowed = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.activatedRoute.data.subscribe(val => {
        this.user = val.users.filter(user => user.id === +value.name.split('=')[1])[0];
      });
    });
  }

  showUserPosts(): void {
    this.isPostsShowed = !this.isPostsShowed;
    const res = this.isPostsShowed ? 'user-posts' : '.';
    this.router.navigate([res], {
      relativeTo: this.activatedRoute,
    });
  }
}
