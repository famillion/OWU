import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: User;
  @Input() idx: number;

  constructor() { }

}
