import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PHComment} from '../../../../models/Comment/PHComment';
import {Post} from '../../../../models/Post/Post';
import {CommentService} from '../../../../services/comment/comment.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

  @Input() post: Post;
  userComments: PHComment[];
  private allComments: PHComment[];

  constructor(private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(comments => this.allComments = comments);
    setTimeout(() => {
      this.userComments = this.userCommentsOnly();
    }, 100);
  }

  userCommentsOnly(): PHComment[] {
    return this.allComments.filter(comment => comment.postId === this.post?.id);
  }

}
