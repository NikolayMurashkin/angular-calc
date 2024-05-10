import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {}
