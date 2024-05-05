import { Component } from '@angular/core';

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent {}

export const objects: Object[] = [];

export interface Object {
  title: string;
  content: string;
  id: number;
}
