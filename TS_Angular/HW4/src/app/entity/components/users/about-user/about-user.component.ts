import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../models/user/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit{

  id: number;
  user: User;

  constructor(private userService: UserService,
              private route: Router) {}

  getId(): number{
    const arr = this.route.url;
    return +arr[arr.length - 1];
  }

  ngOnInit(): void {
    this.id = this.getId();
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }

}
