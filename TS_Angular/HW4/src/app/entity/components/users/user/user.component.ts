import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: User;
  @Input() idx: number;

  constructor() { }

  getIdx():number{
    return this.idx;
  }

}
