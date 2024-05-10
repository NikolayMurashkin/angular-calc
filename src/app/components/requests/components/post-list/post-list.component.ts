import { Component, OnInit } from '@angular/core';
import { PostItemComponent } from '../post-item/post-item.component';
import { Post, PostService } from '../../services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostItemComponent, HttpClientModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService, HttpClient],
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) {}

  public posts$?: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
