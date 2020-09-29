import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  chooseUser(chooseForm: HTMLSelectElement): void {
    if (+chooseForm.value) {
      const user = this.users.filter(usr => usr.name.toLowerCase() === chooseForm[chooseForm.value].innerText.trim().toLowerCase())[0];
      this.router.navigate(['user', user.id],
        // {
        //   state: {userId: user.id}
        // }
      );
    }else {
      this.router.navigate(['']);
    }
  }
}
