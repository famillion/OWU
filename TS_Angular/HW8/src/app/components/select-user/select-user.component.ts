import { Component, OnInit } from '@angular/core';
import {User} from '../../models';
import {UsersService} from '../../services/users.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '..';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  users: User[];
  form: FormGroup;
  userName: string;

  constructor(private userService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      selectedUser: new FormControl(0)
    });
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  changed(): void {
    if (+this.form.controls.selectedUser.value) {
      const index = +this.form.controls.selectedUser.value - 1;
      this.router.navigate([this.users[index].name, this.users[index].id, 'posts'], {
        state: {user: this.users[index]},
        relativeTo: this.activatedRoute
        }
      );
      this.userName = this.users[index].name;
    } else {
      this.router.navigate(['.'], {
        relativeTo: this.activatedRoute
      });
      this.userName = '';
    }
  }
}
