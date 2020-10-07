import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from '../../user.component';
import {RouterModule} from '@angular/router';
import {UserResolveService} from '../../../../../services/user-resolve.service';
import {UserPostsComponent} from '../../components/user-posts/user-posts.component';
import {PostsResolveService} from '../../../../../services/posts-resolve.service';
import {SinglePostComponent} from '../../components/single-post/single-post.component';



@NgModule({
    declarations: [
        UserComponent,
        UserPostsComponent,
        SinglePostComponent,
    ],
    exports: [
        SinglePostComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: UserComponent, resolve: {users: UserResolveService}, children: [
                    {path: 'user-posts', component: UserPostsComponent, resolve: {posts: PostsResolveService}}
                ]
            }
        ])
    ]
})
export class SingleUserModule { }
