import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UsersService} from './services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'HW6';

  constructor() {}

}
