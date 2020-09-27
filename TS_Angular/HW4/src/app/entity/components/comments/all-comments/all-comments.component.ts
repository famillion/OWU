import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PHComment} from '../../../models/Comment/PHComment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: PHComment[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.comments = value.allComments);
  }

}
