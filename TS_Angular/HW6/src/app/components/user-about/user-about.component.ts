import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.activatedRoute.data.subscribe(val => {
        this.user = val.users.filter(user => user.id === +value.id)[0];
      });
    });

    console.log(this.user);
  }

}
