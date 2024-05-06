import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { objects, Object } from '../object-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ObjectItemComponent {
  public object?: Object;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.object = objects[params['id'] - 1];
    });
  }
}
