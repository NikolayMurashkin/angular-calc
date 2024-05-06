import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DirectivesPageComponent {
  public colors = ['red', 'blue', 'green', 'yellow'];
  public isShow = true;
  public currentColor = this.colors[0];

  public setIsShow() {
    this.isShow = !this.isShow;
  }
}
