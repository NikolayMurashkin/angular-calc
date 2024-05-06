import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class ObjectListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public objects = objects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}

export const objects: Object[] = [
  {
    title: 'First object',
    content: 'Lorem Ipsum first qweqweqwe',
    id: 1,
  },
  {
    title: 'Second object',
    content: 'Lorem Ipsum Second qweqweqwe',
    id: 2,
  },
  {
    title: 'Third object',
    content: 'Lorem Ipsum Third qweqweqwe',
    id: 3,
  },
  {
    title: 'Fourth object',
    content: 'Lorem Ipsum Fourth qweqweqwe',
    id: 4,
  },
];

export interface Object {
  title: string;
  content: string;
  id: number;
}
