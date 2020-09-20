import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../models/user/User';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {log} from 'util';


@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      const users = value.users;
      this.activatedRoute.params.subscribe(value1 => this.id = value1.id);
      this.user = users.filter(user => user.id === +this.id)[0];
    });
  }

}
