import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../../models/post';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  styleUrls: ['./post-by-id.component.css']
})
export class PostByIdComponent implements OnInit {

  post: Post;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(urlSegment => {
      const id = +urlSegment[0].path.split('=')[1];
      this.activatedRoute.data.subscribe(value => {
        this.post = value.posts.filter(post => post.id === id)[0];
      });
    });

  }

  goBack(): void {
    this.router.navigate(['posts']);
  }
}
