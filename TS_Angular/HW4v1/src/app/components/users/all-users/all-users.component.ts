import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.users = value.users);
  }

  showUser(user: User): void {
    this.router.navigate([user.name + '=' + user.id],
      {
        state: {user},
        relativeTo: this.activatedRoute
      });
  }
}
