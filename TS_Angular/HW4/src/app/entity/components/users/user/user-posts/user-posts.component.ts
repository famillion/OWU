import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
